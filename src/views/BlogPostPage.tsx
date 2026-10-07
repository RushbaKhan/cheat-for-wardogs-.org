import { ArrowLeft, ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { BLOGS, blogPath, getBlog } from '../data/blogs'
import { guidePath } from '../data/games'
import { CheckoutLink } from '../components/CheckoutLink'
import { SeoMedia } from '../components/SeoMedia'
import { GAME_NAME, GAME_SLUG, SITE_HOST, SITE_NAME } from '../data/site'
import { getForumMedia } from '../data/media'
import { NotFoundPage } from './NotFoundPage'

type BlogPostPageProps = {
  slug: string
}

function sectionId(heading: string) {
  return heading
    .replace(/^\d+\)\s*/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function RichText({ html }: { html: string }) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
      className="[&_a]:font-medium [&_a]:text-white/80 [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-white [&_strong]:font-semibold [&_strong]:text-white/80"
    />
  )
}

export function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = getBlog(slug)

  if (!post) return <NotFoundPage />

  const related = BLOGS.filter((b) => b.slug !== post.slug).slice(0, 6)

  return (
    <div className="min-h-screen overflow-x-hidden bg-z-bg text-white">
      <div className="border-b border-z-soft/15 bg-z-bg/90 backdrop-blur-xl">
        <Navbar />
      </div>

      <main className="page-body">
        <article className="page-x py-10 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <nav
              className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40"
              aria-label="Breadcrumb"
            >
              <a href="/" className="hover:text-white/70">
                Home
              </a>
              <span>/</span>
              <a href="/forums" className="hover:text-white/70">
                Forums
              </a>
              <span>/</span>
              <span className="text-white/70">{post.tag}</span>
            </nav>

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              {post.tag} · {post.readMinutes} min read · {post.date}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              {post.excerpt}
            </p>

            <SeoMedia media={getForumMedia(post.slug)} className="mt-8" showVideo={false} priority />

            <div className="mt-10 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-24">
                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/55 sm:text-base">
                    {section.body.map((para) => (
                      <p key={para.slice(0, 48)}>
                        <RichText html={para} />
                      </p>
                    ))}
                  </div>
                  {section.subsections?.map((subsection) => (
                    <div key={subsection.heading} className="mt-6">
                      <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                        {subsection.heading}
                      </h3>
                      <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/55 sm:text-base">
                        {subsection.body.map((para) => (
                          <p key={para.slice(0, 48)}>
                            <RichText html={para} />
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              ))}
            </div>

            <div className="page-card mt-12 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">
                Ready for {SITE_NAME}?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Check live cheat status, then buy ESP, aimbot, and 2D radar for {GAME_NAME}
                on {SITE_HOST}. Need help? Read{' '}
                <a href="/support" className="text-white/80 underline-offset-2 hover:underline">
                  support
                </a>{' '}
                or{' '}
                <a href="/reviews" className="text-white/80 underline-offset-2 hover:underline">
                  player reviews
                </a>
                . Own the game via{' '}
                <a
                  href="https://store.steampowered.com/app/1867240/WARDOGS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 underline-offset-2 hover:underline"
                >
                  the official site
                </a>
                .
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={guidePath(GAME_SLUG)}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5"
                >
                  Open the store
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5"
                >
                  Support
                </a>
                <CheckoutLink className="cta-gradient inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white">
                  Buy {SITE_NAME}
                </CheckoutLink>
              </div>
            </div>

            <section className="mt-12 border-t border-white/10 pt-10" aria-labelledby="community-heading">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-white/45" strokeWidth={1.75} aria-hidden />
                <h2 id="community-heading" className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Community replies
                </h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/45">
                Discussion prompts based on common player questions.
              </p>
              <div className="mt-6 space-y-4">
                {post.replies.map((reply) => (
                  <article key={`${reply.author}-${reply.date}`} className="page-card rounded-2xl p-5">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/70"
                        aria-hidden
                      >
                        {reply.author.slice(0, 2).toUpperCase()}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{reply.author}</p>
                        <p className="text-xs text-white/35">
                          {reply.role ? `${reply.role} · ` : ''}
                          {reply.date}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{reply.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="faq" className="mt-12 border-t border-white/10 pt-10" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Frequently asked questions
              </h2>
              <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                {post.faqs.map((item) => (
                  <details key={item.q} className="group py-1">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                        {item.q}
                      </span>
                      <ChevronDown
                        className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-transform duration-200 group-open:rotate-180"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </summary>
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-white/55">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <a
              href="/forums"
              className="mt-10 inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              All forum threads
            </a>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="page-band page-x border-t border-white/10 py-12 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-xl font-semibold tracking-tight text-white">
                More forum threads
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((b) => (
                  <a
                    key={b.slug}
                    href={blogPath(b.slug)}
                    className="page-card group flex h-full flex-col rounded-2xl p-5"
                  >
                    <p className="text-xs uppercase tracking-wider text-white/40">{b.tag}</p>
                    <h3 className="mt-2 text-sm font-semibold text-white group-hover:text-white/85">
                      {b.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-white/50">
                      {b.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white/70">
                      Read
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <SiteFooter currentPath={blogPath(post.slug)} />
      </main>
    </div>
  )
}
