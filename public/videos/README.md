# Self-hosted video

- `/videos/final.mp4` — hero loop (homepage, forums, products). **Must stay ? 25 MiB** for Cloudflare Workers static assets.
- `/media/wardogs-poster.jpg` — poster still from the hero clip.

## Quality / 4K

The master clip is **1080p**. Cloudflare Workers rejects any single asset above **25 MiB**, so the deployed file is a high-bitrate **1080p H.264** encode—not the original ~50 MiB master.

**4K cannot be bundled on this Worker** at usable quality (a 4K encode from this source is ~40+ MiB). For true 4K delivery, upload to **Cloudflare R2** or **Stream** and set `WARDOGS_HERO_VIDEO` in `src/data/media.ts` to that public URL.

## Re-encode locally

1. Place `final-source.mp4` here (1080p master).
2. Run `node scripts/encode-hero-video.mjs` (requires `ffmpeg` on PATH).
