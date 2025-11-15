import { useMemo, useRef } from 'react'
import { ChevronLeft, ChevronRight, GraduationCap, Wrench, Brain, Briefcase } from 'lucide-react'

export default function CurriculumAllYears() {
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
          { title: 'Interactive Game', note: 'Tic‑Tac‑Toe, Snake, Memory Match' },
          { title: 'Image Editor', note: 'Filters, crop, draw — mini‑Canva' },
          { title: 'Algo Visualizer', note: 'Sorting/search in browser' }
        ]
      },
      {
        key: 'y2',
        label: 'Year 2',
        icon: Wrench,
        title: 'Development',
        blurb:
          'Ship full‑stack apps: frontend, backend, APIs, deployments and quality engineering practices.',
        details:
          'Web apps, services, REST APIs, auth, CI. Build an E‑commerce app, realtime chat, and payment integrations.',
        projects: [
          { title: 'E‑commerce App', note: 'Catalog, cart, checkout, admin' },
          { title: 'Chat + Realtime', note: 'Sockets, bot replies' },
          { title: 'API Platform', note: 'Design, test, publish' }
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
          'Model training & deployment, data pipelines, systems design and performance.',
        projects: [
          { title: 'ML Model Suite', note: 'Classification, RecSys, NLP' },
          { title: 'Trading Simulator', note: 'Backtests, risk metrics' },
          { title: 'Observability Stack', note: 'Metrics, logs, traces' }
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
          'Production codebases, OSS contributions, polished portfolio and capstone.',
        projects: [
          { title: 'Company Capstone', note: 'Feature end‑to‑end' },
          { title: 'Internship Sprint', note: 'Tickets, demos, retros' },
          { title: 'Portfolio Lab', note: 'Case studies and outcomes' }
        ]
      }
    ],
    []
  )

  const railRef = useRef(null)
  const scrollBy = (delta) => {
    const el = railRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="section-light relative isolate overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            4‑Year Curriculum at a Glance
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-600">
            Explore every year without switching tabs. Scroll horizontally to see what you build each year, inspired by Newton School of Technology.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-10">
          {/* Arrow controls */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden items-center justify-between md:flex">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-480)}
              className="pointer-events-auto ml-2 rounded-full bg-white/90 p-2 shadow ring-1 ring-slate-200 hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(480)}
              className="pointer-events-auto mr-2 rounded-full bg-white/90 p-2 shadow ring-1 ring-slate-200 hover:bg-white"
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
          </div>

          {/* Horizontal rail with 4 panels */}
          <div
            ref={railRef}
            className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:gap-6 md:pb-3"
          >
            {YEARS.map((y) => {
              const Icon = y.icon
              return (
                <article
                  key={y.key}
                  className="snap-start w-[88%] min-w-[280px] max-w-[360px] rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-[0_6px_30px_rgba(2,6,23,0.06)] backdrop-blur-xl"
                >
                  <header className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[color:var(--ds-blue)] ring-1 ring-slate-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-700">{y.label}</div>
                      <h3 className="text-lg font-bold text-slate-900">{y.title}</h3>
                    </div>
                  </header>

                  <p className="mt-3 text-sm text-slate-700">{y.blurb}</p>
                  <p className="mt-1 text-xs text-slate-600">{y.details}</p>

                  <div className="mt-4 space-y-2">
                    {y.projects.map((p) => (
                      <div
                        key={p.title}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-3"
                      >
                        <div className="mt-0.5 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#9A6FFF]" />
                        <div>
                          <div className="text-[13px] font-semibold text-slate-900">{p.title}</div>
                          <div className="text-xs text-slate-600">{p.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
