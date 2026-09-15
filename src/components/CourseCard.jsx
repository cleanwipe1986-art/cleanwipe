export default function CourseCard({ icon: Icon, title, summary, points }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/10">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-300 group-hover:bg-brand-500/10" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="font-display relative mt-5 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-700/80">{summary}</p>
      <ul className="relative mt-4 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-ink-700">
            <span className="h-1 w-1 shrink-0 rounded-full bg-brand-500" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
