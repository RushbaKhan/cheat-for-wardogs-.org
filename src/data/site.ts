import { PRODUCT_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://cheatsforwardogs.org'
export const SITE_NAME = 'Wardogs cheats'
export const SITE_SHORT_NAME = 'Wardogs cheats'
export const SITE_HOST = 'cheatsforwardogs.org'
export const GAME_NAME = 'WARDOGS'
export const GAME_SLUG = 'wardogs'
export const ANTI_CHEAT = 'Elytra'
export const PRODUCT_PATH = '/wardogs-cheats'
export const SUPPORT_DISCORD_URL = 'https://discord.gg/t6n2cUNkPT'
/** Full-resolution mark for schema. Navbar uses BRAND_NAV_LOGO. */
export const BRAND_LOGO = '/favicon.png'
/** 80×80 WebP from public/favicon.png — displayed at 20×20 in the navbar. */
export const BRAND_NAV_LOGO = '/media/nav-logo.webp?v=6'
/** Tab icons generated from public/favicon.png at build time. */
export const BRAND_FAVICON = '/favicon-32.png?v=6'
export const BRAND_FAVICON_16 = '/favicon-16.png?v=6'
export const BRAND_APPLE_TOUCH_ICON = '/apple-touch-icon.png?v=6'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: WARDOGS cheats for Windows PC (worldwide).
 * Canonical host is apex https://cheatsforwardogs.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy Wardogs cheats for WARDOGS on Windows PC — aimbot, ESP, 2D radar, no recoil, and no spread with live Elytra status and instant digital delivery.'

export const SITE_ABOUT = [
  'Wardogs cheats',
  'wardogs cheat',
  'wardogs esp',
  'wardogs aimbot',
  'wardogs anti cheat',
  'wardogs pc',
  'wardogs discord',
  'elytra anti cheat',
  'wardogs radar',
] as const

export const PRODUCT_PLANS = [
  { id: 'monthly', label: 'Monthly', price: '35', duration: 'P30D' },
  { id: 'lifetime', label: 'Lifetime', price: '150', duration: 'P99Y' },
] as const

/** Starting offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = PRODUCT_PLANS[0].price

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = PRODUCT_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Wardogs cheats | Aimbot, ESP and Radar',
    description:
      'Buy Wardogs cheats for WARDOGS on Windows PC. Aimbot, box ESP, 2D radar, no recoil, and live Elytra status. Monthly $35 or lifetime $150.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Wardogs cheats — aimbot, ESP and 2D radar for WARDOGS on PC',
    robots: INDEX_ROBOTS,
  },
  features: {
    title: 'Wardogs Features | Wardogs cheats',
    description:
      'Wardogs features for WARDOGS on PC — enable aimbot, FOV, box ESP, skeleton ESP, 2D radar, vehicle markers, no recoil, and no spread.',
    path: PRODUCT_PATH,
    ogType: 'website',
    image: PAGE_OG.product,
    imageAlt: 'Wardogs cheats feature list for aimbot, ESP and radar',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Wardogs Intel | Wardogs cheats',
    description:
      'Wardogs intel hub for Wardogs cheats — ESP, aimbot, 2D radar, Windows setup, Elytra status, and Discord before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'WARDOGS intel and setup guides for Wardogs cheats',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Wardogs cheats Reviews | Buyer Feedback',
    description:
      'Read Wardogs cheats reviews from buyers covering aimbot, ESP, 2D radar, no recoil, and Elytra status before you pick monthly or lifetime.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Buyer reviews for Wardogs cheats',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Wardogs FAQ | Wardogs cheats',
    description:
      'FAQ for Wardogs cheats on Windows PC — $35 monthly and $150 lifetime, ESP, aimbot, radar, Elytra status, setup, and Discord support.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'WARDOGS FAQ for price, Elytra status, and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Wardogs Support | Wardogs cheats',
    description:
      'Get support for Wardogs cheats on Discord — loader setup, delivery, menu config, and Elytra status help after you purchase.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Discord support for Wardogs cheats',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Wardogs Store | Wardogs cheats',
    description:
      'Wardogs store for Wardogs cheats. Monthly access is $35 and lifetime is $150, with aimbot, ESP, radar, no recoil, and instant worldwide delivery.',
    path: PRODUCT_PATH,
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'WARDOGS store checkout for aimbot, ESP and 2D radar',
    robots: INDEX_ROBOTS,
  },
  status: {
    title: 'Wardogs Status | Wardogs cheats',
    description:
      'Wardogs status for Elytra on Windows PC. Check clear or Updating labels after client patches before you load Wardogs cheats.',
    path: PRODUCT_PATH,
    ogType: 'website',
    image: PAGE_OG.product,
    imageAlt: 'Live Elytra status for Wardogs cheats',
    robots: INDEX_ROBOTS,
  },
  preview: {
    title: 'Wardogs Preview | Wardogs cheats',
    description:
      'Wardogs preview of aimbot, box ESP, skeleton ESP, and 2D radar on Windows PC before you buy Wardogs cheats.',
    path: PRODUCT_PATH,
    ogType: 'website',
    image: PAGE_OG.product,
    imageAlt: 'In-game preview for Wardogs cheats ESP and aimbot',
    robots: INDEX_ROBOTS,
  },
  setup: {
    title: 'Wardogs Setup | Wardogs cheats',
    description:
      'Wardogs setup for Windows PC — load order, Elytra status, antivirus exclusions, and Discord help after you buy Wardogs cheats.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Windows setup guides for Wardogs cheats',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: { lead: 'Wardogs cheats —', accent: 'Aimbot, ESP and Radar' },
  h2Features: { lead: 'Wardogs', accent: 'Features' },
  h2Featured: { lead: 'WARDOGS', accent: 'ESP, aimbot and radar' },
  h2WhyFeatures: { lead: 'Why These Features Matter in', accent: GAME_NAME },
  h2Gameplay: { before: 'Wardogs ', accent: 'Cheats', after: ' Preview' },
  h2SystemRequirements: {
    before: 'Wardogs ',
    accent: 'Cheats',
    after: ' System Requirements',
  },
  h2Forums: { lead: 'Wardogs', accent: 'Intel' },
  h2About: { lead: 'Check Elytra status before you buy', accent: 'Wardogs cheats' },
  h2Access: { lead: 'Buy', accent: 'Wardogs cheats' },
  h2Store: { lead: 'Wardogs', accent: 'Store' },
  h2Faq: { lead: 'Wardogs', accent: 'FAQ' },
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
