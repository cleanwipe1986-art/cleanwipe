import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { TwitterIcon, LinkedinIcon, GithubIcon } from '../icons/BrandIcons'

const columns = [
  {
    title: 'Institute',
    links: [
      { to: '/about', label: 'About Us' },
      { to: '/courses', label: 'Courses' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Popular Courses',
    links: [
      { to: '/courses', label: 'Digital Marketing' },
      { to: '/courses', label: 'Website Development' },
      { to: '/courses', label: 'Mobile App Development' },
      { to: '/courses', label: 'AI Automation & Tools' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-ink-900"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="absolute h-8 w-8 rounded-full border border-brand-400/60" />
                <span
                  className="absolute h-5 w-8 rounded-full border border-brand-300/70"
                  style={{ transform: 'rotate(-25deg)' }}
                />
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-300" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                Orbit <span className="text-gradient">Media</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Orbit Media is a digital skills training institute teaching Digital Marketing, Web &
              App Development, AI Automation, and more — with hands-on, job-ready training.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[TwitterIcon, LinkedinIcon, GithubIcon, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-brand-400/50 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-white">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link, index) => (
                  <li key={`${link.label}-${index}`}>
                    <Link to={link.to} className="text-sm text-white/60 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Orbit Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
