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
        name: 'Enable Aimbot',
        text: 'Optional aim assist for WARDOGS on Windows PC. Leave it off if you only want ESP and radar.',
      },
      {
        name: 'FOV',
        text: 'Set the aim field of view so target selection stays near your crosshair instead of snapping across the control zone.',
      },
    ],
  },
  {
    name: 'Player Visual Options',
    items: [
      {
        name: 'Box ESP',
        text: 'Draw boxes on players through cover so you can read position before you peek a ridge or building.',
      },
      {
        name: 'Skeleton ESP',
        text: 'Show player skeletons so stance, facing, and movement stay readable at mid range.',
      },
      {
        name: 'Health ESP',
        text: 'Display remaining health on the overlay so you know who is already weakened.',
      },
      {
        name: 'Distance ESP',
        text: 'Show distance on player markers so you can pick fights that match your weapon and radar range.',
      },
      {
        name: 'Weapon ESP',
        text: 'Read enemy loadouts on the overlay before you commit to a push.',
      },
      {
        name: 'Vehicle ESP',
        text: 'Mark vehicles through terrain so transports and armor are visible before they reach the control zone.',
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
        name: 'Player Markers',
        text: 'Plot player markers on the radar so you can track rotations without staring at the full map.',
      },
      {
        name: 'Vehicle Markers',
        text: 'Show vehicle markers on the radar so logistics and armor movement are easier to call.',
      },
      {
        name: 'Radar Range',
        text: 'Adjust radar range so nearby threats stay clear without flooding the overlay with distant noise.',
      },
    ],
  },
  {
    name: 'Other',
    items: [
      {
        name: 'No Recoil',
        text: 'Flatten weapon climb so full-auto sprays stay on target during close and mid-range fights.',
      },
      {
        name: 'No Spread',
        text: 'Tighten bullet spread so follow-up shots stay grouped on the point you are holding.',
      },
    ],
  },
] as const

export const GUIDE_FEATURES = FEATURE_GROUPS.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.name })),
)

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
