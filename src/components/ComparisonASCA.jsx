import { useState } from 'react'
import { Briefcase, GraduationCap, BookOpen, Layers, Rocket } from 'lucide-react'

const TABS = [
  { key: 'internships', label: 'Internships & Jobs', icon: Briefcase },
  { key: 'curriculum', label: 'Curriculum & Faculty', icon: BookOpen },
  { key: 'approach', label: 'Learning Approach', icon: GraduationCap },
  { key: 'projects', label: 'Projects & Industry Exposure', icon: Layers },
  { key: 'startup', label: 'Startup & Career Support', icon: Rocket }
]

export default function ComparisonASCA() {
  const [active, setActive] = useState('internships')

  return (
    <section className="section-dark relative overflow-hidden py-20 sm:py-24">
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

          {/* Middle: ASCA card */}
          <div className="md:col-span-8 lg:col-span-5">
            <div className="relative rounded-3xl border border-blue-200/40 bg-white p-6 sm:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_40px_120px_-40px_rgba(79,140,255,0.45),0_24px_60px_-28px_rgba(154,111,255,0.35)]">
              <div className="absolute -inset-3 -z-10 rounded-[28px] opacity-30 blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(79,140,255,0.25), rgba(154,111,255,0.25))' }} />
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                ASCA Advantage
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">AlgoUniversity School of CS & AI</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: 'linear-gradient(90deg,#4F8CFF,#9A6FFF)' }} />Modern curriculum built with engineers from Google, Apple & Microsoft</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: 'linear-gradient(90deg,#4F8CFF,#9A6FFF)' }} />18 months of paid internships built into the program</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: 'linear-gradient(90deg,#4F8CFF,#9A6FFF)' }} />Start coding & building real projects from Semester 1</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: 'linear-gradient(90deg,#4F8CFF,#9A6FFF)' }} />High mentorship density & industry-integrated learning</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: 'linear-gradient(90deg,#4F8CFF,#9A6FFF)' }} />AI systems, data engineering, and ML tools taught hands-on</li>
              </ul>
            </div>
          </div>

          {/* Right: Traditional card */}
          <div className="lg:col-span-4 md:col-span-12">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 text-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)]">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                Traditional
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Traditional Education</h3>
              <ul className="mt-4 space-y-3 text-white/85">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />Outdated syllabus</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />Coding starts very late</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />Few internships and industry exposure</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />Mostly theory-oriented learning</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />Very limited mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
