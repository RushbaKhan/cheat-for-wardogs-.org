import { WARDOGS_HERO_VIDEO, WARDOGS_POSTER, heroVideoMimeType } from '../data/media'

type VideoBgProps = {
  /** Full-bleed hero background video. */
  video?: string
  videoLabel?: string
  /** DOM id for autoplay script (unique when multiple heroes exist on one page). */
  videoId?: string
}

/** Full-bleed looping hero video. Autoplays as soon as the first frame is ready. */
export function VideoBg({
  video = WARDOGS_HERO_VIDEO,
  videoLabel = 'WARDOGS hero preview',
  videoId = 'hero-bg-video',
}: VideoBgProps) {
  const mime = heroVideoMimeType(video)

  return (
    <div className="hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      <img
        src={WARDOGS_POSTER}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className={`hero-video-bg absolute inset-0 z-[1] hidden h-full w-full object-cover object-[78%_42%] motion-reduce:block sm:object-[72%_40%]`}
        aria-hidden
      />
      <video
        id={videoId}
        data-hero-loop-video=""
        className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-[78%_42%] opacity-100 motion-reduce:hidden sm:object-[72%_40%]"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster={WARDOGS_POSTER}
        disablePictureInPicture
        disableRemotePlayback
        aria-label={videoLabel}
      >
        <source src={video} type={mime} />
      </video>
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-z-bg via-z-bg/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-z-bg/70 to-transparent" />
    </div>
  )
}
