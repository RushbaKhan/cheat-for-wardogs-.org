import { WARDOGS_COVER_CARD, IMAGE_1, IMAGE_2, gameplayImagePath } from './media'
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
    alt: 'WARDOGS gameplay screenshot for Wardogs Cheats on PC',
    title: 'Wardogs Cheats product details',
    caption:
      'Aimbot, silent aim, triggerbot, ESP, item ESP, and 2D/3D radar for WARDOGS with live cheat status',
    heroAlt: 'Wardogs Cheats aimbot, ESP and radar features',
    heroTitle: 'WARDOGS Cheats Features',
    heroCaption: 'Review aimbot, player ESP, item ESP, 2D/3D radar, and current cheat status',
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
    alt: 'Wardogs Cheats ESP and aimbot screenshot for WARDOGS on PC',
    title: 'Wardogs Cheats',
    caption: 'Aimbot, ESP, and 2D/3D radar overview for WARDOGS.',
  },
  forums: {
    src: gameplayImagePath(4),
    og: PAGE_OG.forums,
    alt: 'Wardogs cheats gameplay screenshot for forums',
    title: 'WARDOGS Cheats Intel',
    caption: 'Setup, aimbot, ESP, and radar guides for WARDOGS.',
  },
  reviews: {
    src: gameplayImagePath(8),
    og: PAGE_OG.reviews,
    alt: 'Wardogs cheats review screenshot',
    title: 'Wardogs cheats Reviews',
    caption: 'Feature and compatibility feedback for WARDOGS.',
  },
  faq: {
    src: gameplayImagePath(11),
    og: PAGE_OG.faq,
    alt: 'Wardogs cheats FAQ screenshot',
    title: 'Wardogs FAQ',
    caption: 'Compatibility, feature, and setup answers for WARDOGS.',
  },
  support: {
    src: IMAGE_2,
    og: PAGE_OG.support,
    alt: 'Wardogs cheats support screenshot',
    title: 'Wardogs Support',
    caption: 'Delivery, loader, and Discord support for Wardogs cheats.',
  },
  product: {
    src: WARDOGS_COVER_CARD,
    og: PAGE_OG.product,
    alt: 'WARDOGS store card with gameplay preview',
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
