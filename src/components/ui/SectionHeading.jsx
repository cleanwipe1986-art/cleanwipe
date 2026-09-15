import Eyebrow from './Eyebrow'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <div className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display max-w-2xl text-3xl font-semibold text-ink-900 sm:text-4xl">{title}</h2>
      {description && <p className="max-w-xl text-base text-ink-700/80">{description}</p>}
    </div>
  )
}
