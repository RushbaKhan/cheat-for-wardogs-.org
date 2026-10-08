import { PRODUCT_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://cheatforwardogs.org'
export const SITE_NAME = 'WARDOGS Cheats'
export const SITE_SHORT_NAME = 'WARDOGS Cheats'

/** Footer intro line (avoid repeating the brand before Ã¢ÂÂfor WARDOGSÃ¢ÂÂ). */
export const SITE_FOOTER_BLURB =
  'Cheats for WARDOGS on PC Ã¢ÂÂ aimbot, silent aim, ESP, 2D/3D radar, and live cheat status, worldwide.'
export const SITE_HOST = 'cheatforwardogs.org'
export const GAME_NAME = 'WARDOGS'
export const GAME_SLUG = 'wardogs'
export const ANTI_CHEAT = 'Easy Anti-Cheat (EAC)'
export const PRODUCT_PATH = '/wardogs-cheats'
export const SUPPORT_DISCORD_URL = 'https://discord.gg/BX5rs748K'
/** Full-resolution mark for schema. */
export const BRAND_LOGO = '/favicon.png'
/** Tab icons generated from public/favicon.png at build time. */
export const BRAND_FAVICON = '/favicon-32.png?v=6'
export const BRAND_FAVICON_16 = '/favicon-16.png?v=6'
export const BRAND_APPLE_TOUCH_ICON = '/apple-touch-icon.png?v=6'

/**
 * Sole purpose - used in schema + about copy.
 * Single-product site: WARDOGS cheats for Windows PC (worldwide).
 * Canonical host is apex https://cheatforwardogs.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy WARDOGS Cheats for WARDOGS on Windows PC - aimbot, aim assist, silent aim, triggerbot, player ESP, item ESP, and 2D/3D radar with live cheat status and instant digital delivery.'

export const SITE_ABOUT = [
  'wardogs cheats',
  'wardogs cheat',
  'wardogs cheats pc',
  'wardogs aimbot',
  'wardogs esp',
  'wardogs radar',
  'wardogs hacks',
  'wardogs anti cheat',
  'wardogs eac',
  'wardogs triggerbot',
  'wardogs silent aim',
  'wardogs player esp',
  'wardogs 2d radar',
  'wardogs 3d radar',
  'wardogs cheat status',
  'buy wardogs cheats',
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
    title: 'WARDOGS Cheats | Aimbot, ESP and Radar',
    description:
      'Buy WARDOGS cheats for Windows PC. Aimbot, aim assist, silent aim, ESP, class ESP, item ESP, and 2D/3D radar. Monthly $35 or lifetime $150.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'WARDOGS Cheats - aimbot, ESP and radar for Windows PC',
    robots: INDEX_ROBOTS,
  },
  features: {
    title: 'WARDOGS Cheats Features | Aimbot, ESP and Radar',
    description:
      'Explore WARDOGS cheats features including aimbot, aim assist, silent aim, triggerbot, player ESP, box ESP, skeleton ESP, health ESP, class ESP, item ESP, and 2D/3D radar on Windows PC.',
    path: PRODUCT_PATH,
    ogType: 'website',
    image: PAGE_OG.product,
    imageAlt: 'WARDOGS Cheats feature list for aimbot, ESP and radar',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'WARDOGS Cheats Intel | Guides, Features & Status',
    description:
      'WARDOGS cheats intel hub covering aimbot, silent aim, player ESP, class ESP, item ESP, triggerbot, 2D/3D radar, Windows setup, anti-cheat updates, and cheat status.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'WARDOGS intel and setup guides for WARDOGS Cheats',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'WARDOGS Cheats Reviews | Buyer Feedback',
    description:
      'Read WARDOGS cheats reviews covering aimbot, player ESP, box ESP, skeleton ESP, item ESP, radar, and overall cheat features before choosing monthly or lifetime access.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Buyer reviews for WARDOGS Cheats',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'WARDOGS Cheats FAQ | Aimbot, ESP, Radar & Pricing',
    description:
      'WARDOGS cheats FAQ for Windows PC covering $35 monthly and $150 lifetime access, aimbot, silent aim, ESP, triggerbot, item ESP, radar, setup, and support.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'WARDOGS FAQ for price, EAC status, and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'WARDOGS Cheats Support | Setup & Assistance',
    description:
      'Get support for WARDOGS cheats covering loader setup, delivery, menu configuration, feature settings, and anti-cheat status after purchase.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Support for WARDOGS Cheats buyers',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'WARDOGS Cheats Store | Monthly & Lifetime',
    description:
      'WARDOGS cheats store for Windows PC. Get monthly access for $35 or lifetime access for $150 with aimbot, ESP, triggerbot, item ESP, and 2D/3D radar.',
    path: PRODUCT_PATH,
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'WARDOGS Cheats store - aimbot, ESP and radar',
    robots: INDEX_ROBOTS,
  },
  status: {
    title: 'WARDOGS Cheat Status | Anti-Cheat & Updates',
    description:
      'Check the latest WARDOGS cheat status before loading. Follow game and anti-cheat updates and verify compatibility before using your WARDOGS cheat.',
    path: PRODUCT_PATH,
    ogType: 'website',
    image: PAGE_OG.product,
    imageAlt: 'Live WARDOGS cheat status and EAC compatibility',
    robots: INDEX_ROBOTS,
  },
  preview: {
    title: 'WARDOGS Cheats Preview | Aimbot, ESP & Radar',
    description:
      'Preview WARDOGS cheats featuring aimbot, silent aim, player ESP, skeleton ESP, item ESP, and radar. See how the cheat menu and visual features work before checkout.',
    path: PRODUCT_PATH,
    ogType: 'website',
    image: PAGE_OG.product,
    imageAlt: 'In-game preview for WARDOGS Cheats ESP and aimbot',
    robots: INDEX_ROBOTS,
  },
  setup: {
    title: 'WARDOGS Cheats Setup | Windows PC Guide',
    description:
      'Learn how WARDOGS cheats organize aimbot, ESP, triggerbot, item ESP, and radar features, plus the settings to review before loading on Windows PC.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Windows setup guides for WARDOGS Cheats',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: { lead: 'WARDOGS Cheats |', accent: 'Aimbot, ESP and Radar' },
  h2Features: { lead: 'WARDOGS', accent: 'Features' },
  h2Featured: { lead: 'WARDOGS', accent: 'ESP, aimbot and radar' },
  h2WhyFeatures: {
    lead: 'Why These WARDOGS Features',
    accent: 'are Important',
  },
  h2Gameplay: { before: 'WARDOGS Cheats ', accent: 'Preview', after: '' },
  h2SystemRequirements: {
    before: '',
    accent: 'System Requirements',
    after: '',
  },
  h2Forums: { lead: 'WARDOGS Cheats', accent: 'Intel' },
  h2About: { lead: 'WARDOGS on PC,', accent: 'live status labels' },
  h2Access: { lead: 'Choose', accent: 'monthly or lifetime' },
  h2Store: { lead: 'See pricing on the', accent: 'products page' },
} as const

export const HOME_FAQ_HEADING = 'FAQs' as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
