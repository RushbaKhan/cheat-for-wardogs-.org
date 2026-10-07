/**
 * Auto-generate 1200x630 JPEG Open Graph images for every indexed URL.
 * Google SERP / social crawlers fetch these for right-side thumbnails.
 * Never overwrites battlelog-sourced /media assets.
 */
import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const ogDir = join(root, 'public', 'og')
const mediaDir = join(root, 'public', 'media')
const blogsPath = join(root, 'src', 'data', 'blogs.ts')

await mkdir(ogDir, { recursive: true })
await mkdir(mediaDir, { recursive: true })

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const image1 = join(mediaDir, 'image-1.webp')
const image2 = join(mediaDir, 'image-2.webp')
const coverArtFile = join(mediaDir, 'wardogs-cover.webp')
if (!(await exists(image1))) {
  throw new Error(`Missing gallery image: ${image1}`)
}
if (!(await exists(image2))) {
  throw new Error(`Missing gallery image: ${image2}`)
}
if (!(await exists(coverArtFile))) {
  throw new Error(`Missing product cover: ${coverArtFile}`)
}

function overlaySvg(width, height, eyebrow, title, subtitle) {
  const titleSize = Math.min(54, Math.round(width * 0.042))
  const lines = String(title).match(/.{1,28}(\s|$)/g)?.map((s) => s.trim()).filter(Boolean) || [
    title,
  ]
  const titleLines = lines.slice(0, 2)
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#08060f" stop-opacity="0.55"/>
          <stop offset="0.45" stop-color="#08060f" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#14081f" stop-opacity="0.88"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shade)"/>
      <text x="64" y="210" fill="#c084fc" font-size="22" font-family="Arial, sans-serif" font-weight="700" letter-spacing="4">${escapeXml(eyebrow)}</text>
      ${titleLines
        .map(
          (line, i) =>
            `<text x="64" y="${290 + i * 64}" fill="#ffffff" font-size="${titleSize}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(line)}</text>`,
        )
        .join('\n')}
      <text x="64" y="480" fill="#c9bdd2" font-size="26" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
      <text x="64" y="560" fill="#9299a3" font-size="20" font-family="Arial, sans-serif">cheatforwardogs.org</text>
    </svg>
  `)
}

async function writeOgJpeg(outPath, sourcePath, eyebrow, title, subtitle) {
  const base = sharp(sourcePath).resize(1200, 630, { fit: 'cover', position: 'centre' })
  const overlay = sharp(overlaySvg(1200, 630, eyebrow, title, subtitle))
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#08060f' },
  })
    .composite([
      { input: await base.toBuffer(), top: 0, left: 0 },
      { input: await overlay.png().toBuffer(), top: 0, left: 0 },
    ])
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toFile(outPath)
}

function loadForumSlugs(src) {
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
}

function loadForumMeta(src) {
  const pattern =
    /slug:\s*['"]([^'"]+)['"],[\s\S]*?metaTitle:\s*['"]([^'"]+)['"],[\s\S]*?metaDescription:\s*['"]([^'"]+)['"]/g
  return [...src.matchAll(pattern)].map((m) => ({
    slug: m[1],
    title: m[2],
    description: m[3],
  }))
}

const heroFull = image1
const coverArt = coverArtFile
const espGif = image2
const menuGif = image2
const videoThumb = image2

const staticOg = [
  {
    file: 'home.jpg',
    source: heroFull,
    eyebrow: 'WARDOGS CHEATS',
    title: 'Aimbot, ESP and Radar',
    subtitle: 'Wardogs Cheats from $35 — cheat status',
  },
  {
    file: 'wardogs-cheats.jpg',
    source: coverArt,
    eyebrow: 'PRODUCT DETAILS',
    title: 'Wardogs Store',
    subtitle: 'ESP, aimbot, radar — $35 or $150',
  },
  {
    file: 'forums.jpg',
    source: menuGif,
    eyebrow: 'GUIDES',
    title: 'Wardogs Intel',
    subtitle: 'Aimbot, ESP, loader and status guides',
  },
  {
    file: 'reviews.jpg',
    source: espGif,
    eyebrow: 'REVIEWS',
    title: 'Buyer Reviews',
    subtitle: 'Aimbot, ESP and radar feedback',
  },
  {
    file: 'faq.jpg',
    source: menuGif,
    eyebrow: 'FAQ',
    title: 'Wardogs FAQ',
    subtitle: 'Price, cheat status and setup',
  },
  {
    file: 'support.jpg',
    source: videoThumb,
    eyebrow: 'SUPPORT',
    title: 'Wardogs Support',
    subtitle: 'Loader, delivery and Windows help',
  },
  {
    file: 'privacy.jpg',
    source: heroFull,
    eyebrow: 'POLICY',
    title: 'Privacy Policy',
    subtitle: 'How cheatforwardogs.org handles order data',
  },
  {
    file: 'terms.jpg',
    source: heroFull,
    eyebrow: 'POLICY',
    title: 'Terms of Use',
    subtitle: 'License rules for Wardogs cheats',
  },
  {
    file: 'refunds.jpg',
    source: coverArt,
    eyebrow: 'POLICY',
    title: 'Refund Policy',
    subtitle: 'Digital license refund rules',
  },
]

const created = []

for (const item of staticOg) {
  const out = join(ogDir, item.file)
  await writeOgJpeg(out, item.source, item.eyebrow, item.title, item.subtitle)
  created.push(item.file)
}

const blogsSrc = await readFile(blogsPath, 'utf8')
const forums = loadForumMeta(blogsSrc)
if (!forums.length) {
  // Fallback if regex misses � at least create from slugs
  for (const slug of loadForumSlugs(blogsSrc)) {
    forums.push({
      slug,
      title: `Wardogs cheats ${slug}`,
      description: 'Wardogs cheats guide on cheatforwardogs.org',
    })
  }
}

for (const forum of forums) {
  const file = `forums-${forum.slug}.jpg`
  const out = join(ogDir, file)
  const source =
    /esp|wallhack|radar|raid/i.test(forum.slug)
      ? espGif
      : /aimbot|features|hotkeys|setup|windows|antivirus|loader|stream/i.test(forum.slug)
        ? menuGif
        : coverArt
  await writeOgJpeg(
    out,
    source,
    'WARDOGS',
    forum.title.replace(/\s*\|\s*.*$/, '').slice(0, 48),
    'Wardogs cheats � cheatforwardogs.org',
  )
  created.push(file)
}

// Auxiliary on-page art (only if missing)
async function writeIfMissing(path, factory) {
  if (await exists(path)) return false
  await factory(path)
  return true
}

function fillerSvg(width, height, eyebrow, title, subtitle) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#08060f"/>
      <text x="${width * 0.075}" y="${height * 0.47}" fill="#c084fc" font-size="${width * 0.022}" font-family="Arial, sans-serif" font-weight="700" letter-spacing="6">${escapeXml(eyebrow)}</text>
      <text x="${width * 0.075}" y="${height * 0.64}" fill="#ffffff" font-size="${width * 0.05}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(title)}</text>
      <text x="${width * 0.075}" y="${height * 0.75}" fill="#c9bdd2" font-size="${width * 0.026}" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
    </svg>
  `)
}

