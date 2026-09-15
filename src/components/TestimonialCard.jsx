import { Quote } from 'lucide-react'

export default function TestimonialCard({ quote, name, role }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7">
      <Quote className="mb-4 text-orbit-violet-light" size={28} />
      <p className="text-base leading-relaxed text-space-200">“{quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orbit-violet to-orbit-cyan text-sm font-semibold text-white">
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-space-400">{role}</p>
        </div>
      </div>
    </div>
  )
}
