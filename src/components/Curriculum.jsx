import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, GraduationCap, Rocket, Wrench, Brain, Briefcase } from 'lucide-react'

export default function Curriculum() {
  const YEARS = useMemo(
    () => [
      {
        key: 'y1',
        label: 'Year 1',
        icon: GraduationCap,
        title: 'Foundation',
        blurb:
          'Master the fundamentals: DSA, Python, problem-solving, and core CS concepts. Build small but complete apps to cement concepts.',
        details:
          'Focus areas include DSA, Python, version control, and essential CS foundations. Projects like Tic‑Tac‑Toe, image editor, and mini dashboards bring learning to life.',
        projects: [
          {
            title: 'Build an Interactive Game',
            tagline: 'Tic‑Tac‑Toe, Snake, or Memory Match with clean UI',
            accent: 'bg-[rgba(79,140,255,0.06)]',
            ring: 'ring-[rgba(79,140,255,0.25)]',
            emoji: '🎮'
          },
          {
            title: 'Create an Image Editor',
            tagline: 'Filters, crop, and draw — like a mini‑Canva',
            accent: 'bg-[rgba(154,111,255,0.06)]',
            ring: 'ring-[rgba(154,111,255,0.25)]',
            emoji: '🖼️'
          },
          {
            title: 'Algo Visualizer',
            tagline: 'See sorting/searching come alive in the browser',
            accent: 'bg-[rgba(79,140,255,0.06)]',
            ring: 'ring-[rgba(79,140,255,0.25)]',
            emoji: '📊'
          }
        ]
      },
      {
        key: 'y2',
        label: 'Year 2',
        icon: Wrench,
        title: 'Development',
        blurb:
          'Ship full‑stack apps: frontend, backend, and APIs. Learn deployments and quality engineering practices.',
        details:
          'Web apps, backend services, REST APIs, auth, and CI. Build an E‑commerce app, realtime chat, and payment integrations.',
        projects: [
          {
            title: 'E‑commerce App',
            tagline: 'Catalog, cart, checkout, and admin analytics',
            accent: 'bg-[rgba(79,140,255,0.06)]',
            ring: 'ring-[rgba(79,140,255,0.25)]',
            emoji: '🛒'
          },
          {
            title: 'Chatbot + Realtime',
            tagline: 'Messaging UI with bot replies and sockets',
            accent: 'bg-[rgba(154,111,255,0.06)]',
            ring: 'ring-[rgba(154,111,255,0.25)]',
            emoji: '💬'
          },
          {
            title: 'API Platform',
            tagline: 'Design, document, test and publish APIs',
            accent: 'bg-[rgba(79,140,255,0.06)]',
            ring: 'ring-[rgba(79,140,255,0.25)]',
            emoji: '🧩'
          }
        ]
      },
      {
        key: 'y3',
        label: 'Year 3',
        icon: Brain,
        title: 'Specialization',
        blurb:
          'Choose AI, Full‑Stack, or Quant. Build ML models, analytics dashboards, simulations, and scalable systems.',
        details:
          'Deep‑dive into your track: model training and deployment, data pipelines, or advanced systems design and performance.',
        projects: [
          {
            title: 'ML Model Suite',
            tagline: 'Classification, recommendation, or NLP pipeline',
            accent: 'bg-[rgba(154,111,255,0.06)]',
            ring: 'ring-[rgba(154,111,255,0.25)]',
            emoji: '🤖'
          },
          {
            title: 'Trading Simulator',
            tagline: 'Backtesting, risk metrics, and strategy dashboards',
            accent: 'bg-[rgba(79,140,255,0.06)]',
            ring: 'ring-[rgba(79,140,255,0.25)]',
            emoji: '📈'
          },
          {
            title: 'Observability Stack',
            tagline: 'Metrics, logs, traces — dashboards and alerts',
            accent: 'bg-[rgba(154,111,255,0.06)]',
            ring: 'ring-[rgba(154,111,255,0.25)]',
            emoji: '📡'
          }
        ]
      },
      {
        key: 'y4',
        label: 'Year 4',
        icon: Briefcase,
        title: 'Industry Immersion',
        blurb:
          'Work on paid internships and real company projects. Finish with a standout portfolio and interview readiness.',
        details:
          'Collaborate with engineers on production codebases, contribute to OSS, and polish a compelling portfolio and capstone.',
        projects: [
          {
            title: 'Company Capstone',
            tagline: 'Ship a feature end‑to‑end with mentors',
            accent: 'bg-[rgba(79,140,255,0.06)]',
            ring: 'ring-[rgba(79,140,255,0.25)]',
            emoji: '🏁'
          },
          {
            title: 'Internship Sprint',
            tagline: 'Tickets, standups, demos, and retros',
            accent: 'bg-[rgba(154,111,255,0.06)]',
            ring: 'ring-[rgba(154,111,255,0.25)]',
            emoji: '🧭'
          },
          {
            title: 'Portfolio Lab',
            tagline: 'Craft case studies and outcomes recruiters love',
            accent: 'bg-[rgba(79,140,255,0.06)]',
            ring: 'ring-[rgba(79,140,255,0.25)]',
            emoji: '📁'
          }
        ]
      }
    ],
    []
  )

  const [active, setActive] = useState('y1')
  const activeYear = YEARS.find((y) => y.key === active) || YEARS[0]

  const scrollerRef = useRef(null)
  const scrollBy = (delta) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const fade = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 0 } },
    exit: { opacity: 1, y: 0, transition: { duration: 0 } }
  }

  return (
    <section id="curriculum" className="section-light relative isolate overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div initial={fade.initial} whileInView={fade.animate} viewport={{ once: true, amount: 0.35 }} className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="accent-text">Build Industry-Preferred Skills Through Practical Learning.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base sm:text-lg text-slate-600">
            A hands-on, 4-year B.Tech where every semester combines coding, design, and real-world projects guided by engineers from top tech companies.
          </p>
        </motion.div>

        {/* Two-column interactive layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-12">
          {/* Left: vertical year navigation */}
          <div className="md:col-span-4 lg:col-span-3">
            <nav className="relative rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-sm backdrop-blur-xl">
              <ul className="space-y-2">
                {YEARS.map((y, i) => {
                  const Icon = y.icon || Rocket
                  const activeState = active === y.key
                  return (
                    <li key={y.key}>
                      <button
                        type="button"
                        onClick={() => setActive(y.key)}
                        className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition shadow-sm ring-1 ${
                          activeState
                            ? 'accent-gradient text-white ring-transparent'
                            : 'bg-slate-50/80 text-slate-700 ring-slate-200 hover:bg-white hover:text-slate-900'
                        }`}
                        aria-pressed={activeState}
                      >
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ring-1 ${
                            activeState
                              ? 'bg-white/20 text-white ring-white/30'
                              : 'bg-white text-[color:var(--ds-blue)] ring-slate-200'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="flex-1">
                          <div className="text-xs font-semibold opacity-90">{y.label}</div>
                          <div className={`text-sm font-semibold ${activeState ? 'opacity-100' : 'opacity-80'}`}>{y.title}</div>
                        </div>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Right: dynamic content */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_6px_30px_rgba(2,6,23,0.06)] backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={fade.initial} animate={fade.animate} exit={fade.exit}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-700">
                        <span className="inline-block h-2 w-2 rounded-full accent-gradient" />
                        {activeYear.label}
                      </div>
                      <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{activeYear.title}</h3>
                      <p className="mt-1 text-slate-700">{activeYear.blurb}</p>
                      <p className="mt-2 text-sm text-slate-600">{activeYear.details}</p>
                    </div>
                  </div>

                  {/* Horizontal projects carousel */}
                  <div className="relative mt-6">
                    <div className="pointer-events-none absolute -left-3 -right-3 top-1/2 z-10 hidden -translate-y-1/2 justify-between md:flex">
                      <div className="pointer-events-auto">
                        <button
                          aria-label="Scroll left"
                          onClick={() => scrollBy(-320)}
                          className="group rounded-full bg-white/90 p-2 shadow ring-1 ring-slate-200 hover:bg-white"
                        >
                          <ChevronLeft className="h-5 w-5 text-slate-700 group-hover:text-slate-900" />
                        </button>
                      </div>
                      <div className="pointer-events-auto">
                        <button
                          aria-label="Scroll right"
                          onClick={() => scrollBy(320)}
                          className="group rounded-full bg-white/90 p-2 shadow ring-1 ring-slate-200 hover:bg-white"
                        >
                          <ChevronRight className="h-5 w-5 text-slate-700 group-hover:text-slate-900" />
                        </button>
                      </div>
                    </div>

                    <div
                      ref={scrollerRef}
                      className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:gap-6 md:pb-3"
                    >
                      {activeYear.projects.map((p, idx) => (
                        <div
                          key={p.title}
                          className={`group relative w-[82%] min-w-[260px] max-w-[320px] snap-start rounded-2xl ${p.ring} ${p.accent} border border-slate-200/70 p-4 shadow-sm`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 ring-1 ring-inset ring-white/60 text-2xl">
                              <span aria-hidden>{p.emoji}</span>
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-slate-900">{p.title}</h4>
                              <p className="mt-1 text-sm text-slate-700">{p.tagline}</p>
                            </div>
                          </div>
                          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(79,140,255,0.10), rgba(154,111,255,0.10))' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1">
                  <Rocket className="h-3.5 w-3.5 text-[color:var(--ds-blue)]" />
                  Projects evolve in complexity each year
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1">
                  <span className="h-2 w-2 rounded-full accent-gradient" />
                  Smooth animations and practical learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
