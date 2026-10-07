export type TwoToneHeadingCopy = {
  lead: string
  accent: string
}

type TwoToneHeadingProps = TwoToneHeadingCopy & {
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  id?: string
}

/** White lead line + accent line (stacked), matching homepage section titles. */
export function TwoToneHeading({
  as = 'h2',
  lead,
  accent,
  className = '',
  id,
}: TwoToneHeadingProps) {
  const Tag = as
  return (
    <Tag id={id} className={className}>
      <span className="block text-white">{lead}</span>
      <span className="block accent-text">{accent}</span>
    </Tag>
  )
}

export function isTwoToneHeading(
  value: string | TwoToneHeadingCopy,
): value is TwoToneHeadingCopy {
  return typeof value === 'object' && value !== null && 'lead' in value && 'accent' in value
}

export type InlineAccentHeadingCopy = {
  before: string
  accent: string
  after: string
}

type InlineAccentHeadingProps = InlineAccentHeadingCopy & {
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  id?: string
}

/** Single-line title with a purple accent word (e.g. Wardogs **Cheats** Preview). */
export function InlineAccentHeading({
  as = 'h2',
  before,
  accent,
  after,
  className = '',
  id,
}: InlineAccentHeadingProps) {
  const Tag = as
  return (
    <Tag id={id} className={className}>
      <span className="text-white">{before}</span>
      <span className="accent-text">{accent}</span>
      <span className="text-white">{after}</span>
    </Tag>
  )
}
