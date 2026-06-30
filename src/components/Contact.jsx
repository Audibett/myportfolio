import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Download, Send, CheckCircle2 } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import RouteLine from './RouteLine'

const CONTACT_LINKS = [
  { icon: Mail, label: 'audia@example.com', href: 'mailto:audia@example.com' },
  { icon: FaLinkedin, label: 'linkedin.com/in/audia', href: '#' },
  { icon: FaGithub, label: 'github.com/audia', href: '#' },
  { icon: Phone, label: 'Add phone number', href: '#' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to a real form backend (e.g. Formspree, EmailJS, or your own API) later.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-6 py-24 bg-bg-alt">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
              Contact
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight mb-5">
              Let's build something.
            </h2>
            <p className="text-sm text-ink-soft leading-relaxed mb-8 max-w-md">
              Have a project in mind, or want the full picture of what I've built?
              Reach out directly, or grab my resume below.
            </p>

            <ul className="space-y-3 mb-8">
              {CONTACT_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-3 text-sm text-ink-soft hover:text-teal transition-colors"
                    >
                      <span className="h-8 w-8 rounded-lg bg-bg border border-line grid place-items-center shrink-0">
                        <Icon size={14} />
                      </span>
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-ink text-bg px-5 py-3 rounded-full text-sm font-medium hover:bg-teal transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {submitted ? (
              <div className="h-full min-h-[320px] border border-line rounded-2xl bg-bg flex flex-col items-center justify-center text-center p-8">
                <CheckCircle2 size={32} className="text-teal mb-4" />
                <h3 className="font-display font-semibold text-lg mb-1">Message sent</h3>
                <p className="text-sm text-ink-soft max-w-xs">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-line rounded-2xl bg-bg p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="font-mono text-[11px] tracking-widest uppercase text-ink-soft/70">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-line bg-bg-alt px-3.5 py-2.5 text-sm text-ink focus:border-teal outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[11px] tracking-widest uppercase text-ink-soft/70">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-line bg-bg-alt px-3.5 py-2.5 text-sm text-ink focus:border-teal outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-[11px] tracking-widest uppercase text-ink-soft/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-line bg-bg-alt px-3.5 py-2.5 text-sm text-ink focus:border-teal outline-none transition-colors resize-none"
                    placeholder="What are you working on?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-ink text-bg px-5 py-3 rounded-full text-sm font-medium hover:bg-teal transition-colors"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}