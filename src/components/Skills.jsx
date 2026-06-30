import { motion } from 'framer-motion'
import {
  Layout, Server, Smartphone, Database, Cloud, Palette, GitBranch, Wrench,
} from 'lucide-react'
import RouteLine from './RouteLine'

const CATEGORIES = [
  {
    icon: Layout,
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Joi validation', 'JWT / Auth flows'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    items: ['React Native', 'Responsive web apps', 'Cross-platform UI'],
  },
  {
    icon: Database,
    title: 'Databases',
    items: ['PostgreSQL', 'Supabase', 'Database design', 'Query optimization'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    items: ['Vercel', 'Render', 'CI/CD basics', 'Environment config'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    items: ['Figma', 'Design systems', 'Accessibility', 'Responsive layout'],
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    items: ['Git', 'GitHub', 'Branching workflows', 'Code review'],
  },
  {
    icon: Wrench,
    title: 'Other Tools',
    items: ['PesaPal', "Africa's Talking", 'Postman', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-bg-alt">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
          Skills
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight max-w-xl mb-12">
          What I work with, organized by where it sits in the stack.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="bg-bg border border-line rounded-2xl p-5 hover:border-teal/30 transition-colors"
              >
                <div className="h-9 w-9 rounded-lg bg-teal-soft text-teal grid place-items-center mb-4">
                  <Icon size={17} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-3">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-ink-soft leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}