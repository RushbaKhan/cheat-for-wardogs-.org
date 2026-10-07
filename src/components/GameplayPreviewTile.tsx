import type { HomeGameplayScreenshot } from '../data/media'

type GameplayPreviewTileProps = HomeGameplayScreenshot

export function GameplayPreviewTile({ image, alt, title }: GameplayPreviewTileProps) {
  return (
    <figure className="page-card overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={alt}
        title={title}
        width={1024}
        height={576}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        loading="lazy"
        decoding="async"
        className="aspect-video w-full object-cover object-center"
      />
    </figure>
  )
}
