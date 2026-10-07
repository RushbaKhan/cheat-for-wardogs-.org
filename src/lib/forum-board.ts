export type ForumThreadSummary = {
  slug: string
  title: string
  excerpt: string
  tag: string
  date: string
  replies: number
  views: number
}

export const PINNED_THREAD_SLUGS = [
  'wardogs-cheats',
  'wardogs-anti-cheat',
  'wardogs-esp',
] as const

export type BoardCategoryId = 'all' | 'setup' | 'features' | 'status'

export type BoardCategory = {
  id: BoardCategoryId
  label: string
  tags: string[] | null
}

export const BOARD_CATEGORIES: BoardCategory[] = [
  { id: 'all', label: 'All', tags: null },
  { id: 'setup', label: 'Setup', tags: ['Setup', 'Match Guide'] },
  { id: 'features', label: 'Features', tags: ['ESP', 'Aimbot', 'Radar', 'Weapons', 'Cloud DMA'] },
  { id: 'status', label: 'Status', tags: ['Status', 'Comparison'] },
]

/** Stable display views per thread (not live analytics). */
export function threadViewCount(slug: string) {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  }
  return 980 + (hash % 3200)
}

export function postMatchesCategory(thread: Pick<ForumThreadSummary, 'tag'>, categoryId: BoardCategoryId) {
  if (categoryId === 'all') return true
  const cat = BOARD_CATEGORIES.find((c) => c.id === categoryId)
  const tags = cat?.tags
  if (!tags) return true
  return tags.includes(thread.tag)
}

export function filterForumThreads(
  threads: ForumThreadSummary[],
  categoryId: BoardCategoryId,
  query: string,
) {
  const q = query.trim().toLowerCase()
  return threads.filter((thread) => {
    if (!postMatchesCategory(thread, categoryId)) return false
    if (!q) return true
    return (
      thread.title.toLowerCase().includes(q) ||
      thread.excerpt.toLowerCase().includes(q) ||
      thread.tag.toLowerCase().includes(q)
    )
  })
}

export function parseBoardCategoryId(value: string | null | undefined): BoardCategoryId {
  if (value === 'setup' || value === 'features' || value === 'status') return value
  return 'all'
}

export function formatThreadDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
