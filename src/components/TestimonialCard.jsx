import { Quote } from 'lucide-react'

export default function TestimonialCard({ quote, name, role }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm">
      <Quote className="mb-4 text-brand-500" size={28} />
      <p className="text-base leading-relaxed text-ink-700">“{quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-400 text-sm font-semibold text-white">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">{name}</p>
          <p className="text-xs text-ink-700/70">{role}</p>
        </div>
      </div>
    </div>
  )
}
