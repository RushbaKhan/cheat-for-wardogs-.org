import { blogPath } from './blog-paths'
import { PRODUCT_PATH } from './site'

/** Official WARDOGS destinations for factual game context. */
export const OFFICIAL_GAME_LINKS = [
  {
    label: 'WARDOGS',
    href: 'https://wardogs.com/',
    description: 'Official WARDOGS game site',
  },
  {
    label: 'WARDOGS on Steam',
    href: 'https://store.steampowered.com/app/1867240/WARDOGS/',
    description: 'Official PC store page and client download',
  },
  {
    label: 'Team17',
    href: 'https://www.team17.com/games/wardogs',
    description: 'Publisher site',
  },
] as const

/** Primary internal routes for crawl equity. */
export const SITE_PAGE_LINKS = [
  { label: 'Home', to: '/', description: 'Live status, price and checkout' },
  {
    label: 'Product page',
    to: PRODUCT_PATH,
    description: 'Aimbot, ESP, radar, no recoil and checkout',
  },
  {
    label: 'Forums index',
    to: '/forums',
    description: 'Setup forums — aimbot, ESP, radar, status',
  },
  {
    label: 'Player reviews',
    to: '/reviews',
    description: 'Player reviews and ratings',
  },
  {
    label: 'FAQ answers',
    to: '/faq',
    description: 'Frequently asked questions',
  },
  {
    label: 'Support desk',
    to: '/support',
    description: 'Discord support for delivery, loader and setup',
  },
  {
    label: 'Privacy policy',
    to: '/privacy',
    description: 'Order data and site privacy',
  },
  {
    label: 'Terms of use',
    to: '/terms',
    description: 'License rules and risk disclaimer',
  },
  {
    label: 'Refund policy',
    to: '/refunds',
    description: 'When digital license refunds apply',
  },
] as const

export const SITE_GUIDE_LINKS = [
  { label: 'Ultimate WARDOGS guide', to: blogPath('wardogs-cheats') },
  { label: 'WARDOGS cloud DMA', to: blogPath('wardogs-dma') },
  { label: 'Elytra anti-cheat', to: blogPath('wardogs-anti-cheat') },
  { label: '2D radar map', to: blogPath('wardogs-2d-radar') },
  { label: '2026 feature comparison', to: blogPath('wardogs-cheats-review') },
  { label: 'HWID spoofer explained', to: blogPath('wardogs-hwid-spoofer') },
  { label: 'WARDOGS ESP', to: blogPath('wardogs-esp') },
  { label: 'Precision aimbot', to: blogPath('wardogs-aimbot') },
  { label: 'No recoil and spread', to: blogPath('wardogs-no-recoil') },
] as const

const CHECKOUT_HOST = ['za', 'deyo', '.com'].join('')
const CHECKOUT_REF = 'ZAHRAN'
const CHECKOUT_PRODUCT = '/products/wardogs'

export const CHECKOUT_URL = `https://${CHECKOUT_HOST}/go/${CHECKOUT_REF}?to=${encodeURIComponent(CHECKOUT_PRODUCT)}`

export function getCheckoutUrl(_productSlug?: string): string {
  return CHECKOUT_URL
}

export const CHECKOUT_REL = 'nofollow noopener noreferrer'
