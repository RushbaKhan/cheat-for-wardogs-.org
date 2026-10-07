import { Check, Hexagon, Monitor } from 'lucide-react'
import { InlineAccentHeading } from './TwoToneHeading'
import { GAME_NAME, HOME_HEADINGS, PRODUCT_PATH, SITE_NAME } from '../data/site'

const REQUIREMENT_PILLS = ['Windows 10/11', 'Intel / AMD', 'Steam Only'] as const

const REQUIREMENT_NOTES = [
  { icon: Monitor, text: 'Windows 10 and Windows 11 supported' },
  { icon: Hexagon, text: `${GAME_NAME} installed via Steam` },
] as const

export function HomeSystemRequirementsSection() {
  return (
    <section className="page-x py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <InlineAccentHeading
            as="h2"
            {...HOME_HEADINGS.h2SystemRequirements}
            className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
          />
          <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">
            {GAME_NAME} runs on PC through Steam only. You need Windows 10 or 11 on Intel or AMD.
            Game updates can break tools — check the{' '}
            <a
              href={PRODUCT_PATH}
              className="text-white/80 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              product page
            </a>{' '}
            before you use {SITE_NAME}.
          </p>
          <a
            href="/faq"
            className="mt-7 inline-flex items-center justify-center rounded-full border border-z-soft/45 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-z-soft/70 hover:bg-white/5"
          >
            Open the FAQ
          </a>
        </div>

        <div className="page-card rounded-2xl p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft">
            Required before setup
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {REQUIREMENT_PILLS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-z-accent/25 text-z-soft"
                  aria-hidden
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.25} />
                </span>
                {label}
              </span>
            ))}
          </div>
          <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
            {REQUIREMENT_NOTES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-white/50">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-white/35" strokeWidth={1.75} />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