const faviconSrc = join(root, 'public', 'favicon.png')
const transparent = { r: 0, g: 0, b: 0, alpha: 0 }

if (!(await exists(faviconSrc))) {
  throw new Error(`Missing favicon source: ${faviconSrc}`)
}

/** White mark, black canvas ? white pixels with luminance as alpha. */
async function knockoutBlack(sourcePath) {
  const { data, info } = await sharp(sourcePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    const luma = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]
    data[i] = 255
    data[i + 1] = 255
    data[i + 2] = 255
    data[i + 3] = Math.round((luma / 255) * (data[i + 3] / 255) * 255)
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png()
}

const knockoutMark = await knockoutBlack(faviconSrc)

async function writePaddedFavicon(size, innerRatio, file) {
  const inner = Math.max(1, Math.round(size * innerRatio))
  const mark = await knockoutMark
    .clone()
    .resize(inner, inner, { fit: 'contain', background: transparent })
    .png()
    .toBuffer()
  const png = await sharp({
    create: { width: size, height: size, channels: 4, background: transparent },
  })
    .composite([{ input: mark, gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toBuffer()
  await writeFile(join(root, 'public', file), png)
  return png
}

function icoFromPng(png, dim) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(1, 4)
  const dir = Buffer.alloc(16)
  dir[0] = dim === 256 ? 0 : dim
  dir[1] = dim === 256 ? 0 : dim
  dir.writeUInt16LE(1, 4)
  dir.writeUInt16LE(32, 6)
  dir.writeUInt32LE(png.length, 8)
  dir.writeUInt32LE(22, 12)
  return Buffer.concat([header, dir, png])
}

await writePaddedFavicon(16, 0.88, 'favicon-16.png')
const png32 = await writePaddedFavicon(32, 0.88, 'favicon-32.png')
await writePaddedFavicon(48, 0.88, 'favicon-48.png')
await writePaddedFavicon(180, 0.92, 'apple-touch-icon.png')
await writeFile(join(root, 'public', 'favicon.ico'), icoFromPng(png32, 32))

console.log(`SEO OG images ready (${created.length}): ${created.slice(0, 8).join(', ')}`)
