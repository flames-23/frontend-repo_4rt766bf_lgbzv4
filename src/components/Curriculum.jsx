import { motion } from 'framer-motion'
import { Layers, Rocket, Wrench, Brain, Briefcase } from 'lucide-react'

export default function Curriculum() {
  const years = [
    {
      tag: 'Year 1',
      title: 'Foundations',
      subtitle: 'Computer Science Foundations',
      desc: 'C++, Python, DSA, Logic, Git. Build strong fundamentals that compound across 4 years.',
      icon: Rocket,
      bullets: [
        'C++, Python, Data Structures & Algorithms',
        'Logic, Discrete Math, and OS basics',
        'Git, GitHub, VS Code, clean coding practices'
      ],
      logos: ['Python', 'GitHub', 'VSCode']
    },
    {
      tag: 'Year 2',
      title: 'Build',
      subtitle: 'Build Real-World Applications',
      desc: 'Frontend, backend, APIs, and cloud. Ship projects that look and feel production-grade.',
      icon: Wrench,
      bullets: [
        'Frontend, Backend, and REST APIs',
        'Cloud deploys & CI basics',
        'Projects: e-commerce, chat app, recommender'
      ],
      logos: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      tag: 'Year 3',
      title: 'Specialize',
      subtitle: 'Specialize in Your Track',
      desc: 'Choose AI, Quant, Full‑Stack, or Research. Build advanced systems and ship to users.',
      icon: Brain,
      bullets: [
        'AI Chatbots & applied ML systems',
        'Model deployment & monitoring',
        'Quant simulator or research projects'
      ],
      logos: ['TensorFlow', 'Docker', 'Flask', 'Streamlit']
    },
    {
      tag: 'Year 4',
      title: 'Launch',
      subtitle: 'Capstone & Paid Internships',
      desc: 'Industry-led projects, internships, and a refined portfolio that gets you hired.',
      icon: Briefcase,
      bullets: [
        'Industry capstone & portfolio showcase',
        'Internships with real teams & tooling',
        'Career launch & interview prep'
      ],
      logos: ['ServiceNow', 'Google Cloud', 'Jira', 'Slack']
    }
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.05 * i } })
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" id="curriculum">
      {/* Soft white background with gentle gradient waves */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.06),transparent),radial-gradient(900px_500px_at_10%_10%,rgba(56,189,248,0.08),transparent)]" />
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="h-full w-full bg-white/85" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
              A 4-Year Curriculum Designed With the Industry, For the Industry.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-3xl text-base sm:text-lg text-slate-600">
            From foundations to real-world innovation — build applications, deploy AI models, and graduate with the skills top companies hire for.
          </motion.p>
        </motion.div>

        {/* Cards row: horizontal scroll on mobile, grid on xl */}
        <div className="mt-10 sm:mt-12">
          <div className="relative -mx-4 px-4">
            <div className="scrollbar-hide flex gap-5 overflow-x-auto pb-2 sm:gap-6 sm:pb-4 md:gap-8 xl:grid xl:grid-cols-4 xl:gap-6 xl:overflow-visible">
              {years.map((y, idx) => {
                const Icon = y.icon || Layers
                return (
                  <motion.div
                    key={y.tag}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={idx}
                    className="group relative w-[85%] shrink-0 rounded-3xl border border-slate-200/60 bg-white/70 p-5 shadow-[0_6px_30px_rgba(2,6,23,0.08)] backdrop-blur-xl transition-transform hover:-translate-y-0.5 sm:w-[70%] md:w-[60%] xl:w-auto"
                  >
                    {/* soft gradient edge */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40 [mask-image:linear-gradient(white,transparent)]" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-40 blur-md" style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.16), rgba(139,92,246,0.16))' }} />

                    {/* header */}
                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-700">
                          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                          {y.tag}
                        </div>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                          <span className="bg-gradient-to-r from-sky-500/90 via-cyan-500/90 to-violet-500/90 bg-clip-text text-transparent">{y.title}</span>
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-700">{y.subtitle}</p>
                        <p className="mt-2 text-sm text-slate-600">{y.desc}</p>
                      </div>
                      <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-100 to-violet-100 text-slate-700 ring-1 ring-slate-200/70">
                        <Icon className="h-5 w-5 text-sky-500" />
                      </div>
                    </div>

                    {/* bullets */}
                    <ul className="relative z-10 mt-4 space-y-2">
                      {y.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400 shadow-[0_0_0_3px_rgba(56,189,248,0.08)]" />
                          <span className="text-sm text-slate-700">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* tech logos + illustrative tiles */}
                    <div className="relative z-10 mt-5 flex flex-wrap items-center gap-2.5">
                      {y.logos.map((l) => (
                        <span
                          key={l}
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:border-sky-300/60 hover:text-sky-700"
                        >
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                          {l}
                        </span>
                      ))}
                      <span className="ml-auto inline-flex items-center gap-1 rounded-xl border border-slate-200/70 bg-white/80 px-2 py-1 text-[11px] text-slate-600 shadow-sm transition-transform hover:scale-[1.02]">
                        Project mockups
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* partner strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-[0_6px_24px_rgba(2,6,23,0.06)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-40 blur-md" style={{ background: 'linear-gradient(120deg, rgba(56,189,248,0.12), rgba(139,92,246,0.12))' }} />
            <div className="relative z-10 grid grid-cols-3 items-center gap-3 sm:grid-cols-6">
              {['Google', 'Microsoft', 'Amazon', 'Apple', 'Stripe', 'ServiceNow'].map((b) => (
                <div
                  key={b}
                  className="flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300/60"
                >
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-violet-500 bg-clip-text text-transparent">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
