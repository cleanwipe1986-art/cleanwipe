import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute h-8 w-8 rounded-full border border-orbit-violet-light/50" />
        <span className="absolute h-5 w-8 rounded-full border border-orbit-cyan/60" style={{ transform: 'rotate(-25deg)' }} />
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-orbit-violet to-orbit-cyan" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-white">
        Orbit <span className="text-gradient">Media</span>
      </span>
    </Link>
  )
}
