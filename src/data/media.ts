export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** Self-hosted hero background loop for home and forums. */
export const WARDOGS_HERO_VIDEO = '/videos/hero video.webm'

/** Still frame from the hero video. */
export const WARDOGS_POSTER = '/media/wardogs-poster.jpg'

/** Product cover art from IGN (square WARDOGS key art). */
export const WARDOGS_COVER = '/media/wardogs-cover.webp'
/** Display-sized store card — 800x800. */
export const WARDOGS_COVER_CARD = '/media/wardogs-cover-card.webp'

/** On-page gallery stills for WARDOGS. */
export const IMAGE_1 = '/media/image-1.webp'
export const IMAGE_2 = '/media/image-2.webp'
export const IMAGE_3 = '/media/image-3.webp'

export type HomeGameplayScreenshot = {
  image: string
  alt: string
  title: string
}

/** Homepage in-game screenshot gallery. */
export const HOME_GAMEPLAY_SCREENSHOTS: HomeGameplayScreenshot[] = [
  {
    image: IMAGE_1,
    alt: 'WARDOGS in-game ESP and aimbot overlay screenshot',
    title: 'WARDOGS ESP and aimbot screenshot',
  },
  {
    image: IMAGE_2,
    alt: 'WARDOGS stairwell fight with player ESP marker',
    title: 'WARDOGS player ESP screenshot',
  },
  {
    image: IMAGE_3,
    alt: 'WARDOGS control zone with radar and vehicle markers',
    title: 'WARDOGS radar screenshot',
  },
]

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
    alt: 'WARDOGS official cover art — soldier with rifle and WARDOGS logo',
    title: 'WARDOGS Aimbot, ESP and Radar',
    caption: 'Official WARDOGS cover art for the store card on cheatsforwardogs.org.',
  },
  forums: {
    image: IMAGE_1,
    alt: 'Wardogs cheats product artwork',
    title: 'Wardogs Intel',
    caption: 'Reference for setup, aimbot, ESP, radar, and Elytra status articles.',
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

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'wardogs-cheats': {
    image: IMAGE_1,
    alt: 'WARDOGS control zone with player, vehicle, and radar overlay information',
    title: 'Ultimate WARDOGS Guide',
    caption: 'A practical overview of visual information, aim controls, radar, and zone planning.',
  },
  'wardogs-dma': {
    image: IMAGE_2,
    alt: 'WARDOGS cloud DMA data flow from local PCIe hardware to remote processing',
    title: 'How WARDOGS Cloud DMA Works',
    caption: 'Local DMA hardware, remote processing, latency, connectivity, compatibility, and detection limits.',
  },
  'wardogs-anti-cheat': {
    image: IMAGE_3,
    alt: 'WARDOGS Elytra status labels for Clear and Updating on Windows PC',
    title: 'Wardogs Anti Cheat Elytra Guide',
    caption: 'How Elytra status works after WARDOGS patches and when to wait before loading.',
  },
  'wardogs-2d-radar': {
    image: IMAGE_1,
    alt: 'WARDOGS 2D radar with player markers, vehicle markers, and range controls',
    title: 'WARDOGS 2D Radar Map',
    caption: 'Player markers, vehicle markers, and radar range for clear tactical awareness.',
  },
  'wardogs-cheats-review': {
    image: IMAGE_2,
    alt: 'WARDOGS overlay used for a 2026 feature and value comparison',
    title: 'WARDOGS Cheats Review 2026',
    caption: '2026 comparison of ESP, aim, radar, Elytra status, support, pricing, and value.',
  },
  'wardogs-hwid-spoofer': {
    image: IMAGE_3,
    alt: 'Windows PC gameplay image accompanying an HWID spoofer identifier guide',
    title: 'What an HWID Spoofer Does',
    caption: 'A guide to hardware identifiers, temporary changes, compatibility, and reset behavior.',
  },
  'wardogs-esp': {
    image: IMAGE_1,
    alt: 'WARDOGS player, skeleton, health, weapon, and vehicle ESP overlay',
    title: 'WARDOGS ESP Map Awareness',
    caption: 'Box, skeleton, health, distance, weapon, and vehicle ESP guide.',
  },
  'wardogs-aimbot': {
    image: IMAGE_2,
    alt: 'WARDOGS aimbot FOV and target selection configuration',
    title: 'WARDOGS Precision Aimbot',
    caption: 'Guide to enable aimbot, FOV, smoothness, and target selection for WARDOGS.',
  },
  'wardogs-no-recoil': {
    image: IMAGE_3,
    alt: 'WARDOGS weapon no recoil and no spread configuration',
    title: 'WARDOGS No Recoil and No Spread',
    caption: 'Guide to recoil flattening, spread control, and weapon testing on WARDOGS.',
  },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
