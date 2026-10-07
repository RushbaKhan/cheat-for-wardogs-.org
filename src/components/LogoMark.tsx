import { BRAND_NAV_LOGO, SITE_NAME } from '../data/site'

export function LogoMark({
  className = '',
  priority = false,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <img
      src={BRAND_NAV_LOGO}
      alt={SITE_NAME}
      width={20}
      height={20}
      decoding="async"
      fetchPriority={priority ? 'auto' : 'low'}
      className={`h-5 w-5 shrink-0 object-contain object-center ${className}`.trim()}
    />
  )
}
