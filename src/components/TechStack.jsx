import { motion } from 'framer-motion'
import {
  SiReact, SiVite, SiTailwindcss, SiJavascript, SiNodedotjs, SiExpress,
  SiSupabase, SiPostgresql, SiVercel, SiRender, SiFigma, SiGit, SiGithub,
  SiPostman,
} from 'react-icons/si'
import RouteLine from './RouteLine'

const STACK = [
  { icon: SiReact, name: 'React' },
  { icon: SiVite, name: 'Vite' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiExpress, name: 'Express' },
  { icon: SiSupabase, name: 'Supabase' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiVercel, name: 'Vercel' },
  { icon: SiRender, name: 'Render' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiGit, name: 'Git' },
  { icon: SiGithub, name: 'GitHub' },
  { icon: SiPostman, name: 'Postman' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="px-6 py-24 bg-bg-alt">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
          Tech Stack
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight max-w-xl mb-12">
          The tools behind the projects above.
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-4">
          {STACK.map((tech, i) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: (i % 7) * 0.04 }}
                className="group flex flex-col items-center gap-2 border border-line rounded-xl py-5 bg-bg hover:border-teal/30 hover:-translate-y-0.5 transition-all"
              >
                <Icon
                  size={26}
                  className="text-ink-soft group-hover:text-teal transition-colors"
                />
                <span className="font-mono text-[10px] text-ink-soft/70 text-center leading-tight px-1">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}