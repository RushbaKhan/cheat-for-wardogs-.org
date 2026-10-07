import { Menu, X } from 'lucide-react'
import { LogoMark } from './LogoMark'
import { CheckoutLink } from './CheckoutLink'
import { PRODUCT_PATH, SITE_NAME } from '../data/site'

/** Lean nav — Reviews stay in footer. */
const NAV_LINKS = [
  { label: 'Forums', to: '/forums' },
  { label: 'Store', to: PRODUCT_PATH },
  { label: 'Reviews', to: '/reviews' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Support', to: '/support' },
] as const

type NavbarProps = {
  onVideo?: boolean
}

/** CSS-only mobile menu so the navbar does not need client JS. */
export function Navbar({ onVideo: _onVideo = false }: NavbarProps) {
  const brandClass = 'text-z-ink'

  return (
    <nav className="page-x relative z-[80] flex items-center justify-between gap-3 py-4 sm:py-5">
      <a href="/" className="flex min-w-0 items-center gap-2">
        <LogoMark className="shrink-0" priority />
        <span className={`truncate text-sm font-semibold tracking-tight sm:text-base ${brandClass}`}>
          {SITE_NAME}
        </span>
      </a>

      <div className="hidden items-center gap-2 md:flex">
        <div className="nav-chip flex items-center gap-0.5 rounded-full px-1 py-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium text-z-ink/70 transition-colors hover:bg-z-accent/15 hover:text-z-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <CheckoutLink className="cta-gradient flex items-center self-stretch rounded-full px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
          Buy
        </CheckoutLink>
      </div>

      <input id="nav-menu" type="checkbox" className="peer sr-only" />
      <label
        htmlFor="nav-menu"
        className="relative z-[90] flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-z-soft/25 bg-[#0c0a1a] text-z-ink peer-checked:[&_.nav-open]:hidden peer-checked:[&_.nav-close]:block md:hidden"
      >
        <span className="sr-only">Menu</span>
        <Menu className="nav-open h-5 w-5" strokeWidth={1.75} />
        <X className="nav-close hidden h-5 w-5" strokeWidth={1.75} />
      </label>

      <label
        htmlFor="nav-menu"
        className="fixed inset-0 z-[70] hidden bg-[#08060f] peer-checked:block md:hidden"
        aria-hidden="true"
      />
      <div className="fixed inset-y-0 right-0 z-[80] flex h-[100dvh] w-[min(18rem,100%)] translate-x-full flex-col overflow-y-auto border-l border-z-soft/20 bg-[#0c0a1a] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] peer-checked:translate-x-0 md:hidden">
        <div className="flex flex-col gap-1 px-5 pt-24">
          <a
            href="/"
            className="rounded-xl px-4 py-3 text-base font-medium text-z-ink/80 transition-all hover:bg-z-accent/15 hover:text-z-ink"
          >
            Home
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="rounded-xl px-4 py-3 text-base font-medium text-z-ink/80 transition-all hover:bg-z-accent/15 hover:text-z-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-auto px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          <CheckoutLink className="cta-gradient block w-full rounded-full px-6 py-3 text-center text-sm font-semibold text-white">
            Buy
          </CheckoutLink>
        </div>
      </div>
    </nav>
  )
}
