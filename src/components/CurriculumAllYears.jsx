import { useEffect, useMemo, useRef, useState } from 'react'
import { GraduationCap, Wrench, Brain, Briefcase, BookOpen, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

function LearningStrip({ title, items, variant = 'classroom' }) {
  const isClassroom = variant === 'classroom'
  const theme = isClassroom
    ? {
        wrapper: 'bg-white/70 ring-1 ring-sky-300/50 border border-sky-200/70',
        headText: 'text-sky-800',
        headBar: 'bg-sky-200/80',
        chipBg: 'bg-sky-50',
        chipRing: 'ring-sky-300/60',
        chipText: 'text-sky-700',
        itemBorder: 'border-sky-100',
        overlay: 'from-sky-200/0 to-sky-200/0',
      }
    : {
        wrapper: 'bg-gradient-to-br from-amber-50/70 to-rose-50/60 ring-1 ring-amber-300/40 border border-dashed border-amber-300/70',
        headText: 'text-amber-800',
        headBar: 'bg-amber-200/80',
        chipBg: 'bg-amber-50',
        chipRing: 'ring-amber-300/60',
        chipText: 'text-amber-700',
        itemBorder: 'border-amber-100',
        overlay: 'from-amber-200/20 to-rose-200/10',
      }

  return (
    <div className={`mt-5 rounded-2xl backdrop-blur-sm p-4 shadow-sm ${theme.wrapper}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/70 ring-1 ${theme.chipRing}`}>
            {isClassroom ? (
              <BookOpen className="h-4.5 w-4.5 text-sky-600" />
            ) : (
              <Sparkles className="h-4.5 w-4.5 text-amber-600" />
            )}
          </span>
          <h4 className={`text-xs font-semibold uppercase tracking-wide ${theme.headText}`}>{title}</h4>
        </div>
        <div className={`h-px w-24 ${theme.headBar}`} />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className={`group overflow-hidden rounded-xl border ${theme.itemBorder} bg-white/80 shadow-sm transition hover:shadow-md`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={it.img}
                alt={it.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Subtle tint for differentiation */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.overlay}`} />
            </div>
            <div className="p-2.5">
              <div className="line-clamp-2 text-[13px] font-semibold text-slate-900">{it.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

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
        classroom: [
          { title: 'Python Basics & Problem Solving', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop' },
          { title: 'Data Structures Visual Labs', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
          { title: 'Git & Collaboration Workshops', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop' },
          { title: 'Web Fundamentals (HTML/CSS/JS)', img: 'https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=800&auto=format&fit=crop' }
        ],
        beyond: [
          { title: 'Game Jam: Build Tic‑Tac‑Toe', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop' },
          { title: 'Mini‑Canva Image Editor', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop' },
          { title: 'Algo Visualizer Hackday', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop' },
          { title: 'Showcase & Peer Reviews', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop' }
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
        classroom: [
          { title: 'Frontend Frameworks (React)', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop' },
          { title: 'Backend & REST APIs', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop' },
          { title: 'Databases & Auth', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
          { title: 'CI/CD & Testing', img: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop' }
        ],
        beyond: [
          { title: 'Build an E‑commerce App', img: 'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=800&auto=format&fit=crop' },
          { title: 'Realtime Chat & Bots', img: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=800&auto=format&fit=crop' },
          { title: 'API Platform & Docs', img: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=800&auto=format&fit=crop' },
          { title: 'Deployments & Monitoring', img: 'https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=800&auto=format&fit=crop' }
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
        classroom: [
          { title: 'Machine Learning Foundations', img: 'https://images.unsplash.com/photo-1515879218367-7201f28bd5bf?q=80&w=800&auto=format&fit=crop' },
          { title: 'Data Pipelines & Analytics', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop' },
          { title: 'Systems Design Deep‑Dive', img: 'https://images.unsplash.com/photo-1537432376769-00a2d6f7e15c?q=80&w=800&auto=format&fit=crop' },
          { title: 'Performance Engineering', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop' }
        ],
        beyond: [
          { title: 'Train & Deploy an ML Model', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
          { title: 'Trading Simulator Project', img: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=800&auto=format&fit=crop' },
          { title: 'Observability Dashboard', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop' },
          { title: 'Scalability Challenge', img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop' }
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
        classroom: [
          { title: 'Career Prep & Interview Labs', img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800&auto=format&fit=crop' },
          { title: 'Product & Team Practices', img: 'https://images.unsplash.com/photo-1518081461904-9ac3cb0b6d99?q=80&w=800&auto=format&fit=crop' },
          { title: 'Security & Reliability', img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800&auto=format&fit=crop' },
          { title: 'Portfolio & Storytelling', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop' }
        ],
        beyond: [
          { title: 'Company Capstone Delivery', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop' },
          { title: 'Internship Sprint', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop' },
          { title: 'Open‑Source Contribution', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop' },
          { title: 'Portfolio Showcase', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=800&auto=format&fit=crop' }
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
    <section className="section-light relative isolate overflow-hidden py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="4‑Year Curriculum at a Glance"
          subtitle="Browse each year’s focus, classroom work, and beyond‑the‑classroom projects."
          align="center"
          theme="light"
          size="md"
          className="mb-6 sm:mb-8"
        />

        {/* Year Nav that controls the page scroll */}
        <div className="mt-2 flex justify-center">
          <div className="inline-flex overflow-hidden rounded-full bg-white/70 p-1 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm">
            {YEARS.map((y) => (
              <button
                key={y.key}
                type="button"
                onClick={() => scrollToYear(y.key)}
                aria-label={`Go to ${y.label}`}
                aria-current={activeKey === y.key ? 'page' : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
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

        {/* Vertical stack of compact year sections */}
        <div className="mt-7 space-y-5 sm:space-y-6">
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
                className="w-full rounded-3xl border border-slate-200 bg-white/60 p-5 shadow-[0_8px_32px_rgba(2,6,23,0.06)] backdrop-blur-sm sm:p-6"
              >
                {/* Header: icon + year + title */}
                <header>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[color:var(--ds-blue)] ring-1 ring-slate-200">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">{y.label}</div>
                      <h3 className="text-lg font-semibold text-slate-900">{y.title}</h3>
                    </div>
                  </div>
                </header>

                {/* Blurbs with clear separation */}
                <div className="mt-3">
                  <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
                    <div className="sm:col-span-2">
                      <div className="text-sm font-medium text-slate-800">Overview</div>
                      <p className="mt-1 text-sm text-slate-700">{y.blurb}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-800">What you’ll practice</div>
                      <p className="mt-1 text-xs text-slate-600">{y.details}</p>
                    </div>
                  </div>
                </div>

                {/* Learning strips with distinct visual treatment */}
                <div className="mt-3">
                  <LearningStrip title="Classroom Learning" items={y.classroom} variant="classroom" />
                  <LearningStrip title="Beyond Classroom Learning" items={y.beyond} variant="beyond" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
