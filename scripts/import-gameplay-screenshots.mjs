/**
 * Import gameplay stills into public/media/image-{n}.webp (full resolution, quality 92).
 * Sources (first match with readable JPGs):
 *   1. public/media/_import/*.jpg  (manual drop from user)
 *   2. public/media/_frames/*.jpg  (ffmpeg extract from final.mp4)
 *   3. Cursor project assets/*.jpg (when files are fully materialized on disk)
 */
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const mediaDir = join(root, 'public', 'media')

const candidateDirs = [
  join(mediaDir, '_import'),
  join(
    process.env.APPDATA || '',
    'Cursor',
    'User',
    'workspaceStorage',
    'ce1f06d12c0d93d5c198761f05496430',
    'images',
  ),
  join(mediaDir, '_frames'),
  join(
    process.env.USERPROFILE || '',
    '.cursor',
    'projects',
    'c-Users-HP-OneDrive-Desktop-Wardogs-cheat-for-wardogs-org',
    'assets',
  ),
]

async function readableJpegs(dir) {
  let names = []
  try {
    names = readdirSync(dir).filter((name) => /\.jpe?g$/i.test(name))
  } catch {
    return []
  }
  const paths = names.map((name) => join(dir, name)).sort((a, b) => a.localeCompare(b))
  const ok = []
  for (const path of paths) {
    try {
      await sharp(path).metadata()
      ok.push(path)
    } catch {
      /* skip broken stubs */
    }
  }
  return ok
}

let sources = []
for (const dir of candidateDirs) {
  sources = await readableJpegs(dir)
  if (sources.length >= 3) {
    console.log(`Using ${sources.length} JPGs from ${dir}`)
    break
  }
}

if (sources.length < 3) {
  throw new Error(
    `Need at least 3 gameplay JPGs. Drop files in public/media/_import/ or run ffmpeg to public/media/_frames/.`,
  )
}

const webpOpts = { quality: 92, effort: 4, smartSubsample: true }

for (let i = 0; i < sources.length; i++) {
  const out = join(mediaDir, `image-${i + 1}.webp`)
  await sharp(sources[i]).webp(webpOpts).toFile(out)
  const meta = await sharp(out).metadata()
  console.log(`Wrote ${out} (${meta.width}x${meta.height})`)
}

const hero = sources[0]
await sharp(hero).webp(webpOpts).toFile(join(mediaDir, 'wardogs-cover.webp'))
await sharp(hero)
  .resize(800, 800, { fit: 'cover', position: 'centre' })
  .webp(webpOpts)
  .toFile(join(mediaDir, 'wardogs-cover-card.webp'))

console.log(`Imported ${sources.length} screenshots into public/media/`)
