import { motion } from 'framer-motion'
import { Globe, Smartphone, Palette, Plug, Database } from 'lucide-react'
import RouteLine from './RouteLine'

const SERVICES = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Full-stack web apps built with React and Node.js — from landing pages to complete platforms with auth, dashboards, and payments.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Cross-platform mobile experiences that share logic with your web product, so your team ships once and reaches both.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Clean, usable interfaces designed around how real users will actually navigate the product — not just how it looks in a mockup.',
  },
  {
    icon: Plug,
    title: 'API Development',
    description:
      'Well-structured REST APIs with validation, rate limiting, and clear error handling, built to be easy for other developers to consume.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description:
      'Schema design and query optimization for PostgreSQL-backed apps — built to stay fast and sane as your data grows.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
          Services
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight max-w-xl mb-12">
          What you can hire me for.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="border border-line rounded-2xl p-6 bg-bg-alt hover:border-teal/30 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-teal-soft text-teal grid place-items-center mb-5">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
