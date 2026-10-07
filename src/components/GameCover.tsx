import { getGameImage, getImageAlt, getImageTitle, getProductHeroImage } from '../data/images'

type GameCoverProps = {
  slug: string
  name: string
  className?: string
  aspect?: 'video' | 'square' | 'hero'
  /** Fill parent (parent must set size / aspect) */
  fill?: boolean
  /** Product page: use interior art and show full color */
  variant?: 'catalog' | 'product'
  /** Above-the-fold hero — eager load + high fetch priority */
  priority?: boolean
}

export function GameCover({
  slug,
  name,
  className = '',
  aspect = 'video',
  fill = false,
  variant = 'catalog',
  priority = false,
}: GameCoverProps) {
  const src = variant === 'product' ? getProductHeroImage(slug) : getGameImage(slug)
  const ratio = fill
    ? 'h-full w-full'
    : aspect === 'square'
      ? 'aspect-square'
      : aspect === 'hero'
        ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]'
        : 'aspect-[16/10]'

  const eager = priority || variant === 'product'

  return (
    <div className={`relative overflow-hidden bg-z-elevated ${ratio} ${className}`}>
      <img
        src={src}
        alt={getImageAlt(slug, name, variant)}
        title={getImageTitle(slug, name, variant)}
        width={variant === 'product' ? 800 : 480}
        height={variant === 'product' ? 800 : 480}
        loading={eager ? 'eager' : 'lazy'}
        decoding={eager ? 'async' : 'async'}
        fetchPriority={eager ? 'high' : 'auto'}
        sizes={
          aspect === 'hero' || variant === 'product'
            ? '100vw'
            : fill
              ? '(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw'
              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        }
        className={`game-cover-img absolute inset-0 h-full w-full object-cover object-center${variant === 'product' ? ' game-cover-img--color' : ''}`}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
    </div>
  )
}
