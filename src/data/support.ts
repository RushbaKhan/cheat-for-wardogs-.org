import { SITE_HOST, SUPPORT_DISCORD_URL } from './site'

export type SupportTopic = {
  heading: string
  body: string[]
}

export type SupportFaq = {
  q: string
  a: string
}

export const SUPPORT_INTRO =
  'Support for WARDOGS Cheats buyers on cheatforwardogs.org — loader setup, cheat status, menu config, and delivery help after you purchase.'

export const SUPPORT_TOPICS: SupportTopic[] = [
  {
    heading: 'Status before you load',
    body: [
      'Check live status on the store page. If it says Updating, do not load. Wait until it is clear to load again.',
      'EAC and client patches can invalidate yesterday’s build. Status honesty matters more than rushing a control-zone fight.',
    ],
  },
  {
    heading: 'Loader and menu issues',
    body: [
      'Follow the WARDOGS setup guide for antivirus exclusions and load order before you open a ticket.',
      'If the product is Updating, wait. If a clear build still fails after one clean retry, use Get Support and include your order ID.',
    ],
  },
  {
    heading: 'Delivery and refunds',
    body: [
      'Delivery failures and extended Updating windows are covered on the Refunds page. Include your order ID when you write in on Discord.',
    ],
  },
  {
    heading: 'What we can and cannot help with',
    body: [
      'Supported: WARDOGS on Windows PC, loader and menu help for paid licenses.',
      'Not supported: other games, console or Linux builds, cracked loaders, or third-party mirrors.',
    ],
  },
]

export const SUPPORT_FAQS: SupportFaq[] = [
  {
    q: 'How do I contact support?',
    a: `Use Get Support on this page. It opens Discord at ${SUPPORT_DISCORD_URL}. Include your order ID from ${SITE_HOST}, a status screenshot (clear or Updating), and whether you need load, menu, or delivery help.`,
  },
  {
    q: 'The loader will not open — what first?',
    a: 'Follow the complete setup forum thread for the current load order. If status is Updating, wait. If a clear build fails, include your order ID in Discord.',
  },
  {
    q: 'Menu opened once then never again?',
    a: 'Do not spam launch. Restart WARDOGS, confirm antivirus exclusions, re-check status, then try one clean load. If it still fails, contact Discord support with your order ID.',
  },
  {
    q: 'Which platform is supported?',
    a: 'Windows PC only. WARDOGS on console, Linux, or Steam Deck is not supported.',
  },
  {
    q: 'Where is my delivery?',
    a: `Delivery is digital after checkout on ${SITE_HOST}. Use only that loader link. Third-party mirrors are unsupported.`,
  },
]
