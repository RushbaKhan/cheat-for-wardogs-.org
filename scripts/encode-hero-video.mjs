/**
 * Re-encode public/videos/compressed.mp4 for Cloudflare Workers (max 25 MiB per asset).
 * Source: public/videos/compressed-source.mp4 (local master — not committed).
 *
 * True 4K cannot ship in the Worker bundle at usable quality; host 4K on R2/Stream and point
 * WARDOGS_HERO_VIDEO in src/data/media.ts at that URL instead.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const source = join(root, 'public/videos/compressed-source.mp4')
const output = join(root, 'public/videos/compressed.mp4')
const maxBytes = 25 * 1024 * 1024

if (!existsSync(source)) {
  if (!existsSync(output)) {
    throw new Error('Missing public/videos/compressed.mp4 and no compressed-source.mp4 to encode from')
  }
  console.log('encode-hero-video: skip (no compressed-source.mp4; using committed compressed.mp4)')
  process.exit(0)
}

const args = [
  '-y',
  '-i',
  source,
  '-an',
  '-c:v',
  'libx264',
  '-pix_fmt',
  'yuv420p',
  '-preset',
  'faster',
  '-crf',
  '24',
  '-movflags',
  '+faststart',
  output,
]

console.log('encode-hero-video: encoding 1080p60 for Workers asset limit…')
execFileSync('ffmpeg', args, { stdio: 'inherit' })

const bytes = statSync(output).size
if (bytes > maxBytes) {
  throw new Error(
    `Encoded hero video is ${(bytes / 1024 / 1024).toFixed(1)} MiB; must be ≤ 25 MiB for wrangler deploy`,
  )
}
console.log(`encode-hero-video: OK ${(bytes / 1024 / 1024).toFixed(1)} MiB → public/videos/compressed.mp4`)
