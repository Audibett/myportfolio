import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import RouteLine from './RouteLine'

const EDUCATION = [
  {
    degree: 'Add your degree / program name',
    school: 'Add your institution name',
    period: 'Add start — end year',
    description:
      'Placeholder — replace with a short note on relevant coursework, focus area, or standout projects from your studies.',
  },
]

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
          Education
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight max-w-xl mb-12">
          Formal training behind the work.
        </h2>

        <div className="space-y-5 max-w-2xl">
          {EDUCATION.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 border border-line rounded-2xl p-5 bg-bg-alt"
            >
              <div className="h-10 w-10 rounded-lg bg-teal-soft text-teal grid place-items-center shrink-0">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-widest uppercase text-ink-soft/70 mb-1">
                  {item.period}
                </p>
                <h3 className="font-display font-semibold text-lg">{item.degree}</h3>
                <p className="text-sm text-teal mb-2">{item.school}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}