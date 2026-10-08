/**
 * Re-encode public/videos/final.mp4 for Cloudflare Workers (max 25 MiB per asset).
 * Source: public/videos/final-source.mp4 (1080p master — not committed; restore from git history).
 *
 * True 4K cannot ship in the Worker bundle at usable quality; host 4K on R2/Stream and point
 * WARDOGS_HERO_VIDEO in src/data/media.ts at that URL instead.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const source = join(root, 'public/videos/final-source.mp4')
const output = join(root, 'public/videos/final.mp4')
const maxBytes = 25 * 1024 * 1024

if (!existsSync(source)) {
  if (!existsSync(output)) {
    throw new Error('Missing public/videos/final.mp4 and no final-source.mp4 to encode from')
  }
  console.log('encode-hero-video: skip (no final-source.mp4; using committed final.mp4)')
  process.exit(0)
}

const args = [
  '-y',
  '-i',
  source,
  '-an',
  '-vf',
  'fps=30',
  '-c:v',
  'libx264',
  '-pix_fmt',
  'yuv420p',
  '-crf',
  '30',
  '-preset',
  'medium',
  '-movflags',
  '+faststart',
  output,
]

console.log('encode-hero-video: encoding 1080p30 for Workers asset limit…')
execFileSync('ffmpeg', args, { stdio: 'inherit' })

const bytes = statSync(output).size
if (bytes > maxBytes) {
  throw new Error(
    `Encoded hero video is ${(bytes / 1024 / 1024).toFixed(1)} MiB; must be ≤ 25 MiB for wrangler deploy`,
  )
}
console.log(`encode-hero-video: OK ${(bytes / 1024 / 1024).toFixed(1)} MiB → public/videos/final.mp4`)
