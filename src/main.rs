use anyhow::Result;
use clap::Parser;
use js_cleanifier::{CleanifyOptions, JSCleanifier, start_logging};

#[tokio::main]
async fn main() -> Result<()> {
    let opts = CleanifyOptions::parse();

    start_logging(opts.verbose)?;

    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize(&opts).await?;

    cleanifier
        .cleanify_file_to_output(&opts.filename, &opts)
        .await?;

    Ok(())
}
