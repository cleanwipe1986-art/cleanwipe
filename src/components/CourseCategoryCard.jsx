import { Check } from 'lucide-react'

export default function CourseCategoryCard({ icon: Icon, title, items }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
          <Icon size={18} strokeWidth={2} />
        </div>
        <h3 className="font-display text-lg font-semibold text-ink-900">{title}</h3>
      </div>
      <ul className="mt-5 flex-1 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
            <Check size={15} className="mt-0.5 shrink-0 text-brand-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
