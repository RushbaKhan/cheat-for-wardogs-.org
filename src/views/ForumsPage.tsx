import { ArrowRight, Lock, Pin } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { BoardPageHero } from '../components/BoardPageHero'
import { blogPath } from '../data/blog-paths'
import { guidePath } from '../data/games'
import { GAME_NAME, GAME_SLUG, SEO, SITE_HOST, SITE_NAME } from '../data/site'
import {
  BOARD_CATEGORIES,
  formatThreadDate,
  filterForumThreads,
  PINNED_THREAD_SLUGS,
  type BoardCategoryId,
  type ForumThreadSummary,
} from '../lib/forum-board'

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">{label}</p>
      <p className="mt-1 text-xl font-semibold tabular-nums text-white">{value}</p>
    </div>
  )
}

function ThreadRow({ post, pinned }: { post: ForumThreadSummary; pinned?: boolean }) {
  return (
    <a
      href={blogPath(post.slug)}
      className="group flex flex-col gap-3 border-b border-white/8 px-4 py-4 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5"
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {pinned ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-z-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-z-soft">
              <Pin className="h-3 w-3" strokeWidth={2} />
              Pinned
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/45">
              <Lock className="h-3 w-3" strokeWidth={2} />
              Closed
            </span>
          )}
          <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/50">
            {post.tag}
          </span>
        </div>
        <h3 className="mt-2 text-base font-semibold leading-snug text-white group-hover:text-z-soft sm:text-[1.05rem]">
          {post.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/50">{post.excerpt}</p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-4 text-xs text-white/45 sm:flex-col sm:items-end sm:gap-1 sm:text-right">
        <span>
          {post.replies} repl{post.replies === 1 ? 'y' : 'ies'}
        </span>
        <span>{post.views.toLocaleString()} views</span>
        <span className="text-white/35">{formatThreadDate(post.date)}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-white/70 group-hover:text-white sm:mt-1">
          Open thread
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  )
}

type ForumsPageProps = {
  threads: ForumThreadSummary[]
  category: BoardCategoryId
  query: string
}

export function ForumsPage({ threads, category, query }: ForumsPageProps) {
  const filtered = filterForumThreads(threads, category, query)
  const pinnedSet = new Set<string>(PINNED_THREAD_SLUGS)

  const pinned = PINNED_THREAD_SLUGS.map((slug) => threads.find((p) => p.slug === slug)).filter(
    (p): p is ForumThreadSummary => Boolean(p),
  )

  const unpinned = filtered.filter((p) => !pinnedSet.has(p.slug))
  const showPinned = pinned.length > 0 && category === 'all' && !query.trim()

  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="content-surface-nav border-b border-white/5">
        <Navbar />
      </div>

      <BoardPageHero
        badge="Read-only board"
        eyebrow={`Guides · ${SITE_HOST}`}
        title={SEO.forums.title.split(' | ')[0]}
        description={`Saved threads on ${SITE_NAME} — setup, ESP, aim, radar, and ${GAME_NAME} patch-day status. You cannot post or reply here; names in threads are editorial, not verified buyer quotes.`}
      />

      <main className="page-body relative z-10">
        <section className="page-x py-8 sm:py-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-3 sm:grid-cols-3">
              <StatCard label="Threads" value={threads.length} />
              <StatCard label="Categories" value={BOARD_CATEGORIES.length - 1} />
              <StatCard label="Pinned" value={PINNED_THREAD_SLUGS.length} />
            </div>

            <div className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90">
              This board is archived. Threads are read-only — new replies are closed. Check live cheat
              status on the{' '}
              <a href={guidePath(GAME_SLUG)} className="font-semibold underline-offset-2 hover:underline">
                products page
              </a>{' '}
              before you load.
            </div>

            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {BOARD_CATEGORIES.map((cat) => {
                  const params = new URLSearchParams()
                  if (cat.id !== 'all') params.set('category', cat.id)
                  if (query.trim()) params.set('q', query.trim())
                  const href = params.toString() ? `/forums?${params}` : '/forums'
                  const active = category === cat.id
                  return (
                    <a
                      key={cat.id}
                      href={href}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        active
                          ? 'bg-z-accent/25 text-white'
                          : 'border border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {cat.label}
                    </a>
                  )
                })}
              </div>
              <form method="get" action="/forums" className="block w-full max-w-sm">
                {category !== 'all' ? (
                  <input type="hidden" name="category" value={category} />
                ) : null}
                <label className="block">
                  <span className="sr-only">Search board</span>
                  <input
                    type="search"
                    name="q"
                    defaultValue={query}
                    placeholder="Search threads…"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-z-soft/50 focus:outline-none"
                  />
                </label>
              </form>
            </div>

            <aside className="page-card mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                  Products & checkout
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Long-form SEO guides live here. Pricing, status, and checkout for {SITE_NAME} are on
                  the products page.
                </p>
              </div>
              <a
                href={guidePath(GAME_SLUG)}
                className="cta-gradient inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              >
                Open products →
              </a>
            </aside>

            {showPinned ? (
              <div className="mt-10">
                <h2 className="text-lg font-semibold text-white">Start here</h2>
                <p className="mt-1 text-sm text-white/45">Pinned by moderators</p>
                <div className="page-card mt-4 overflow-hidden rounded-2xl border border-white/10">
                  {pinned.map((post) => (
                    <ThreadRow key={post.slug} post={post} pinned />
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">All threads</h2>
                <p className="text-sm text-white/40">
                  {filtered.length} thread{filtered.length === 1 ? '' : 's'}
                </p>
              </div>
              <div className="page-card mt-4 overflow-hidden rounded-2xl border border-white/10">
                {unpinned.length === 0 ? (
                  <p className="px-5 py-8 text-center text-sm text-white/45">
                    No threads match this filter.
                  </p>
                ) : (
                  unpinned.map((post) => <ThreadRow key={post.slug} post={post} />)
                )}
              </div>
            </div>
          </div>
        </section>

        <SiteFooter currentPath="/forums" />
      </main>
    </div>
  )
}
