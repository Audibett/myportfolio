import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SquareArrowOutUpRight, GitFork, ImageOff } from 'lucide-react'
import RouteLine from './RouteLine'

const PROJECTS = [
  {
    id: 'rifthaul',
    title: 'RiftHaul',
    tagline: 'Cargo transport marketplace for Eldoret, Kenya',
    description:
      'A two-sided marketplace connecting businesses that need cargo moved with verified local truck operators. Handles end-to-end booking, server-side pricing, and commission-based payments.',
    problem:
      'Businesses in Eldoret had no reliable way to find and book vetted truck operators — arrangements happened informally, with no pricing transparency or booking record.',
    tech: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'PesaPal'],
    challenges:
      'Migrating live auth from custom bcrypt + JWT to Supabase Auth without breaking existing user sessions, while adding Google Sign-In and email verification.',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    id: 'project-two',
    title: 'Project Two',
    tagline: 'Short one-line description goes here',
    description:
      'Placeholder description — replace with a real project once details are ready. Two or three sentences on what it does and who it is for.',
    problem: 'What problem this project solved, in a sentence or two.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    challenges: 'The trickiest part of building this, and how it was solved.',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 'project-three',
    title: 'Project Three',
    tagline: 'Short one-line description goes here',
    description:
      'Placeholder description — replace with a real project once details are ready. Two or three sentences on what it does and who it is for.',
    problem: 'What problem this project solved, in a sentence or two.',
    tech: ['React Native', 'Express', 'Supabase'],
    challenges: 'The trickiest part of building this, and how it was solved.',
    live: '#',
    github: '#',
    featured: false,
  },
]

const ALL_TECH = ['All', ...Array.from(new Set(PROJECTS.flatMap((p) => p.tech)))]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(() => {
    if (filter === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.tech.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <RouteLine className="text-ink-soft mb-16 max-w-xs" />

        <p className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
          Projects
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-tight max-w-xl mb-8">
          Things I've built, and what they actually do.
        </h2>

        {/* Tech filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {ALL_TECH.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                filter === tech
                  ? 'bg-ink text-bg border-ink'
                  : 'border-line text-ink-soft hover:border-ink/30 hover:text-ink'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>

          {visible.length === 0 && (
            <p className="text-sm text-ink-soft py-12 text-center">
              No projects use that technology yet.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className={`border border-line rounded-2xl overflow-hidden bg-bg-alt grid md:grid-cols-[1.1fr_1.4fr] ${
        project.featured ? 'ring-1 ring-teal/20' : ''
      }`}
    >
      {/* Screenshot placeholder */}
      <div className="bg-line/40 min-h-[200px] flex items-center justify-center relative">
        <div className="flex flex-col items-center gap-2 text-ink-soft/60">
          <ImageOff size={22} />
          <span className="font-mono text-[11px]">Screenshot placeholder</span>
        </div>
        {project.featured && (
          <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest uppercase bg-amber text-bg px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-display font-semibold text-xl tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-teal mt-0.5">{project.tagline}</p>

        <p className="text-sm text-ink-soft leading-relaxed mt-4">
          {project.description}
        </p>

        <div className="mt-4">
          <p className="font-mono text-[11px] tracking-widest uppercase text-ink-soft/70 mb-1">
            Problem solved
          </p>
          <p className="text-sm text-ink-soft leading-relaxed">{project.problem}</p>
        </div>

        <div className="mt-4">
          <p className="font-mono text-[11px] tracking-widest uppercase text-ink-soft/70 mb-1">
            Challenges
          </p>
          <p className="text-sm text-ink-soft leading-relaxed">{project.challenges}</p>
        </div>

        <ul className="flex flex-wrap gap-1.5 mt-5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="font-mono text-[11px] px-2 py-1 rounded-md bg-bg border border-line text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-6">
          <a
            href={project.live}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-teal transition-colors"
          >
            <SquareArrowOutUpRight size={14} /> Live Demo
          </a>
          <a
            href={project.github}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-teal transition-colors"
          >
            <GitFork size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}