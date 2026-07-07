import { motion } from 'framer-motion'
import { Download, Mail, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
    
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.35]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -50 650 C 150 650, 250 250, 450 250 S 700 600, 950 500 S 1150 150, 1300 150"
          stroke="#2A5C5C"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        <circle cx="450" cy="250" r="4" fill="#C97C3D" />
        <circle cx="950" cy="500" r="4" fill="#2A5C5C" />
      </svg>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-center gap-12"
        >
          <div className="flex-1">
            <p className="font-mono text-xs tracking-widest uppercase text-teal mb-5">
              Available for new projects
            </p>

            <h1 className="font-display font-semibold text-5xl sm:text-6xl leading-[1.05] tracking-tight text-ink">
              Hi, I'm Audia Jepkirui 
              <br />
              <span className="text-ink-soft">I build software that moves.</span>
            </h1>

            <p className="mt-6 font-mono text-sm sm:text-base text-teal tracking-tight">
              Full-stack Developer · Mobile Developer · UI/UX Enthusiast
            </p>

            <p className="mt-5 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed">
              I design and ship full-stack and mobile products end to end — from
              data model to deployed interface. Lately that's meant building a
              cargo logistics marketplace from the ground up; generally it means
              turning real-world problems into software people actually rely on.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 bg-ink text-bg px-5 py-3 rounded-full text-sm font-medium hover:bg-teal transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 rounded-full text-sm font-medium text-ink hover:border-ink/40 transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                View Projects
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="shrink-0 mx-auto md:mx-0">
            <div className="relative h-44 w-44 sm:h-56 sm:w-56">
              <div className="absolute inset-0 rounded-[2rem] bg-teal-soft rotate-6" />
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-line bg-bg-alt grid place-items-center" role="img" aria-label="Profile photo placeholder for Audia">
                {/* Placeholder avatar — swap src with a real photo */}
                <span className="font-display text-5xl text-ink-soft" aria-hidden="true">A</span>
              </div>
              <span className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-amber border-4 border-bg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}