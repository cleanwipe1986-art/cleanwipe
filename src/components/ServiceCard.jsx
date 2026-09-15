export default function ServiceCard({ icon: Icon, title, summary, points }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orbit-violet/40 hover:bg-white/[0.04]">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orbit-violet/0 blur-2xl transition-colors duration-300 group-hover:bg-orbit-violet/20" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orbit-violet to-orbit-cyan text-white">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="font-display relative mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-space-400">{summary}</p>
      <ul className="relative mt-4 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-space-200">
            <span className="h-1 w-1 shrink-0 rounded-full bg-orbit-cyan" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
