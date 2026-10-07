import { InlineAccentHeading } from './TwoToneHeading'
import { GameplayPreviewTile } from './GameplayPreviewTile'
import { HOME_GAMEPLAY_SCREENSHOTS } from '../data/media'
import { HOME_HEADINGS, SITE_NAME } from '../data/site'

export function HomeGameplaySection() {
  return (
    <section className="page-band page-x border-t border-z-soft/15 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <InlineAccentHeading
          as="h2"
          {...HOME_HEADINGS.h2Gameplay}
          className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
        />
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/55 sm:text-base">
          In-game screenshots from the {SITE_NAME} package.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_GAMEPLAY_SCREENSHOTS.map((tile) => (
            <GameplayPreviewTile key={tile.image} {...tile} />
          ))}
        </div>
      </div>
    </section>
  )
}
