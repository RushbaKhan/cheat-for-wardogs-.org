import type { FaqItem } from '../data/faqs'
import {
  ANTI_CHEAT,
  GAME_NAME,
  BRAND_LOGO,
  OG_IMAGE,
  PRODUCT_PATH,
  PRODUCT_PLANS,
  SEO_REGIONS,
  SITE_ABOUT,
  SITE_HOST,
  SITE_NAME,
  SITE_PURPOSE,
  SITE_URL,
  absoluteUrl,
  type PageSeo,
} from '../data/site'
import { getReviewsAggregate, REVIEWS } from '../data/reviews'
import type { GameStatus } from '../data/games'
import { WARDOGS_COVER, IMAGE_1, IMAGE_2, PAGE_MEDIA } from '../data/media'

export const PRODUCT_ID = `${SITE_URL}/#product`

function absoluteAsset(src: string) {
  return src.startsWith('http') ? src : `${SITE_URL}${src.startsWith('/') ? src : `/${src}`}`
}

function planOffers(url: string, availability: string) {
  return PRODUCT_PLANS.map((plan) => ({
    '@type': 'Offer',
    name: plan.label,
    sku: plan.id,
    url,
    availability,
    price: plan.price,
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
    description: `${plan.label} license (${plan.duration})`,
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@id': `${SITE_URL}/#organization` },
  }))
}

/** Stable Organization + WebSite identity for every page. */
export function siteIdentityGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: [SITE_HOST, 'WARDOGS ESP', 'WARDOGS aimbot'],
      url: SITE_URL,
      description: SITE_PURPOSE,
      knowsAbout: [...SITE_ABOUT],
      brand: { '@type': 'Brand', name: SITE_NAME },
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${BRAND_LOGO}`,
        width: 655,
        height: 584,
      },
      image: absoluteAsset(OG_IMAGE),
      areaServed: 'Worldwide',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_PURPOSE,
      inLanguage: 'en',
      about: {
        '@type': 'Thing',
        name: 'Wardogs cheats',
        description:
          'Commercial Wardogs cheats for PC — aimbot, ESP, 2D radar, no recoil, and no spread with Elytra status.',
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ]
}

export function webPageNode(seo: PageSeo) {
  const img = seo.image || OG_IMAGE
  const page = {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(seo.path)}#webpage`,
    url: absoluteUrl(seo.path),
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  } as Record<string, unknown>
  const hasVisibleImage =
    ['/', PRODUCT_PATH, '/forums'].includes(seo.path) || seo.path.startsWith('/forums/')
  // Text pages (faq/support/reviews) still expose OG as WebPage.image for social crawlers
  const hasOgImage = Boolean(seo.image)
  if (hasVisibleImage || hasOgImage) {
    page.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: absoluteAsset(img),
      width: 1200,
      height: 630,
      caption: seo.imageAlt || seo.title,
    }
    page.image = absoluteAsset(img)
  }
  return page
}

export function productCoreJsonLd() {
  return {
    '@type': 'Product',
    '@id': PRODUCT_ID,
    name: SITE_NAME,
    alternateName: ['WARDOGS aimbot', 'WARDOGS ESP', 'WARDOGS radar'],
    description: SITE_PURPOSE,
    url: `${SITE_URL}${PRODUCT_PATH}`,
    image: [
      absoluteAsset('/og/wardogs-cheats.jpg'),
      absoluteAsset('/og/home.jpg'),
      absoluteAsset(WARDOGS_COVER),
      absoluteAsset(PAGE_MEDIA.home.image),
      absoluteAsset(IMAGE_1),
      absoluteAsset(IMAGE_2),
    ],
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    category: 'PC game software',
    offers: planOffers(`${SITE_URL}${PRODUCT_PATH}`, 'https://schema.org/InStock'),
  }
}

export function productDetailJsonLd(status: GameStatus) {
  const availability =
    status === 'Clear' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
  return {
    ...productCoreJsonLd(),
    url: `${SITE_URL}${PRODUCT_PATH}`,
    image: absoluteAsset(PAGE_MEDIA.product.image),
    about: {
      '@type': 'VideoGame',
      name: GAME_NAME,
      alternateName: ['Wardogs', 'WAR DOGS'],
      publisher: { '@type': 'Organization', name: 'Team17' },
      gamePlatform: 'PC',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Platform', value: 'Windows PC' },
      {
        '@type': 'PropertyValue',
        name: 'Features',
        value:
          'Aimbot, FOV, box ESP, skeleton ESP, health ESP, distance ESP, weapon ESP, vehicle ESP, 2D radar, no recoil, and no spread',
      },
      { '@type': 'PropertyValue', name: 'Anti-cheat', value: ANTI_CHEAT },
      { '@type': 'PropertyValue', name: 'Market', value: 'Worldwide' },
      { '@type': 'PropertyValue', name: 'Status', value: status },
    ],
    offers: planOffers(`${SITE_URL}${PRODUCT_PATH}`, availability),
  }
}

export function productReviewsJsonLd() {
  const aggregate = getReviewsAggregate()
  return {
    ...productCoreJsonLd(),
    url: `${SITE_URL}${PRODUCT_PATH}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregate.ratingValue,
      reviewCount: aggregate.reviewCount,
      bestRating: aggregate.bestRating,
      worstRating: aggregate.worstRating,
    },
    review: REVIEWS.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.datePublished,
      reviewBody: review.body,
      name: `${review.author} Wardogs cheats review`,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1',
      },
      itemReviewed: { '@id': PRODUCT_ID },
    })),
  }
}

/** Merge site identity + WebPage + optional extra nodes into FAQ/Product graph. */
export function buildPageJsonLd(seo: PageSeo, extra: unknown[] = []) {
  const cleaned = extra.filter((node) => {
    if (!node || typeof node !== 'object') return true
    const t = (node as { '@type'?: string })['@type']
    return t !== 'WebSite' && t !== 'Organization'
  })
  return {
    '@context': 'https://schema.org',
    '@graph': [...siteIdentityGraph(), webPageNode(seo), ...cleaned],
  }
}

/** Build FAQPage JSON-LD graph node from the same items shown in FaqSection. */
export function faqPageJsonLd(items: FaqItem[], pageUrl?: string) {
  return {
    '@type': 'FAQPage',
    ...(pageUrl ? { '@id': `${pageUrl}#faq`, url: pageUrl } : {}),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export { SEO_REGIONS, absoluteUrl, OG_IMAGE, SITE_NAME, SITE_URL }
