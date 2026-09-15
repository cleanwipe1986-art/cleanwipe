export default function OrbitField({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-900/[0.06]" />
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-900/[0.05]" />
      <div className="absolute left-1/2 top-1/2 h-[960px] w-[960px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-900/[0.04]" />

      <div className="animate-orbit-slow absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 shadow-[0_0_24px_6px] shadow-brand-500/40" />
      </div>
      <div className="animate-orbit-medium absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-600 shadow-[0_0_20px_5px] shadow-brand-600/40" />
      </div>
      <div className="animate-orbit-fast absolute left-1/2 top-1/2 h-[960px] w-[960px] -translate-x-1/2 -translate-y-1/2">
        <span className="absolute right-8 top-1/3 h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_18px_4px] shadow-brand-400/40" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[100px]" />
    </div>
  )
}
