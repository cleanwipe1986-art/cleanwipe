export default function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orbit-violet-light">
      <span className="h-1.5 w-1.5 rounded-full bg-orbit-cyan" />
      {children}
    </div>
  )
}
