import { useState } from 'react'
import { Briefcase, GraduationCap, BookOpen, Layers, Rocket } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  { key: 'internships', label: 'Internships & Jobs', icon: Briefcase, ascaTitle: 'Internships & Jobs at ASCA', tradTitle: 'Traditional Internships & Jobs' },
  { key: 'curriculum', label: 'Curriculum & Faculty', icon: BookOpen, ascaTitle: 'Curriculum & Faculty at ASCA', tradTitle: 'Traditional Curriculum & Faculty' },
  { key: 'approach', label: 'Learning Approach', icon: GraduationCap, ascaTitle: 'Learning Approach at ASCA', tradTitle: 'Traditional Learning Approach' },
  { key: 'projects', label: 'Projects & Industry Exposure', icon: Layers, ascaTitle: 'Projects & Industry at ASCA', tradTitle: 'Traditional Projects & Exposure' },
  { key: 'startup', label: 'Startup & Career Support', icon: Rocket, ascaTitle: 'Startup & Career Support at ASCA', tradTitle: 'Traditional Career Support' }
]

// Tab-specific content for both cards
const CONTENT = {
  internships: {
    asca: [
      '18 months of paid co‑op internships built into the program',
      'Dedicated mentors from product companies and HFT firms',
      'Interview prep from year 2; offer‑ready by year 3',
      '1,300+ hiring partners with structured referral loops',
    ],
    trad: [
      'Internships not embedded in the curriculum',
      'Limited mentorship and external referrals',
      'Interview prep only in final year',
      'Smaller employer network; mostly on‑campus drives',
    ],
  },
  curriculum: {
    asca: [
      'Curriculum co‑created with engineers from Google, Apple & Microsoft',
      'Updated every term based on industry signal',
      'Hands‑on labs each module; projects every semester',
      'AI systems, ML tooling and data engineering taught early',
    ],
    trad: [
      'Syllabus updates infrequent; often theory‑heavy',
      'Minimal alignment with modern tooling/practices',
      'Labs are basic; projects are small and isolated',
      'AI/ML offered late or as electives only',
    ],
  },
  approach: {
    asca: [
      'Studio‑style learning with small cohorts and code reviews',
      'Build first: learn by shipping real features',
      'Weekly mentor 1:1s; rigorous feedback cycles',
      'Competency‑based progression, not rote exams',
    ],
    trad: [
      'Large lectures; limited individual attention',
      'Exam‑centric with low practical exposure',
      'Feedback cycles are rare and slow',
      'Progress measured by marks rather than skills',
    ],
  },
  projects: {
    asca: [
      'Real company capstones and OSS contributions',
      'Hackathons, GSoC prep and industry collaborations',
      'Observability, CI/CD and deployments from day one',
      'Portfolio‑first with public demos and reviews',
    ],
    trad: [
      'Minor projects with limited real‑world context',
      'Seldom OSS; hackathons not part of structure',
      'Deployments and DevOps rarely covered',
      'Portfolios are optional; fewer public showcases',
    ],
  },
  startup: {
    asca: [
      'Founder track with incubation and mentor office hours',
      'Career studio: resume/ATS, mock interviews, referrals',
      'Alumni network and partner credits for tooling',
      'Workshops with VCs, founders, and product leaders',
    ],
    trad: [
      'Limited startup ecosystem exposure',
      'Placement cell focuses on mass recruitment',
      'Alumni engagement is sporadic',
      'Few structured founder resources',
    ],
  },
}

export default function ComparisonASCA() {
  const [active, setActive] = useState('internships')

  const ascaPoints = CONTENT[active].asca
  const tradPoints = CONTENT[active].trad
  const activeTabMeta = TABS.find((t) => t.key === active)

  return (
    <section id="comparison" className="section-dark relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="text-[11px] font-semibold tracking-[0.15em] text-white/70">ASCA vs Traditional</div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why ASCA Experience Is Better Than Traditional Engineering?
          </h2>
        </div>

        {/* Three-column layout */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-12">
          {/* Left: Vertical Tabs */}
          <div className="md:col-span-4 lg:col-span-3">
            <nav className="rounded-2xl border border-white/15 bg-white/5 p-3 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.7)] backdrop-blur-md">
              <ul className="space-y-2">
                {TABS.map(({ key, label, icon: Icon }) => {
                  const isActive = key === active
                  return (
                    <li key={key}>
                      <button
                        type="button"
                        onClick={() => setActive(key)}
                        className={
                          'group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left ring-1 transition ' +
                          (isActive
                            ? 'bg-gradient-to-r from-[#4F8CFF] to-[#9A6FFF] text-white ring-transparent shadow-[0_20px_60px_-25px_rgba(79,140,255,0.6)]'
                            : 'bg-white/5 text-white/85 ring-white/15 hover:bg-white/10 hover:shadow-[0_0_0_3px_rgba(79,140,255,0.25)]')
                        }
                        aria-pressed={isActive}
                      >
                        <span
                          className={
                            'flex h-9 w-9 items-center justify-center rounded-xl ring-1 ' +
                            (isActive ? 'bg-white/20 text-white ring-white/30' : 'bg-white/10 text-white ring-white/20 group-hover:ring-[rgba(79,140,255,0.35)]')
                          }
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold leading-snug">{label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Middle: ASCA card (dynamic) */}
          <div className="md:col-span-8 lg:col-span-5">
            <div className="relative rounded-3xl border border-blue-200/40 bg-white p-6 sm:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_40px_120px_-40px_rgba(79,140,255,0.45),0_24px_60px_-28px_rgba(154,111,255,0.35)]">
              <div className="absolute -inset-3 -z-10 rounded-[28px] opacity-30 blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(79,140,255,0.25), rgba(154,111,255,0.25))' }} />
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                  ASCA Advantage
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700">
                  {activeTabMeta.label}
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{activeTabMeta.ascaTitle}</h3>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={active + '-asca'}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 space-y-3 text-slate-700"
                >
                  {ascaPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: 'linear-gradient(90deg,#4F8CFF,#9A6FFF)' }} />
                      {pt}
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Traditional card (dynamic) */}
          <div className="lg:col-span-4 md:col-span-12">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 text-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)]">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                  Traditional
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/85">
                  {activeTabMeta.label}
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{activeTabMeta.tradTitle}</h3>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={active + '-trad'}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 space-y-3 text-white/85"
                >
                  {tradPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />
                      {pt}
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
