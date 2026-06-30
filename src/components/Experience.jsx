import { motion } from 'framer-motion'
import RouteLine from './RouteLine'

const EXPERIENCE = [
  {
    role: 'Full-Stack Developer (Freelance)',
    org: 'RiftHaul — Client Project',
    period: '2025 — Present',
    description:
      'Building a cargo transport marketplace from the ground up: booking flow, transporter dashboards, server-side pricing, and a migration from custom auth to Supabase Auth with Google Sign-In and email verification.',
    type: 'Freelance',
  },
  {
    role: 'Personal Projects',
    org: 'Self-directed',
    period: 'Ongoing',
    description:
      'Building and shipping small full-stack and mobile projects to learn new tools and patterns — most recently around auth flows, payment integrations, and responsive UI systems.',
    type: 'Personal',
  },
  {
    role: 'Volunteer / Community Work',
    org: 'Add your organization here',
    period: 'Add dates',
    description:
      'Placeholder — replace with real volunteer or community contributions, e.g. mentoring, open-source work, or local tech community involvement.',
    type: 'Volunteer',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-bg-alt">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
          Experience
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight max-w-xl mb-14">
          Where I've put these skills to work.
        </h2>

        <div className="relative pl-8">
          {/* Vertical route line connecting entries */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg-alt ${
                    i === 0 ? 'bg-amber' : 'bg-teal'
                  }`}
                />
                <p className="font-mono text-[11px] tracking-widest uppercase text-ink-soft/70 mb-1">
                  {item.period} · {item.type}
                </p>
                <h3 className="font-display font-semibold text-lg">{item.role}</h3>
                <p className="text-sm text-teal mb-2">{item.org}</p>
                <p className="text-sm text-ink-soft leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}