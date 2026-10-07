import { WARDOGS_HERO_VIDEO, WARDOGS_POSTER, heroVideoMimeType } from '../data/media'

type LoopingHeroVideoProps = {
  className?: string
  /** Full-bleed background vs contained product card */
  variant?: 'background' | 'card'
  label?: string
  id?: string
}

/** Self-hosted WARDOGS loop — original file resolution, no re-encoding in the app. */
export function LoopingHeroVideo({
  className = '',
  variant = 'card',
  label = 'WARDOGS gameplay preview',
  id,
}: LoopingHeroVideoProps) {
  const isBg = variant === 'background'
  const objectClass = isBg
    ? 'object-cover object-[78%_42%] sm:object-[72%_40%]'
    : 'object-cover object-center'

  return (
    <video
      id={id}
      className={`h-full w-full ${objectClass} ${className}`.trim()}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      poster={WARDOGS_POSTER}
      disablePictureInPicture
      disableRemotePlayback
      aria-label={label}
    >
      <source src={WARDOGS_HERO_VIDEO} type={heroVideoMimeType(WARDOGS_HERO_VIDEO)} />
    </video>
  )
}
