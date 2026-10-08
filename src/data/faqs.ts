import { SUPPORT_DISCORD_URL } from './site'

export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ � visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are WARDOGS Cheats?',
    a: 'WARDOGS Cheats is a Windows PC menu for WARDOGS on cheatforwardogs.org. It includes aimbot, aim assist, silent aim, triggerbot, player ESP (box, skeleton, health, name, distance, class), team check, item and pickup ESP, and 2D/3D radar, plus live cheat status after game and EAC updates.',
  },
  {
    q: 'How much do WARDOGS cheats cost?',
    a: 'Monthly access is $35 for 30 days. Lifetime access is $150. Confirm the live cheat status on cheatforwardogs.org before checkout.',
  },
  {
    q: 'Do you sell cheats for other games?',
    a: 'No. cheatforwardogs.org sells WARDOGS Cheats only � one product, for WARDOGS on Windows PC.',
  },
  {
    q: 'Is aimbot required?',
    a: 'No. You can run player ESP, item ESP, and 2D/3D radar with aimbot off, then enable aim assist, silent aim, or triggerbot when you want them.',
  },
  {
    q: 'What anti-cheat does WARDOGS use?',
    a: 'WARDOGS uses Easy Anti-Cheat (EAC) on the Windows PC client. EAC targets ESP, aimbots, triggerbots, and radar-style tools. This site publishes a live Clear or Updating cheat status � if the label says Updating, wait and load only when status is clear. The EAC guide is in the forums.',
  },
  {
    q: 'What ESP options are included?',
    a: 'Player ESP covers box, skeleton, health, name, distance, and class labels, with team check and enemy-only filters. Item ESP and pickup ESP help you read loot and cash routes around the control zone.',
  },
  {
    q: 'What is the difference between silent aim and triggerbot?',
    a: 'Silent aim adjusts where shots go while your crosshair stays still. Triggerbot fires when your crosshair crosses a valid target. Many players tune ESP and radar first, then add one aim feature at a time.',
  },
  {
    q: 'What aimbot options are included?',
    a: 'Aimbot, aim assist, silent aim, and triggerbot are separate toggles. Start with ESP and radar, then enable one aim feature and test FOV or trigger rules before stacking more.',
  },
  {
    q: 'Does this work on WARDOGS for Windows?',
    a: 'Yes. WARDOGS Cheats is built for WARDOGS on Windows PC. It is not a console or Linux build. Steam Early Access is Windows-first, with console versions planned later by the publisher.',
  },
  {
    q: 'How do I buy WARDOGS Cheats?',
    a: 'Start on the homepage, confirm cheat status is clear, and review monthly at $35 or lifetime at $150. Open the store page for the feature list, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load it?',
    a: 'After checkout, follow the WARDOGS setup guide for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where is support for WARDOGS Cheats?',
    a: `Use Get Support on the Support page or join ${SUPPORT_DISCORD_URL}. Discord is for orders, loader help, menu settings, and cheat status questions. Include your order ID. It is not the official WARDOGS community server.`,
  },
  {
    q: 'Where can I read reviews?',
    a: 'Buyer reviews with ratings are on the Reviews page. They cover ESP, radar, aim features, and whether status stayed honest after patches.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page. Delivery failures and extended Updating windows can qualify. A change of mind after a working key does not.',
  },
  {
    q: 'Is this the official WARDOGS site?',
    a: 'No. We sell WARDOGS Cheats only. Buy and play the game from the official WARDOGS site or Steam. We are not affiliated with BULKHEAD or Team17.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
