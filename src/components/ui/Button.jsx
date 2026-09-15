import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-orbit-violet to-orbit-cyan text-white shadow-lg shadow-orbit-violet/25 hover:shadow-orbit-violet/40 hover:-translate-y-0.5',
  ghost:
    'border border-white/15 text-space-200 hover:border-white/35 hover:text-white bg-white/[0.02]',
}

export default function Button({
  to,
  href,
  as,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  const Component = as || 'button'
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
