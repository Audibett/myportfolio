import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import RouteLine from './RouteLine'

const CERTIFICATIONS = [
  {
    name: 'Add certification name',
    issuer: 'Add issuing organization',
    date: 'Add date earned',
  },
  {
    name: 'Add certification name',
    issuer: 'Add issuing organization',
    date: 'Add date earned',
  },
  {
    name: 'Add certification name',
    issuer: 'Add issuing organization',
    date: 'Add date earned',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24 bg-bg-alt">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
          Certifications
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight max-w-xl mb-12">
          Credentials that back up the skills above.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-line rounded-2xl p-5 bg-bg"
            >
              <BadgeCheck size={18} className="text-amber mb-4" />
              <h3 className="font-display font-semibold text-sm mb-1">{cert.name}</h3>
              <p className="text-xs text-teal mb-1">{cert.issuer}</p>
              <p className="font-mono text-[11px] text-ink-soft/70">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}