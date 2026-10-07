import { WARDOGS_COVER_CARD, IMAGE_1, IMAGE_2 } from './media'
import { PRODUCT_OG, getOgImageForPath, PAGE_OG } from './og'

export { PRODUCT_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const PRODUCT_HERO = WARDOGS_COVER_CARD
export const PRODUCT_COVER = WARDOGS_COVER_CARD

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  wardogs: {
    alt: 'Official WARDOGS cover art for Wardogs cheats on PC',
    title: 'Wardogs cheats product details',
    caption: 'Aimbot, ESP, 2D radar, no recoil, and no spread for WARDOGS with Elytra status',
    heroAlt: 'Wardogs cheats aimbot, ESP and radar features',
    heroTitle: 'Wardogs Features',
    heroCaption: 'Review aimbot, ESP, 2D radar, no recoil, and current Elytra status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: IMAGE_1,
    og: PAGE_OG.home,
    alt: 'Wardogs cheats ESP and aimbot artwork for WARDOGS on PC',
    title: 'Wardogs cheats',
    caption: 'Aimbot, ESP, and 2D radar overview for WARDOGS.',
  },
  forums: {
    src: IMAGE_1,
    og: PAGE_OG.forums,
    alt: 'Wardogs cheats product artwork',
    title: 'Wardogs Intel',
    caption: 'Setup, aimbot, ESP, and radar guides for WARDOGS.',
  },
  reviews: {
    src: IMAGE_2,
    og: PAGE_OG.reviews,
    alt: 'Wardogs cheats review artwork',
    title: 'Wardogs cheats Reviews',
    caption: 'Feature and compatibility feedback for WARDOGS.',
  },
  faq: {
    src: IMAGE_2,
    og: PAGE_OG.faq,
    alt: 'Wardogs cheats FAQ artwork',
    title: 'Wardogs FAQ',
    caption: 'Compatibility, feature, and setup answers for WARDOGS.',
  },
  support: {
    src: IMAGE_1,
    og: PAGE_OG.support,
    alt: 'Wardogs cheats support artwork',
    title: 'Wardogs Support',
    caption: 'Delivery, loader, and Discord support for Wardogs cheats.',
  },
  product: {
    src: WARDOGS_COVER_CARD,
    og: PAGE_OG.product,
    alt: 'Official WARDOGS cover art for the Wardogs cheats store',
    title: 'Wardogs Store',
    caption: 'Store details for WARDOGS ESP, aimbot, and 2D radar.',
  },
}

export function getGameImage(_slug: string): string {
  return PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
