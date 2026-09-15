import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5',
  ghost:
    'border border-ink-900/15 text-ink-700 hover:border-brand-500/50 hover:text-brand-700 bg-white',
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
