export type GameStatus = 'Clear' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is WARDOGS cheats only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'wardogs', name: 'WARDOGS', status: 'Clear', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-cheats`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  return lower.endsWith('-cheats') ? lower.slice(0, -7) : lower
}

export const FEATURE_GROUPS = [
  {
    name: 'Aimbot Options',
    items: [
      {
        name: 'Aimbot',
        text: 'Optional target assistance for WARDOGS on Windows PC. Leave it off if you only want ESP and radar.',
      },
      {
        name: 'Aim Assist',
        text: 'Light pull toward valid targets so you can stay on point without a full lock.',
      },
      {
        name: 'Silent Aim',
        text: 'Adjust aim on your client while the crosshair stays still — pair with conservative FOV for natural movement.',
      },
      {
        name: 'Triggerbot',
        text: 'Fire when your crosshair crosses a valid target. Useful for holding angles with minimal extra input.',
      },
    ],
  },
  {
    name: 'ESP Options',
    items: [
      {
        name: 'Player ESP',
        text: 'Highlight enemy and friendly players through cover so you can read fights before you peek.',
      },
      {
        name: 'Box ESP',
        text: 'Draw boxes on players for quick position reads around the control zone.',
      },
      {
        name: 'Skeleton ESP',
        text: 'Show skeletons so stance, facing, and movement stay readable at mid range.',
      },
      {
        name: 'Health ESP',
        text: 'Display remaining health on the overlay so you know who is already weakened.',
      },
      {
        name: 'Name ESP',
        text: 'Show player names on markers when you need to track specific contacts in a busy fight.',
      },
      {
        name: 'Distance ESP',
        text: 'Show distance on player markers so you can pick fights that match your weapon and radar range.',
      },
      {
        name: 'Class ESP',
        text: 'Read enemy roles or loadout class on the overlay before you commit to a push.',
      },
      {
        name: 'Team Check',
        text: 'Filter markers by team or squad so friendly icons do not clutter your read.',
      },
      {
        name: 'Enemy Only ESP',
        text: 'Limit player visuals to enemies only when you already know friendly positions.',
      },
      {
        name: 'Item ESP',
        text: 'Mark weapons, gear, and loot on the map layer so you can route to high-value pickups.',
      },
      {
        name: 'Pickup ESP',
        text: 'Highlight interactable pickups and cash sources during rotations into the zone.',
      },
    ],
  },
  {
    name: 'Radar Options',
    items: [
      {
        name: '2D Radar',
        text: 'Keep a top-down 2D radar on screen so team fights around the control zone stay readable.',
      },
      {
        name: '3D Radar',
        text: 'Plot height and distance in a 3D radar view when ridges and multi-floor compounds matter.',
      },
    ],
  },
] as const

export const GUIDE_FEATURES = FEATURE_GROUPS.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.name })),
)

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
