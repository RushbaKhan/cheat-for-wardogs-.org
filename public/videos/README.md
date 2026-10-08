# Self-hosted video

- `/videos/compressed.mp4` — hero loop (homepage, forums, products). **Must stay ? 25 MiB** for Cloudflare Workers static assets.
- `/media/wardogs-poster.jpg` — poster still from the hero clip.

## Quality / 4K

The deployed clip is **1080p60 H.264**. Cloudflare Workers rejects any single asset above **25 MiB**, so the committed file is a high-bitrate encode from your master—not the ~27 MiB source with audio.

**4K cannot be bundled on this Worker** at usable quality (a 4K encode from this source is ~40+ MiB). For true 4K delivery, upload to **Cloudflare R2** or **Stream** and set `WARDOGS_HERO_VIDEO` in `src/data/media.ts` to that public URL.

## Re-encode locally

1. Place `compressed-source.mp4` here (your master; not committed).
2. Run `node scripts/encode-hero-video.mjs` (requires `ffmpeg` on PATH).
