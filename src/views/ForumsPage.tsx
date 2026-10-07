import { ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { VideoBg } from '../components/VideoBg'
import { BLOGS, blogPath } from '../data/blogs'
import { guidePath } from '../data/games'
import { GAME_NAME, GAME_SLUG, SEO, SITE_HOST, SITE_NAME } from '../data/site'

export function ForumsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <section className="relative flex min-h-[60vh] flex-col overflow-x-clip sm:min-h-[65vh]">
        <VideoBg />
        <div className="relative z-20 flex min-h-[60vh] flex-col sm:min-h-[65vh]">
          <Navbar onVideo />
          <div className="page-x mt-auto pb-10 sm:pb-14">
            <div className="relative z-30 mx-auto max-w-6xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                Forums · Setup · {SITE_HOST}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {SEO.forums.title.split(' | ')[0]}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                In-depth threads on {SITE_NAME}, feature comparisons, configuration, HWID
                spoofing, and Elytra compatibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="hero-to-body" aria-hidden />

      <main className="page-body relative z-10">
        <section className="page-x py-12">
          <div className="mx-auto max-w-6xl">
            <div className="page-card mb-10 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/45">Product</p>
                <h2 className="mt-1 text-xl font-semibold text-white">{SITE_NAME}</h2>
                <p className="mt-2 max-w-xl text-sm text-white/55">
                  ESP, aimbot, and 2D radar for {GAME_NAME} — check Elytra status
                  before checkout.
                </p>
              </div>
              <a
                href={guidePath(GAME_SLUG)}
                className="cta-gradient inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white"
              >
                Open the store
              </a>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-xl font-semibold tracking-tight text-white">All forum threads</h2>
              <p className="text-sm text-white/40">
                {BLOGS.length} thread{BLOGS.length === 1 ? '' : 's'}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BLOGS.map((post) => (
                <a
                  key={post.slug}
                  href={blogPath(post.slug)}
                  className="page-card group flex h-full flex-col rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-white/45">
                      {post.tag}
                    </span>
                    <span className="text-xs text-white/35">{post.readMinutes} min</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-white sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-white/80">
                    Open thread
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter currentPath="/forums" />
      </main>
    </div>
  )
}
