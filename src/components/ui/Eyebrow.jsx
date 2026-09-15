export default function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
      {children}
    </div>
  )
}
