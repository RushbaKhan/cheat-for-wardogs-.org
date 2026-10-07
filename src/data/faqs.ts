export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are Wardogs cheats?',
    a: 'Wardogs cheats is a Windows PC menu for WARDOGS on cheatsforwardogs.org. It includes aimbot with FOV, player visuals (box, skeleton, health, distance, weapon, and vehicle ESP), 2D radar with player and vehicle markers, no recoil, no spread, and a live Elytra status after game patches.',
  },
  {
    q: 'How much do Wardogs cheats cost?',
    a: 'Monthly access is $35 for 30 days. Lifetime access is $150. Confirm the live Elytra status on cheatsforwardogs.org before checkout.',
  },
  {
    q: 'Do you sell cheats for other games?',
    a: 'No. cheatsforwardogs.org sells Wardogs cheats only — one product, for WARDOGS on Windows PC.',
  },
  {
    q: 'Is aimbot the main feature?',
    a: 'Aimbot is optional. You can run box, skeleton, health, distance, weapon, and vehicle ESP with 2D radar while aimbot is off, then enable aimbot, FOV, no recoil, and no spread when you want them.',
  },
  {
    q: 'What anti cheat does WARDOGS use?',
    a: 'WARDOGS currently uses Elytra on the Windows PC client. Earlier Steam listings also mentioned Easy Anti-Cheat. On this site, Elytra status is a live label. If the label says Updating, wait. Load only when status is clear. The Elytra guide is in the forums.',
  },
  {
    q: 'What ESP options are included?',
    a: 'Player visuals cover box ESP, skeleton ESP, health ESP, distance ESP, weapon ESP, and vehicle ESP so you can read people, loadouts, and transports around the control zone.',
  },
  {
    q: 'What do no recoil and no spread do?',
    a: 'No recoil flattens weapon climb. No spread tightens bullet grouping. Use them with or without aimbot during close and mid-range fights.',
  },
  {
    q: 'What aimbot options are included?',
    a: 'Enable Aimbot is an optional lock for WARDOGS. FOV limits how far from the crosshair a target can be selected. Pair them with no recoil, then leave aimbot off if you only want ESP and radar.',
  },
  {
    q: 'Does this work on WARDOGS for Windows?',
    a: 'Yes. Wardogs cheats is built for WARDOGS on Windows PC. It is not a console or Linux build. Steam Early Access is Windows-first, with console versions planned later by the publisher.',
  },
  {
    q: 'How do I buy Wardogs cheats?',
    a: 'Start on the homepage, confirm Elytra status, and review monthly at $35 or lifetime at $150. Open the store page for the feature list, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load it?',
    a: 'After checkout, follow the WARDOGS setup guide for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where is Discord support for Wardogs cheats?',
    a: 'Open the Support page and use Get Support. That Discord is for orders, loader help, and Elytra status questions. Include your order ID. It is not the official WARDOGS community server.',
  },
  {
    q: 'Where can I read reviews?',
    a: 'Buyer reviews with ratings are on the Reviews page. They cover ESP, 2D radar, no recoil, and whether status stayed honest after patches.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page. Delivery failures and extended Updating windows can qualify. A change of mind after a working key does not.',
  },
  {
    q: 'Is this the official WARDOGS site?',
    a: 'No. We sell Wardogs cheats only. Buy and play the game from the official WARDOGS site or Steam. We are not affiliated with BULKHEAD or Team17.',
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
