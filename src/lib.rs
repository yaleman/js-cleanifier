use std::path::{Path, PathBuf};

use anyhow::Result;
use chromiumoxide::{
    Browser, BrowserConfig,
    cdp::js_protocol::debugger::{GetScriptSourceParams, SetBreakpointByUrlParams},
    error::CdpError,
};
use clap::Parser;
use futures_util::stream::StreamExt;
use prettify_js::prettyprint;
use tracing::{debug, error, info};

#[derive(Debug, Clone, Parser)]
pub struct CleanifyOptions {
    pub filename: PathBuf,
    #[clap(short, long)]
    pub output: Option<PathBuf>,

    #[clap(short, long)]
    pub verbose: bool,
}

impl CleanifyOptions {
    pub fn new(filename: &Path) -> Self {
        Self {
            filename: filename.to_path_buf(),
            output: None,
            verbose: false,
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

impl JSCleanifier {
    pub async fn initialize(&mut self) -> Result<()> {
        info!("Starting Chromiumoxide Debugger...");
        let user_data_dir = tempfile::tempdir()
            .map_err(|e| anyhow::anyhow!("Failed to create temporary directory: {}", e))?;
        let config = BrowserConfig::builder()
            .disable_cache()
            .user_data_dir(user_data_dir.path())
            .build()
            .map_err(|e| anyhow::anyhow!("Failed to build browser config: {}", e))?;
        let (browser, mut handler) = Browser::launch(config).await?;

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

    pub async fn cleanify_js_code(&self, js_code: &str) -> Result<String> {
        let browser = self
            .browser
            .as_ref()
            .ok_or_else(|| anyhow::anyhow!("Browser not initialized. Call initialize() first."))?;

        let page = browser.new_page("about:blank").await?;

        // Enable debugging
        page.enable_debugger().await?;
        page.enable_runtime().await?;

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
                        debug!("JavaScript Exception: {exception}");
                        let script_id = match exception.script_id {
                            Some(id) => id,
                            None => {
                                error!("No script ID found");
                                return Err(anyhow::anyhow!("No script ID found"));
                            }
                        };
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
                        Ok(prettified)
                    }
                    _ => {
                        error!("Other error: {err}");
                        Err(anyhow::anyhow!("Execution failed: {}", err))
                    }
                }
            }
            Ok(val) => {
                debug!("JavaScript executed successfully: {val:?}");
                info!("JavaScript execution completed, prettifying source code...");

                // For successful execution, we'll prettify the original code since we have it
                info!("Prettifying the original JavaScript code");

                // Prettify the JavaScript source code
                let (prettified, _source_mappings) = prettyprint(js_code);
                Ok(prettified)
            }
        }
    }

    pub async fn cleanify_file(&self, input_path: &PathBuf) -> Result<String> {
        let js_code = tokio::fs::read_to_string(input_path).await?;
        self.cleanify_js_code(&js_code).await
    }

    pub async fn cleanify_file_to_output(
        &self,
        input_path: &PathBuf,
        options: &CleanifyOptions,
    ) -> Result<()> {
        let prettified = self.cleanify_file(input_path).await?;

        if let Some(output_path) = &options.output {
            // Write prettified code to output file
            tokio::fs::write(output_path, prettified.clone())
                .await
                .map_err(|e| anyhow::anyhow!("Failed to write to output file: {}", e))?;
        } else {
            info!("Successfully prettified JavaScript code");
            println!("{prettified}");
        }

        Ok(())
    }
}
