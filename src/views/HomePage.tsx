import { ArrowRight, Crosshair, Eye, Radar, Shield } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { VideoBg } from '../components/VideoBg'
import { SiteFooter } from '../components/SiteFooter'
import { FaqSection } from '../components/FaqSection'
import { SeoMedia } from '../components/SeoMedia'
import { TwoToneHeading } from '../components/TwoToneHeading'
import { HomeGameplaySection } from '../components/HomeGameplaySection'
import { HomeSystemRequirementsSection } from '../components/HomeSystemRequirementsSection'
import { guidePath } from '../data/games'
import { CheckoutLink } from '../components/CheckoutLink'
import { HOME_FAQS } from '../data/faqs'
import {
  GAME_NAME,
  GAME_SLUG,
  HOME_FAQ_HEADING,
  HOME_HEADINGS,
  PRODUCT_PATH,
  SITE_HOST,
  SITE_NAME,
  SITE_PURPOSE,
} from '../data/site'
import { BLOGS, blogPath, homeIntelCardTitle } from '../data/blogs'
import { PAGE_MEDIA } from '../data/media'

const FEATURES = [
  {
    icon: Eye,
    label: 'ESP',
    desc: 'Player, box, skeleton, health, class, item, and pickup ESP with team check filters.',
  },
  {
    icon: Crosshair,
    label: 'Aimbot',
    desc: 'Aimbot, aim assist, silent aim, and triggerbot — enable only what you need for each fight.',
  },
  {
    icon: Radar,
    label: 'Radar',
    desc: '2D and 3D radar so rotations, ridges, and control-zone pushes stay readable.',
  },
  {
    icon: Shield,
    label: 'Cheat status',
    desc: 'Live compatibility status after WARDOGS and EAC patches — clear to load, or wait.',
  },
] as const

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <section id="home" className="relative flex min-h-screen flex-col overflow-x-clip">
        <VideoBg />

        <div className="relative z-20 flex min-h-screen flex-col">
          <Navbar onVideo />

          <main className="page-x mt-auto pb-6 sm:pb-8 lg:pb-10">
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="relative z-30 max-w-md lg:max-w-lg">
                <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-z-soft/80 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                  {GAME_NAME} · Worldwide · {SITE_HOST}
                </p>
                <TwoToneHeading
                  as="h1"
                  {...HOME_HEADINGS.h1}
                  className="text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
                />
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:mt-3.5 sm:text-[0.95rem]">
                  WARDOGS Cheats for Windows PC — aimbot, ESP, and 2D/3D radar, with live cheat
                  status after EAC updates.
                </p>

                <div className="relative z-50 mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <CheckoutLink className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                    Buy WARDOGS Cheats
                  </CheckoutLink>
                  <a
                    href={guidePath(GAME_SLUG)}
                    className="inline-flex items-center justify-center rounded-full border border-z-soft/35 bg-[rgba(28,22,48,0.88)] px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-[background-color,border-color] hover:border-z-soft/50 hover:bg-[rgba(36,28,58,0.95)]"
                  >
                    Product details
                  </a>
                </div>
              </div>

              <div className="relative z-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:w-[30rem] lg:shrink-0">
                <div className="glass flex h-full min-h-[140px] flex-col justify-between rounded-2xl p-4 sm:min-h-[160px] sm:p-5">
                  <p
                    className="status-pill text-2xl font-normal tracking-tight sm:text-3xl"
                    style={{ fontFamily: "'Silkscreen', cursive" }}
                  >
                    EAC
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/70 sm:mt-3 sm:text-sm">
                    Live cheat status for WARDOGS with Easy Anti-Cheat. Updated after patches.
                  </p>
                </div>

                <div className="glass flex h-full min-h-[140px] flex-col rounded-2xl p-4 sm:min-h-[160px] sm:p-5">
                  <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                    <span className="text-sm font-semibold text-white">{GAME_NAME}</span>
                  </div>
                  <p className="flex-1 text-xs leading-relaxed text-white/80 sm:text-sm">
                    “Bought it for item ESP and 3D radar. Status stayed honest after the last EAC
                    update.”
                  </p>
                  <div className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-z-accent/25 text-xs font-semibold text-z-ink sm:h-9 sm:w-9 sm:text-sm">
                      JK
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">jayk</p>
                      <p className="text-xs text-white/60">{GAME_NAME} player</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <div className="hero-to-body" aria-hidden />

      <div className="page-body relative z-10">
        <section className="page-band page-x border-t border-z-soft/15 py-14">
          <div className="mx-auto max-w-6xl">
            <TwoToneHeading
              as="h2"
              {...HOME_HEADINGS.h2Features}
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            />
            <p className="mb-6 mt-2 max-w-2xl text-sm text-white/55 sm:text-base">
              Same groupings you will see in the menu and on the products page.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="page-card flex h-full min-h-[168px] flex-col rounded-2xl p-5"
                >
                  <div className="icon-well mb-4">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-x py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <TwoToneHeading
                as="h2"
                {...HOME_HEADINGS.h2WhyFeatures}
                className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem] lg:leading-tight"
              />
              <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
                {GAME_NAME} drops one hundred players onto a large, destructible battlefield with
                vehicles and a moving control zone. Rotations, armor pushes, and compound holds all
                depend on knowing what is happening beyond your line of sight.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                <strong className="font-semibold text-white/80">Player ESP</strong>,{' '}
                <strong className="font-semibold text-white/80">item ESP</strong>,{' '}
                <strong className="font-semibold text-white/80">2D/3D radar</strong>, silent aim, and
                triggerbot each solve a different problem. A tighter setup with a few reliable labels
                usually beats turning on every toggle at once.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
                Read the{' '}
                <a
                  href={blogPath('wardogs-cheats')}
                  className="accent-text font-medium transition-colors hover:text-white"
                >
                  gameplay use cases
                </a>
                , then see{' '}
                <a
                  href={blogPath('wardogs-esp')}
                  className="accent-text font-medium transition-colors hover:text-white"
                >
                  ESP
                </a>
                ,{' '}
                <a
                  href={blogPath('wardogs-2d-radar')}
                  className="accent-text font-medium transition-colors hover:text-white"
                >
                  radar
                </a>
                , and{' '}
                <a
                  href={blogPath('wardogs-aimbot')}
                  className="accent-text font-medium transition-colors hover:text-white"
                >
                  aimbot
                </a>{' '}
                for more detail.
              </p>
            </div>
            <SeoMedia media={PAGE_MEDIA.homeWhyFeatures} showVideo={false} />
          </div>
        </section>

        <HomeGameplaySection />

        <HomeSystemRequirementsSection />

        <section id="picks" className="page-x py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Intel
                </p>
                <TwoToneHeading
                  as="h2"
                  {...HOME_HEADINGS.h2Forums}
                  className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                />
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                  Read-only threads for menu tuning, EAC status, and loader fixes — saved here, not
                  live chat.
                </p>
              </div>
              <a
                href="/forums"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
              >
                All forums
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BLOGS.slice(0, 6).map((post) => (
                <a
                  key={post.slug}
                  href={blogPath(post.slug)}
                  className="page-card group flex h-full flex-col rounded-2xl p-5 sm:p-6"
                >
                  <p className="text-xs uppercase tracking-wider text-white/45">{post.tag}</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                    {homeIntelCardTitle(post.slug, post.title)}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-white/80">
                    Read guide
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </a>
              ))}
            </div>

            <div className="page-card mt-8 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <TwoToneHeading
                  as="p"
                  {...HOME_HEADINGS.h2Store}
                  className="text-lg font-semibold"
                />
                <p className="mt-1 text-sm text-white/55">
                  Features · cheat status · monthly $35 · lifetime $150
                </p>
              </div>
              <a
                href={guidePath(GAME_SLUG)}
                className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white"
              >
                Open products page
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="page-band page-x border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
            <div className="page-card flex h-full min-h-[240px] flex-col justify-between rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  About {SITE_NAME}
                </p>
                <TwoToneHeading
                  as="h2"
                  {...HOME_HEADINGS.h2About}
                  className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                />
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  {SITE_PURPOSE} Clear features, honest status labels, and deep forums for
                  setup. Then check{' '}
                  <a
                    href={PRODUCT_PATH}
                    className="text-white/80 underline-offset-2 hover:underline"
                  >
                    the feature list
                  </a>
                  ,{' '}
                  <a href="/reviews" className="text-white/80 underline-offset-2 hover:underline">
                    reviews
                  </a>
                  , or{' '}
                  <a href="/support" className="text-white/80 underline-offset-2 hover:underline">
                    loader help
                  </a>
                  .
                </p>
              </div>
              <a
                href={guidePath(GAME_SLUG)}
                className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80"
              >
                Open products page
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div
              id="access"
              className="page-card flex h-full min-h-[240px] flex-col justify-between rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Checkout
                </p>
                <TwoToneHeading
                  as="h2"
                  {...HOME_HEADINGS.h2Access}
                  className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                />
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  Confirm cheat status is clear to load, then checkout. Monthly is $35.
                  Lifetime is $150. Delivery is digital, worldwide, on Windows PC.
                </p>
              </div>
              <CheckoutLink className="cta-gradient mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-fit">
                Buy a license
              </CheckoutLink>
            </div>
          </div>
        </section>

        <FaqSection
          id="faq"
          heading={HOME_FAQ_HEADING}
          intro="Cheat status, ESP, aimbot, radar, delivery, and checkout — before you buy."
          items={HOME_FAQS}
          moreHref="/faq"
          moreLabel="Full FAQ →"
        />

        <SiteFooter currentPath="/" />
      </div>
    </div>
  )
}
