export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** Self-hosted hero background loop for home, forums, and store card. */
export const WARDOGS_HERO_VIDEO = '/videos/final.mp4'

/** Still frame from the hero video (1920×1080 source). */
export const WARDOGS_POSTER = '/media/wardogs-poster.jpg'

export function heroVideoMimeType(src: string) {
  return src.endsWith('.webm') ? 'video/webm' : 'video/mp4'
}

/** Product cover from primary user-provided gameplay still. */
export const WARDOGS_COVER = '/media/wardogs-cover.webp'
/** Display-sized store card — 800x800. */
export const WARDOGS_COVER_CARD = '/media/wardogs-cover-card.webp'

/** User-provided gameplay gallery (full resolution WebP, no downscale). */
export const GAMEPLAY_IMAGE_COUNT = 13

export function gameplayImagePath(index: number) {
  const n = Math.min(Math.max(1, index), GAMEPLAY_IMAGE_COUNT)
  return `/media/image-${n}.webp`
}

export const IMAGE_1 = gameplayImagePath(1)
export const IMAGE_2 = gameplayImagePath(2)
export const IMAGE_3 = gameplayImagePath(3)

export type HomeGameplayScreenshot = {
  image: string
  alt: string
  title: string
}

const gameplayCaptions: Omit<HomeGameplayScreenshot, 'image'>[] = [
  {
    alt: 'WARDOGS wallhack ESP with enemy wireframe through concrete',
    title: 'Wallhack ESP through cover',
  },
  {
    alt: 'WARDOGS player silhouette ESP inside a damaged building',
    title: 'Silhouette ESP in CQB',
  },
  {
    alt: 'WARDOGS skeleton ESP with boxes and aim FOV on stairs',
    title: 'Skeleton ESP on stair pushes',
  },
  {
    alt: 'WARDOGS scoped skeleton ESP with distance markers outdoors',
    title: 'Scoped skeleton ESP',
  },
  {
    alt: 'WARDOGS industrial map with skeleton ESP and minimap radar',
    title: 'Outdoor skeleton ESP and radar',
  },
  {
    alt: 'WARDOGS green skeleton ESP through fence with loot prompts',
    title: 'Line-of-sight skeleton ESP',
  },
  {
    alt: 'WARDOGS bounding boxes and skeletons through building corners',
    title: 'Box ESP through corners',
  },
  {
    alt: 'WARDOGS kill confirmed with ESP marker through debris',
    title: 'Combat ESP markers',
  },
  {
    alt: 'WARDOGS third-person distance ESP and nearby player list',
    title: 'Distance ESP panel',
  },
  {
    alt: 'WARDOGS doorway fight with skeleton ESP and range tags',
    title: 'Doorway hold ESP',
  },
  {
    alt: 'WARDOGS global ESP labels and tactical minimap',
    title: 'Global ESP tags',
  },
  {
    alt: 'WARDOGS interior hallway ESP with entity distances',
    title: 'Interior ESP readouts',
  },
  {
    alt: 'WARDOGS tiled room with blue skeleton wallhack and radar',
    title: 'Wallhack skeletons with radar',
  },
]

/** Six distinct stills on the homepage (full gallery remains in data for forums/product). */
const HOME_GALLERY_INDICES = [1, 3, 5, 7, 9, 13] as const

export const HOME_GAMEPLAY_SCREENSHOTS: HomeGameplayScreenshot[] = HOME_GALLERY_INDICES.map(
  (index) => {
    const item = gameplayCaptions[index - 1]
    return {
      ...item,
      image: gameplayImagePath(index),
    }
  },
)

export const PAGE_MEDIA = {
  home: {
    image: IMAGE_1,
    alt: 'Wardogs cheats ESP and aimbot artwork for WARDOGS on PC',
    title: 'Wardogs cheats for WARDOGS',
    caption: 'Feature overview for aimbot, ESP, 2D radar, no recoil, and no spread.',
  },
  homeWhyFeatures: {
    image: IMAGE_2,
    alt: 'WARDOGS stairwell fight with player ESP marker on an enemy behind cover',
    title: 'Why ESP and radar matter in WARDOGS',
    caption: 'Big maps are where player ESP, vehicle ESP, and radar help most.',
  },
  product: {
    image: WARDOGS_COVER_CARD,
    alt: 'WARDOGS store card with looping gameplay preview video',
    title: 'WARDOGS Aimbot, ESP and Radar',
    caption: 'Store card and in-match previews on cheatforwardogs.org.',
  },
  forums: {
    image: IMAGE_1,
    alt: 'Wardogs cheats product artwork',
    title: 'Wardogs Intel',
    caption: 'Reference for setup, aimbot, ESP, radar, and cheat status articles.',
  },
  reviews: {
    image: IMAGE_2,
    alt: 'Wardogs cheats ESP review artwork',
    title: 'Wardogs cheats Reviews',
    caption: 'Feature and compatibility feedback for Wardogs cheats.',
  },
  faq: {
    image: IMAGE_2,
    alt: 'Wardogs cheats menu artwork for the FAQ',
    title: 'Wardogs FAQ',
    caption: 'Compatibility, status, and setup answers for WARDOGS.',
  },
  support: {
    image: IMAGE_1,
    alt: 'Wardogs cheats support artwork',
    title: 'Wardogs Support',
    caption: 'Delivery, loader, and Discord support for Wardogs cheats.',
  },
} as const satisfies Record<string, SeoMediaItem>

const forumSlugs = [
  'wardogs-cheats',
  'wardogs-dma',
  'wardogs-anti-cheat',
  'wardogs-2d-radar',
  'wardogs-cheats-review',
  'wardogs-hwid-spoofer',
  'wardogs-esp',
  'wardogs-aimbot',
  'wardogs-no-recoil',
] as const

const FORUM_MEDIA: Record<string, SeoMediaItem> = Object.fromEntries(
  forumSlugs.map((slug, i) => {
    const item = gameplayCaptions[i % gameplayCaptions.length]
    return [
      slug,
      {
        image: gameplayImagePath(i + 1),
        alt: item.alt,
        title: item.title,
        caption: item.title,
      },
    ]
  }),
)

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}

export function allGameplayImages() {
  return Array.from({ length: GAMEPLAY_IMAGE_COUNT }, (_, i) => gameplayImagePath(i + 1))
}
