pub mod tree;

use std::{
    collections::HashMap,
    path::{Path, PathBuf},
    sync::Arc,
};

use anyhow::Result;
use chromiumoxide::{
    Browser, BrowserConfig,
    browser::HeadlessMode,
    cdp::js_protocol::{
        debugger::{GetScriptSourceParams, SetBreakpointByUrlParams},
        runtime::{EnableParams as RuntimeEnableParams, EventConsoleApiCalled, ScriptId},
    },
    error::CdpError,
};
use clap::Parser;
use futures_util::stream::StreamExt;
use prettify_js::prettyprint;
use tokio::sync::RwLock;
use tracing::{debug, error, info};

use crate::tree::tree_walker;

#[derive(Debug, Clone, Parser, Default)]
pub struct CleanifyOptions {
    pub filename: PathBuf,
    #[clap(short, long)]
    pub output: Option<PathBuf>,

    #[clap(short, long)]
    pub verbose: bool,

    #[clap(long, short = 'D', env)]
    pub disable_sandbox: bool,

    #[clap(long, short)]
    pub try_harder: bool,
}

impl CleanifyOptions {
    pub fn new(filename: &Path) -> Self {
        Self {
            filename: filename.to_path_buf(),
            ..CleanifyOptions::default()
        }
    }
}

impl CleanifyOptions {
    pub fn with_output(self, output: PathBuf) -> Self {
        Self {
            output: Some(output),
            ..self
        }
    }
}

#[derive(Default)]
pub struct JSCleanifier {
    browser: Option<Browser>,
}

#[derive(Debug, Default, Clone)]
pub struct CleanifyResult {
    pub console_messages: Arc<RwLock<Vec<String>>>,
    pub prettified_code: String,
    pub scripts: HashMap<ScriptId, Option<String>>,
}

impl JSCleanifier {
    pub async fn initialize(&mut self, config: &CleanifyOptions) -> Result<()> {
        info!("Starting Chromiumoxide Debugger...");
        let user_data_dir = tempfile::tempdir()
            .map_err(|e| anyhow::anyhow!("Failed to create temporary directory: {}", e))?;
        let mut browser_config = BrowserConfig::builder()
            .headless_mode(HeadlessMode::New)
            .incognito()
            .disable_cache()
            .user_data_dir(user_data_dir.path())
            .args(vec![
                "--no-first-run",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--disable-extensions",
                "--disable-default-apps",
                "--disable-sync",
            ]);

        if config.disable_sandbox {
            browser_config = browser_config.no_sandbox();
        }

        let browser_config = browser_config
            .build()
            .map_err(|e| anyhow::anyhow!("Failed to build browser config: {}", e))?;
        let (browser, mut handler) = Browser::launch(browser_config).await?;

        tokio::spawn(async move {
            while let Some(h) = handler.next().await {
                if h.is_err() {
                    debug!("Handler threw error: {h:?}");
                }
            }
        });

        self.browser = Some(browser);
        Ok(())
    }

