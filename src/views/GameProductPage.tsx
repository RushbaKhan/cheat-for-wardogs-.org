import { Check, Shield } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { GameCover } from '../components/GameCover'
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
import { IMAGE_1, IMAGE_2, PAGE_MEDIA } from '../data/media'

function ProductPurchaseCard({ game }: { game: Game }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-z-soft/15 bg-[rgba(20,16,31,0.95)] sm:rounded-3xl">
      <CheckoutLink className="block" aria-label={`Buy ${SITE_NAME}`}>
        <GameCover
          slug={game.slug}
          name={game.name}
          aspect="square"
          variant="product"
          className="rounded-none"
        />
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

  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav">
        <Navbar />
      </div>

      <main>
        <section className="page-x py-8 sm:py-12">
          <div className="mx-auto max-w-6xl">
            <nav
              className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40"
              aria-label="Breadcrumb"
            >
              <a href="/" className="shrink-0 hover:text-white/70">
                Home
              </a>
              <span className="shrink-0">/</span>
              <span className="min-w-0 text-white/70">Product details</span>
            </nav>

            <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-12 lg:items-start lg:gap-10">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 text-xs text-z-soft">
                  <Shield className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                  {game.status} · {GAME_NAME} · {ANTI_CHEAT} · {SITE_HOST}
                </span>

                <h1 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  {SEO.product.title.split(' | ')[0]}
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:mt-4 sm:text-base">
                  Aimbot, ESP, 2D radar, no recoil, and no spread for {GAME_NAME} on Windows PC. Monthly
                  is ${PRODUCT_PLANS[0].price}. Lifetime is ${PRODUCT_PLANS[1].price}. Confirm{' '}
                  {ANTI_CHEAT} status, then checkout.
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
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <figure className="page-card overflow-hidden rounded-2xl">
                      <img
                        src={IMAGE_1}
                        alt="Wardogs cheats ESP and aimbot in-game preview"
                        title="WARDOGS ESP and aimbot"
                        width={480}
                        height={270}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover"
                      />
                    </figure>
                    <figure className="page-card overflow-hidden rounded-2xl">
                      <img
                        src={IMAGE_2}
                        alt="Wardogs cheats radar and menu in-game preview"
                        title="WARDOGS radar and menu"
                        width={480}
                        height={290}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover"
                      />
                    </figure>
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
          heading="Wardogs store FAQ"
          intro="Status, ESP, aimbot, radar, plans, delivery, and load questions before checkout."
          items={PRODUCT_PAGE_FAQS}
        />
      </main>

      <SiteFooter currentPath={PRODUCT_PATH} />
    </div>
  )
}
