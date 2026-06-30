import { Mail } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const SOCIALS = [
  { icon: Mail, href: 'mailto:audia@example.com', label: 'Email' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-line">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-semibold">
          <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" className="fill-ink" />
            <path
              d="M6 22 C 10 22, 12 10, 16 10 S 22 22, 26 22"
              stroke="#2A5C5C"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="6" cy="22" r="2.5" fill="#C97C3D" />
            <circle cx="26" cy="22" r="2.5" fill="#2A5C5C" />
          </svg>
          Audia
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-8 w-8 rounded-full border border-line grid place-items-center text-ink-soft hover:text-teal hover:border-teal/30 transition-colors"
              >
                <Icon size={14} />
              </a>
            )
          })}
        </div>
      </div>

      <p className="text-center text-[11px] font-mono text-ink-soft/60 mt-8">
        © {new Date().getFullYear()} Audia. Built with React & Tailwind.
      </p>
    </footer>
  )
}