import { motion } from 'framer-motion'
import RouteLine from './RouteLine'

const FOCUS = [
  'Real-world problems over toy projects',
  'Clean, maintainable code',
  'Products people actually use',
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
              About
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight">
              The short version: I like building things that solve real problems.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-ink-soft leading-relaxed"
          >
            <p>
              I'm Audia, a full-stack and mobile developer. My path into software
              started with curiosity about how the apps I used every day actually
              worked under the hood — and turned into a habit of picking apart
              problems until I understand them well enough to build a solution
              myself.
            </p>
            <p>
              What motivates me is seeing software actually get used. Right now
              that means building <span className="text-ink font-medium">RiftHaul</span>,
              a cargo transport marketplace connecting businesses with verified
              truck operators in Eldoret, Kenya — the kind of project where every
              decision, from how pricing is calculated to how auth works, has a
              real person on the other end of it.
            </p>
            <p>
              I enjoy working across the stack: React and Tailwind on the
              frontend, Node.js and Express on the backend, Postgres-backed
              platforms like Supabase for data and auth, and deploying it all on
              Vercel and Render. I like the mobile side too — translating the
              same problem-solving into a smaller screen and different
              constraints.
            </p>
            <p>
              My goal going forward is to keep building products end to end —
              owning a problem from data model to deployed UI — and to grow into
              someone clients and teams trust to take a vague idea and ship it as
              something solid.
            </p>

            <ul className="flex flex-wrap gap-2 pt-2">
              {FOCUS.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs px-3 py-1.5 rounded-full bg-teal-soft text-teal border border-teal/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}