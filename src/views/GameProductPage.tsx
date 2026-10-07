import { Check, Shield } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { BoardPageHero } from '../components/BoardPageHero'
import { LoopingHeroVideo } from '../components/LoopingHeroVideo'
import {
  FEATURE_GROUPS,
  getGame,
  guidePath,
  parseGuideSlug,
  type Game,
} from '../data/games'
import { PRODUCT_PAGE_FAQS } from '../data/faqs'
import { ANTI_CHEAT, GAME_NAME, PRODUCT_PATH, PRODUCT_PLANS, SEO, SITE_HOST, SITE_NAME } from '../data/site'
import { FaqSection } from '../components/FaqSection'
import { CheckoutLink } from '../components/CheckoutLink'
import { NotFoundPage } from './NotFoundPage'
import { blogPath } from '../data/blogs'
import { IMAGE_1, IMAGE_2, IMAGE_3, PAGE_MEDIA } from '../data/media'

function ProductPurchaseCard({ game }: { game: Game }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-z-soft/15 bg-[rgba(20,16,31,0.95)] sm:rounded-3xl">
      <CheckoutLink className="block" aria-label={`Buy ${SITE_NAME}`}>
        <div className="relative aspect-square overflow-hidden bg-black">
          <LoopingHeroVideo variant="card" label={`${game.name} store preview video`} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        </div>
      </CheckoutLink>
      <div className="p-5 sm:p-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{SITE_NAME}</p>
          <p className="text-xs text-white/45">
            {game.status} · Monthly ${PRODUCT_PLANS[0].price} · Lifetime ${PRODUCT_PLANS[1].price}
          </p>
        </div>

        <CheckoutLink className="cta-gradient mt-5 block w-full rounded-full py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90">
          Buy {SITE_NAME}
        </CheckoutLink>
        <p className="mt-3 text-center text-[11px] text-white/40">
          Instant delivery · Check {ANTI_CHEAT} status first
        </p>
      </div>
    </div>
  )
}

type GameProductPageProps = {
  guideSlug: string
}

export function GameProductPage({ guideSlug }: GameProductPageProps) {
  const slug = parseGuideSlug(guideSlug)
  const game = getGame(slug)

  if (!guideSlug.toLowerCase().endsWith('-cheats')) {
    const maybe = getGame(guideSlug.toLowerCase())
    if (maybe) {
      if (typeof window !== 'undefined') {
        window.location.replace(guidePath(maybe.slug))
      }
      return null
    }
    return <NotFoundPage />
  }

  if (!game) return <NotFoundPage />

  const featureCount = FEATURE_GROUPS.reduce((n, g) => n + g.items.length, 0)

  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav border-b border-white/5">
        <Navbar />
      </div>

      <BoardPageHero
        badge="Licensed product"
        eyebrow={`Products · ${SITE_HOST}`}
        title={SEO.product.title.split(' | ')[0]}
        description={`${SITE_NAME} for ${GAME_NAME} on Windows PC — aimbot, ESP, and radar with live ${ANTI_CHEAT} status. Monthly $${PRODUCT_PLANS[0].price}, lifetime $${PRODUCT_PLANS[1].price}. Confirm status before checkout.`}
      />

      <main>
        <section className="page-x py-8 sm:py-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Status', value: game.status },
                { label: 'Plans', value: '2' },
                { label: 'Feature toggles', value: String(featureCount) },
                { label: 'Delivery', value: 'Digital' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
                    {label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>

            <aside className="page-card mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                  Guide board
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Setup threads and patch-day notes live on the forums. Status and checkout stay
                  here.
                </p>
              </div>
              <a
                href="/forums"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
              >
                Open forums →
              </a>
            </aside>

            <nav
              className="mt-8 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40"
              aria-label="Breadcrumb"
            >
              <a href="/" className="shrink-0 hover:text-white/70">
                Home
              </a>
              <span className="shrink-0">/</span>
              <span className="min-w-0 text-white/70">Products</span>
            </nav>

            <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 text-xs text-z-soft">
                  <Shield className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                  {game.status} · {GAME_NAME} · {ANTI_CHEAT}
                </span>

                <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Feature breakdown
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
                  Grouped the way the menu is organized — enable only what your role needs.
                </p>

                <div className="mt-6 lg:hidden">
                  <ProductPurchaseCard game={game} />
                </div>

                <div className="mt-10">
                    <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {SEO.features.title.split(' | ')[0]}
                    </h2>
                  <div className="mt-6 space-y-8">
                    {FEATURE_GROUPS.map((group) => (
                      <div key={group.name}>
                        <h3 className="text-base font-semibold text-white">{group.name}</h3>
                        <ul className="mt-3 space-y-3">
                          {group.items.map((f) => (
                            <li key={f.name} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-z-accent/20">
                                <Check className="h-3 w-3 text-z-soft" strokeWidth={2.5} />
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-white">{f.name}</p>
                                <p className="mt-0.5 text-sm leading-relaxed text-white/50">{f.text}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 space-y-8 text-sm leading-relaxed text-white/55">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {SEO.status.title.split(' | ')[0]}
                    </h2>
                    <p className="mt-3">
                      Built for {GAME_NAME} on Windows PC. After a client or {ANTI_CHEAT}{' '}
                      patch,
                      status may show Updating until tested — {SITE_NAME} publishes live status so
                      you are not buying a dead loader. Status first, load second.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {SEO.setup.title.split(' | ')[0]}
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-5">
                      <li>Confirm current status on {SITE_HOST}.</li>
                      <li>Only load when status is clear (or accept Updating risk).</li>
                      <li>Checkout for digital license delivery worldwide.</li>
                      <li>
                        Follow the{' '}
                        <a
                          href={blogPath('wardogs-cheats')}
                          className="text-white/80 underline-offset-2 hover:underline"
                        >
                          complete WARDOGS guide
                        </a>{' '}
                        after delivery.
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {SEO.preview.title.split(' | ')[0]}
                    </h2>
                  <p className="mt-2 text-sm text-white/45">{PAGE_MEDIA.product.caption}</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[IMAGE_1, IMAGE_2, IMAGE_3].map((src, i) => (
                      <figure key={src} className="page-card overflow-hidden rounded-2xl">
                        <img
                          src={src}
                          alt={`Wardogs cheats in-game preview ${i + 1}`}
                          title={`WARDOGS preview ${i + 1}`}
                          width={1024}
                          height={576}
                          loading="lazy"
                          decoding="async"
                          className="aspect-video w-full object-cover object-center"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="hidden lg:col-span-5 lg:block">
                <div className="sticky top-24">
                  <ProductPurchaseCard game={game} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <FaqSection
          heading={{ lead: 'Products', accent: 'FAQ' }}
          intro="Status, ESP, aimbot, radar, plans, delivery, and load questions before checkout."
          items={PRODUCT_PAGE_FAQS}
        />
      </main>

      <SiteFooter currentPath={PRODUCT_PATH} />
    </div>
  )
}
