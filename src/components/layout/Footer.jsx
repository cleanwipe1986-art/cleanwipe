import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Logo from './Logo'
import { TwitterIcon, LinkedinIcon, GithubIcon } from '../icons/BrandIcons'

const columns = [
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/work', label: 'Work' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'UI/UX Design' },
      { to: '/services', label: 'Web Development' },
      { to: '/services', label: 'Mobile Apps' },
      { to: '/services', label: 'Cloud & DevOps' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-space-950"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-space-400">
              Orbit Media is a full-service IT studio designing and building web, mobile, and cloud
              products for ambitious companies.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[TwitterIcon, LinkedinIcon, GithubIcon, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-space-400 transition-colors hover:border-orbit-violet/40 hover:text-white"
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
                    <Link to={link.to} className="text-sm text-space-400 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-space-400">
            © {new Date().getFullYear()} Orbit Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-space-400">
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
