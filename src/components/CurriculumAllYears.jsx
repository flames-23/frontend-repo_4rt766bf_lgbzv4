import { useEffect, useMemo, useRef, useState } from 'react'
import { GraduationCap, Wrench, Brain, Briefcase } from 'lucide-react'

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

  const cardRefs = useRef({})
  const [activeKey, setActiveKey] = useState(YEARS[0].key)

  const scrollToYear = (key) => {
    const el = cardRefs.current[key]
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }

  // Track active item while user scrolls (viewport-based)
  useEffect(() => {
    const entries = YEARS.map((y) => cardRefs.current[y.key]).filter(Boolean)
    if (!entries.length) return

    const observer = new IntersectionObserver(
      (obsEntries) => {
        // Find the most visible entry and mark it active
        let best = { key: activeKey, ratio: 0 }
        for (const e of obsEntries) {
          const key = e.target.dataset.key
          if (e.intersectionRatio > best.ratio) {
            best = { key, ratio: e.intersectionRatio }
          }
        }
        if (best.key && best.key !== activeKey) setActiveKey(best.key)
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    entries.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [YEARS, activeKey])

  return (
    <section className="section-light relative isolate overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            4‑Year Curriculum at a Glance
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-600">
            Explore every year using the quick nav or by scrolling. Each year expands into a wide, easy‑to‑read overview.
          </p>
        </div>

        {/* Year Nav that controls the page scroll */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex overflow-hidden rounded-full bg-white/80 p-1 shadow ring-1 ring-slate-200 backdrop-blur">
            {YEARS.map((y) => (
              <button
                key={y.key}
                type="button"
                onClick={() => scrollToYear(y.key)}
                aria-label={`Go to ${y.label}`}
                aria-current={activeKey === y.key ? 'page' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeKey === y.key
                    ? 'bg-[color:var(--ds-blue)] text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {y.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical stack of full‑width horizontal cards (one per row) */}
        <div className="mt-8 space-y-6 sm:space-y-8">
          {YEARS.map((y) => {
            const Icon = y.icon
            return (
              <article
                key={y.key}
                ref={(el) => {
                  if (el) cardRefs.current[y.key] = el
                }}
                data-key={y.key}
                id={y.key}
                className="w-full rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_6px_30px_rgba(2,6,23,0.06)] backdrop-blur-xl"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                  {/* Left rail: title + blurb */}
                  <header className="md:col-span-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[color:var(--ds-blue)] ring-1 ring-slate-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-700">{y.label}</div>
                        <h3 className="text-xl font-bold text-slate-900">{y.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-700">{y.blurb}</p>
                    <p className="mt-1 text-xs text-slate-600">{y.details}</p>
                  </header>

                  {/* Right content: projects list */}
                  <div className="md:col-span-3">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