    pub async fn cleanify_js_code(
        &self,
        js_code: &str,
        try_harder: bool,
    ) -> Result<CleanifyResult> {
        let browser = self
            .browser
            .as_ref()
            .ok_or_else(|| anyhow::anyhow!("Browser not initialized. Call initialize() first."))?;

        let page = browser.new_page("about:blank").await?;

        // Enable debugging and runtime
        page.enable_debugger().await?;
        page.enable_runtime().await?;

        // Enable console API by sending Runtime.enable with console API enabled
        let runtime_params = RuntimeEnableParams::default();
        page.execute(runtime_params).await?;

        // Listen for console API calls
        let mut console_events = page.event_listener::<EventConsoleApiCalled>().await?;

        let mut result = CleanifyResult::default();

        let console_messages_ref = result.console_messages.clone();
        // Spawn a task to handle console events
        tokio::spawn(async move {
            while let Some(event) = console_events.next().await {
                let value = event.args.first().and_then(|arg| arg.value.clone());
                info!(
                    "Console {:?}: {:?}",
                    event.r#type,
                    value.map(|v| v.to_string()).unwrap_or("".into())
                );
                let mut console_messages = console_messages_ref.write().await;
                console_messages.push(format!(
                    "{:?}: {:?}",
                    event.r#type,
                    event
                        .args
                        .iter()
                        .map(|arg| arg.value.clone())
                        .collect::<Vec<_>>()
                ));
            }
        });

        // Set breakpoint
        let breakpoint = SetBreakpointByUrlParams::builder()
            .line_number((js_code.lines().count() as u32).saturating_sub(1))
            .url("file://")
            .build()
            .map_err(|e| anyhow::anyhow!("Failed to build breakpoint params: {}", e))?;
        page.execute(breakpoint).await?;

        // Execute and hit breakpoint
        match page.evaluate(js_code.to_string()).await {
            Err(err) => {
                debug!("Error executing JavaScript: {err:?}");
                match err {
                    CdpError::JavascriptException(exception) => {
                        info!("JavaScript Exception: {exception}");
                        let script_id = match exception.script_id {
                            Some(id) => id,
                            None => {
                                error!("No script ID found");
                                return Err(anyhow::anyhow!("No script ID found"));
                            }
                        };
                        if try_harder {
                            for script_id_num in 0..1024 {
                                let script_id = ScriptId::from(script_id_num.to_string());
                                let source_params = GetScriptSourceParams::new(script_id.clone());

                                if let Ok(source) = page.execute(source_params).await {
                                    if source.script_source.is_empty() {
                                        result.scripts.insert(script_id, None);
                                    } else {
                                        info!("Found source code for script ID: {script_id:?}");
                                        let (source, _source_map) =
                                            prettyprint(&source.script_source);
                                        result.scripts.insert(script_id, Some(source));
                                    }
                                }
                            }

                            info!("Collected source code from multiple script IDs");

                            Ok(result)
                        } else {
                            let source_params = GetScriptSourceParams::new(script_id.clone());
                            let source = page.execute(source_params).await?;
                            if source.script_source.is_empty() {
                                error!("No source code found for script ID: {script_id:?}");
                                return Err(anyhow::anyhow!(
                                    "No source code found for script ID: {script_id:?}"
                                ));
                            }

                            info!("Captured source code from script ID: {script_id:?}");

                            // Prettify the JavaScript source code
                            let (prettified, _source_mappings) = prettyprint(&source.script_source);
                            result.prettified_code = prettified;
                            Ok(result)
                        }
                    }
                    _ => {
                        error!("Other error: {err}");
                        Err(anyhow::anyhow!("Execution failed: {}", err))
                    }
                }
            }
            Ok(val) => {
                debug!("JavaScript executed successfully: {val:?}");
                debug!("Prettifying the original JavaScript code");

                // Prettify the JavaScript source code
                let (prettified, _source_mappings) = prettyprint(js_code);
                result.prettified_code = prettified;
                Ok(result)
            }
        }
    }

    pub async fn cleanify_file(
        &self,
        input_path: &PathBuf,
        try_harder: bool,
    ) -> Result<CleanifyResult> {
        let js_code = tokio::fs::read_to_string(input_path).await?;
        self.cleanify_js_code(&js_code, try_harder).await
    }

    pub async fn cleanify_file_to_output(
        &self,
        input_path: &PathBuf,
        options: &CleanifyOptions,
    ) -> Result<()> {
        let prettified = self.cleanify_file(input_path, options.try_harder).await?;
        let mut output_string = String::new();
        if !prettified.prettified_code.is_empty() {
            output_string = tree_walker(&prettified.prettified_code).map_err(|e| {
                error!("Failed to walk the tree: {}", e);
                anyhow::anyhow!("Tree walking failed: {}", e)
            })?;
        } else {
            for (script_id, source) in &prettified.scripts {
                if let Some(source_code) = source {
                    let (prettified_code, _source_mappings) = prettyprint(source_code);
                    output_string.push_str(&format!(
                        "\n// Prettified source code for script ID: {}\n\n",
                        script_id.inner()
                    ));
                    output_string.push_str(&prettified_code);
                    output_string.push_str("\n\n");
                } else {
                    output_string.push_str(&format!(
                        "\n// No source code found for script ID: {script_id:?}\n\n"
                    ));
                }
            }
        }

        if let Some(output_path) = &options.output {
            // Write prettified code to output file
            tokio::fs::write(output_path, output_string)
                .await
                .map_err(|e| anyhow::anyhow!("Failed to write to output file: {}", e))?;
        } else {
            info!("Successfully prettified JavaScript code");
            println!("{output_string}");
        }

        Ok(())
    }
}
