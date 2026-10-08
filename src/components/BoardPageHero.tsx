import { VideoBg } from './VideoBg'

type BoardPageHeroProps = {
  eyebrow: string
  title: string
  description: string
  badge?: string
  videoLabel?: string
}

/** Forums / products hero band with the same compressed.mp4 loop as the homepage. */
export function BoardPageHero({
  eyebrow,
  title,
  description,
  badge,
  videoLabel = 'WARDOGS hero preview',
}: BoardPageHeroProps) {
  return (
    <section className="relative min-h-[52vh] overflow-hidden border-b border-white/10 sm:min-h-[58vh]">
      <VideoBg videoId="board-hero-video" videoLabel={videoLabel} />
      <div
        className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-r from-[#08060f] via-[#08060f]/88 to-[#08060f]/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-t from-[#08060f]/90 via-transparent to-[#08060f]/35"
        aria-hidden
      />
      <div className="page-x relative z-10 flex min-h-[52vh] flex-col justify-end py-10 sm:min-h-[58vh] sm:py-12">
        <div className="mx-auto w-full max-w-6xl">
          {badge ? (
            <span className="inline-flex rounded-full border border-z-soft/35 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-z-soft">
              {badge}
            </span>
          ) : null}
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            {eyebrow}
          </p>
          <h1 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
