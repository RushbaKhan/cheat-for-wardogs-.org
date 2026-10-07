export type PolicySection = {
  heading: string
  body: string[]
}

export type PolicyPageContent = {
  slug: 'privacy' | 'terms' | 'refunds'
  path: `/${'privacy' | 'terms' | 'refunds'}`
  title: string
  description: string
  h1: string
  intro: string
  sections: PolicySection[]
  related: { label: string; to: string }[]
}

export const POLICY_PAGES: PolicyPageContent[] = [
  {
    slug: 'privacy',
    path: '/privacy',
    title: 'Privacy Policy | Wardogs cheats',
    description:
      'How cheatsforwardogs.org handles order details, delivery email, Discord support messages, and basic site analytics for Wardogs cheats.',
    h1: 'Wardogs cheats Privacy Policy',
    intro:
      'This page explains what we collect when you browse cheatsforwardogs.org, buy a license, or contact Discord support — and what we do not collect.',
    sections: [
      {
        heading: 'What we collect',
        body: [
          'Checkout is handled by our payment partner. We receive the information needed to fulfill your order: email address, order ID, license duration, and payment status.',
          'If you write to Discord support, we keep the message thread, order ID, and any screenshots you attach so we can troubleshoot loader or delivery issues.',
          'The site may log basic technical data such as browser type, approximate region, and page paths for security and performance. We do not sell personal data.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          'Order email is used for license delivery, renewals, and reply-to support.',
          'Support details are used only to resolve your ticket — loader errors, exclusions, status questions, or refund requests that fall under our refunds policy.',
          'Aggregate traffic data helps us keep pages fast and catch abuse. It is not used to profile you for ads.',
        ],
      },
      {
        heading: 'Cookies and third parties',
        body: [
          'Essential cookies may be set by checkout or CDN providers so payment and delivery work.',
          'Preview media is hosted on cheatsforwardogs.org. Third-party embeds are not used for the main product preview.',
          'Official WARDOGS, Steam, and Team17 links are external. Their privacy policies apply once you leave cheatsforwardogs.org.',
        ],
      },
      {
        heading: 'Retention and requests',
        body: [
          'Order and support records are kept as long as needed for delivery, fraud prevention, and accounting, then removed or anonymized.',
          'To ask what we hold about your order or to request deletion where allowed, contact Discord support with your order ID from the Support page.',
        ],
      },
    ],
    related: [
      { label: 'Terms of Use', to: '/terms' },
      { label: 'Refunds', to: '/refunds' },
      { label: 'Support', to: '/support' },
    ],
  },
  {
    slug: 'terms',
    path: '/terms',
    title: 'Terms of Use | Wardogs cheats',
    description:
      'License rules, age limits, Elytra risk, and liability limits for Wardogs cheats on cheatsforwardogs.org.',
    h1: 'Wardogs cheats Terms of Use',
    intro:
      'Buying or running Wardogs cheats means you accept these terms. A license covers personal use of aimbot, ESP, radar, no recoil, and no spread tools for WARDOGS on Windows PC — nothing beyond that.',
    sections: [
      {
        heading: 'Acceptance and what a license covers',
        body: [
          'A key unlocks the current build for the duration you purchased: monthly (30 days) or lifetime, where offered.',
          'Handing the package to someone else, reselling it, sharing accounts, or reverse-engineering the loader breaks these terms and can end your access without a refund.',
        ],
      },
      {
        heading: 'Risk and anti-cheat disclaimer',
        body: [
          'WARDOGS uses Elytra on the current Windows PC client. Using third-party software can violate the game terms and lead to account penalties.',
          'We push rebuilds after Elytra and game updates when needed, but nothing here guarantees a build stays clear forever or that an account stays safe.',
          'All risk sits with you. We accept no liability for bans or other damage tied to using the product. Check live status before you load.',
        ],
      },
      {
        heading: 'Age requirement and acceptable use',
        body: [
          'You must be at least 18, or the age of majority where you live, to buy a license.',
          'Keys are for one person on their own Windows PC. Attacking our infrastructure, abusing support, or using the product for harassment is prohibited.',
        ],
      },
      {
        heading: 'Limitation of liability and disputes',
        body: [
          'The product is provided as is. If anything goes wrong, our total liability is capped at what you paid for the affected license in the previous 30 days.',
          'Open a ticket on Support first. Governing law follows our payment processor jurisdiction unless local law requires otherwise.',
          'We may update these terms on this page. Continued use after a change means the new version applies.',
        ],
      },
    ],
    related: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Refunds', to: '/refunds' },
      { label: 'Support', to: '/support' },
    ],
  },
  {
    slug: 'refunds',
    path: '/refunds',
    title: 'Refund Policy | Wardogs cheats',
    description:
      'When refunds apply for digital Wardogs cheats licenses, delivery failures, and Updating status windows on cheatsforwardogs.org.',
    h1: 'Wardogs cheats Refund Policy',
    intro:
      'Licenses are digital goods. This page covers when we can refund, when we cannot, and how to open a request with your order ID on Discord.',
    sections: [
      {
        heading: 'When refunds are available',
        body: [
          'If payment cleared but no license or delivery email arrived within a reasonable window, contact Support with the order ID and we will replace the key or refund.',
          'If the product shows Updating for an extended period after purchase and never returns to a clear-to-load status during your license window, you may request a refund or equivalent time credit.',
          'Duplicate charges or clear processor errors are refunded once verified.',
        ],
      },
      {
        heading: 'When refunds are not available',
        body: [
          'Change of mind after a working key has been delivered and activated.',
          'Bans or gameplay outcomes — status is never a permanent guarantee.',
          'Issues caused by skipping antivirus exclusions, running conflicting overlays, or loading while status is Updating.',
          'Shared, resold, or otherwise invalidated keys under the Terms of Use.',
        ],
      },
      {
        heading: 'How to request a refund',
        body: [
          'Open Support, use Get Support, and include: order ID, purchase email, license length (monthly or lifetime), and a short description of the problem.',
          'We aim to reply within one to two business days. Approved refunds go back through the original payment method.',
          'Buying the monthly plan first is the safest way to confirm the loader fits your PC before lifetime.',
        ],
      },
    ],
    related: [
      { label: 'Terms of Use', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Support', to: '/support' },
    ],
  },
]

export function getPolicyPage(slug: string): PolicyPageContent | undefined {
  return POLICY_PAGES.find((page) => page.slug === slug)
}
