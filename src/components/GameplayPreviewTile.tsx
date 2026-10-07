import type { HomeGameplayScreenshot } from '../data/media'

type GameplayPreviewTileProps = HomeGameplayScreenshot

export function GameplayPreviewTile({ image, alt, title }: GameplayPreviewTileProps) {
  return (
    <figure className="page-card overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={alt}
        title={title}
        width={480}
        height={270}
        loading="lazy"
        decoding="async"
        className="aspect-video w-full object-cover"
      />
    </figure>
  )
}
