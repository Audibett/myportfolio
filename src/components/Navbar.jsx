import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
          <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
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
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="h-9 w-9 grid place-items-center rounded-full border border-line text-ink-soft hover:text-ink hover:border-ink/30 transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-line text-ink-soft"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-line px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
