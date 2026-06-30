import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import RouteLine from './RouteLine'

const TESTIMONIALS = [
  {
    quote:
      'Placeholder quote — replace with real feedback about working with you on a project, what stood out, and the result delivered.',
    name: 'Add name',
    role: 'Add role / relationship (e.g. Client, Lecturer, Teammate)',
  },
  {
    quote:
      'Placeholder quote — replace with real feedback about working with you on a project, what stood out, and the result delivered.',
    name: 'Add name',
    role: 'Add role / relationship (e.g. Client, Lecturer, Teammate)',
  },
  {
    quote:
      'Placeholder quote — replace with real feedback about working with you on a project, what stood out, and the result delivered.',
    name: 'Add name',
    role: 'Add role / relationship (e.g. Client, Lecturer, Teammate)',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
          Testimonials
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight max-w-xl mb-12">
          What it's like to work together.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-line rounded-2xl p-6 bg-bg-alt flex flex-col"
            >
              <Quote size={20} className="text-amber mb-4" />
              <blockquote className="text-sm text-ink-soft leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-line">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="font-mono text-[11px] text-ink-soft/70 mt-0.5">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}