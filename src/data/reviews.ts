export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  /** ISO date — required for Review schema */
  datePublished: string
  body: string
}

/**
 * Buyer reviews shown on /reviews and emitted as Review + AggregateRating schema.
 */
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'Solo infantry',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Status on the store page matched what I got in a control-zone fight. Box and health ESP held after the first EAC update — glad I waited for a clear status before loading.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Logistics runner',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-13',
    body: 'Bought it for item ESP and 3D radar and left aimbot off. Reading loot routes through the hills changes how I rotate into the zone.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'WARDOGS',
    rating: 4,
    datePublished: '2026-09-13',
    body: 'No fake multi-game catalog. Player markers plus honest Updating versus clear labels is what I wanted before buying WARDOGS Cheats.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Duo queue',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'They rebuilt when other sellers still pushed a dead loader. We check status, then checkout. Skeleton ESP stayed readable on a night ridge.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Night sessions',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Menu was easy. Item ESP on, 2D radar range short. Setup guides covered antivirus and load order so the first launch was not wasted.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-11',
    body: 'Monthly at $35 was the right first step. Instant delivery and a live cheat status sold me before I looked at the lifetime plan.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Solo queue',
    game: 'WARDOGS',
    rating: 4,
    datePublished: '2026-09-11',
    body: 'Health and class readouts were solid. Triggerbot helped when a third player pushed from a truck. Silent aim FOV took a few minutes to dial in.',
  },
  {
    id: '8',
    author: 'echo',
    role: 'Farming runs',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Pickup ESP is useful so I can spot cash crates faster. The feature list matched the menu.',
  },
  {
    id: '9',
    author: 'prism',
    role: 'Ranked nights',
    game: 'WARDOGS',
    rating: 4,
    datePublished: '2026-09-15',
    body: 'Silent aim plus a tight FOV keeps tracking smooth without hard snaps. I still check status after every EAC patch note.',
  },
  {
    id: '10',
    author: 'blade',
    role: 'Three-stack',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-15',
    body: 'One license, full menu. Box ESP plus 2D radar covered our zone holds. Discord support answered with the order ID the same day.',
  },
  {
    id: '11',
    author: 'orio',
    role: 'Windows 11',
    game: 'WARDOGS',
    rating: 3,
    datePublished: '2026-09-12',
    body: 'Loader ran fine after exclusions. Wish the first-run docs called out overlay conflicts earlier — lost an hour to another overlay sitting on top.',
  },
  {
    id: '12',
    author: 'sage',
    role: 'Lifetime buyer',
    game: 'WARDOGS',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'A WARDOGS-only shop is a plus. No random filler titles. Lifetime at $150 made sense after the monthly key behaved the way the status page said.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const ratingValue = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count
  ).toFixed(1)
  return { ratingValue, reviewCount: count, bestRating: '5', worstRating: '1' }
}
