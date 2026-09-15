import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, category, description, tags, gradient }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-space-900">
      <div className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${gradient} p-6`}>
        <div className="absolute inset-0 bg-space-950/20 mix-blend-multiply" />
        <span className="font-display relative text-3xl font-bold text-white/90">{title}</span>
        <ArrowUpRight
          className="absolute right-5 top-5 text-white/80 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          size={22}
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-orbit-violet-light">{category}</p>
        <p className="mt-2 text-sm leading-relaxed text-space-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-space-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
