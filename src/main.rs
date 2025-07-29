use std::path::PathBuf;

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
use tracing_subscriber::EnvFilter;

#[derive(Parser, Debug)]
struct CliOpts {
    filename: PathBuf,
    #[clap(short, long)]
    output: Option<PathBuf>,

    #[clap(short, long)]
    verbose: bool,
}

#[tokio::main]
async fn main() -> Result<()> {
    let opts = CliOpts::parse();

    // Initialize tracing based on verbose flag
    let filter = if opts.verbose {
        EnvFilter::new("js_cleanifier=info")
    } else {
        EnvFilter::new("js_cleanifier=error,chromiumoxide=off")
    };

    tracing_subscriber::fmt()
        .with_env_filter(filter)
        .with_target(true)
        .with_level(true)
        .init();

    info!("Starting Chromiumoxide Debugger...");
    let config = BrowserConfig::builder()
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

    let page = browser.new_page("about:blank").await?;

    // Enable debugging
    page.enable_debugger().await?;
    page.enable_runtime().await?;

    // Load your JavaScript
    let js_code = tokio::fs::read_to_string(opts.filename).await?;

    // Set breakpoint
    let breakpoint = SetBreakpointByUrlParams::builder()
        .line_number(3)
        .url("file://")
        .build()
        .map_err(|e| anyhow::anyhow!("Failed to build breakpoint params: {}", e))?;
    page.execute(breakpoint).await?;

    // Execute and hit breakpoint
    match page.evaluate(js_code).await {
        Err(err) => {
            debug!("Error executing JavaScript: {err:?}");
            match err {
                CdpError::JavascriptException(exception) => {
                    debug!("JavaScript Exception: {exception}");
                    let script_id = match exception.script_id {
                        Some(id) => id,
                        None => {
                            error!("No script ID found");
                            return Ok(());
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

                    if let Some(path) = opts.output {
                        // Write prettified code to output file
                        tokio::fs::write(path, prettified.clone())
                            .await
                            .map_err(|e| {
                                anyhow::anyhow!("Failed to write to output file: {}", e)
                            })?;
                    } else {
                        info!("Successfully prettified JavaScript code");
                        println!("{prettified}");
                    }
                }
                _ => {
                    error!("Other error: {err}");
                }
            }
        }
        Ok(val) => {
            debug!("I haven't handled this case yet: {val:?}");
        }
    }

    info!("Done!");
    Ok(())
}
