use anyhow::Result;
use clap::Parser;
use js_cleanifier::{CleanifyOptions, JSCleanifier};
use tracing_subscriber::EnvFilter;

#[tokio::main]
async fn main() -> Result<()> {
    let opts = CleanifyOptions::parse();

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

    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    cleanifier
        .cleanify_file_to_output(&opts.filename, &opts)
        .await?;

    Ok(())
}
