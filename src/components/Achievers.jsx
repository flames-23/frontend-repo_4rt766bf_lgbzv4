import { motion } from 'framer-motion'

const TRACKS = [
  {
    key: 'gsoc',
    name: 'Google Summer of Code Track',
    short: 'GSoC',
    accent: 'border-t-sky-500/80',
    logoBg: 'from-sky-100 to-sky-50 text-sky-700 ring-sky-200/70',
    achievements: [
      'Multiple selections across top OSS orgs with paid stipends',
      '1:1 proposal reviews and mentor-matching support',
      'Open-source impact with PRs merged into production',
      'Alumni talks and code walkthroughs from past scholars',
    ],
    mentor: {
      name: 'Aarav Mehta',
      role: 'Senior Engineer, Rubrik',
      photo: '',
    },
  },
  {
    key: 'hacker-cup',
    name: 'Meta Hacker Cup Track',
    short: 'Hacker Cup',
    accent: 'border-t-indigo-500/80',
    logoBg: 'from-indigo-100 to-indigo-50 text-indigo-700 ring-indigo-200/70',
    achievements: [
      'Top-percentile finishes and multiple round advancements',
      'Structured problem sets with editorials and reviews',
      'Timed mocks that mirror official contest constraints',
      'Personalized strategies for speed + accuracy under pressure',
    ],
    mentor: {
      name: 'Ishita Rao',
      role: 'Team Lead, Stripe',
      photo: '',
    },
  },
  {
    key: 'icpc',
    name: 'ACM ICPC Track',
    short: 'ICPC',
    accent: 'border-t-violet-500/80',
    logoBg: 'from-violet-100 to-violet-50 text-violet-700 ring-violet-200/70',
    achievements: [
      'Teams qualifying through regionals with consistent rankings',
      'Camp-style trainings and coached upsolving sessions',
      'Topic-wise ladders across DP, graphs, geometry, and more',
      'Teaming and strategy clinics with past qualifiers',
    ],
    mentor: {
      name: 'Rohan Gupta',
      role: 'Data Scientist, Microsoft',
      photo: '',
    },
  },
  {
    key: 'quant',
    name: 'Quant & Trading Track',
    short: 'Quant',
    accent: 'border-t-blue-600/80',
    logoBg: 'from-blue-100 to-blue-50 text-blue-700 ring-blue-200/70',
    achievements: [
      'Offers from HFTs and leading quant funds',
      'Math + probability deep dives with take-home sets',
      'Systems + Python for data, backtests, and signal demos',
      'Interview drills for mental math and case-style prompts',
    ],
    mentor: {
      name: 'Neha Shah',
      role: 'Senior Quant, Millennium',
      photo: '',
    },
  },
]

function LogoBox({ short, accentBg }) {
  return (
    <div className={`h-18 w-18 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-b ${accentBg} grid place-items-center ring-1 ${accentBg.split(' ')[2]} shadow-sm` }>
      <span className="font-semibold text-base sm:text-lg md:text-xl">{short}</span>
    </div>
  )
}

function MentorBlock({ mentor }) {
  return (
    <div className="w-full flex flex-col items-center md:items-end text-center md:text-right">
      <span className="mb-2 inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-700">Mentor</span>
      <div className="relative w-28 h-32 rounded-xl bg-slate-100 ring-1 ring-slate-200 overflow-hidden flex items-center justify-center">
        {/* Portrait placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
        <span className="relative z-10 text-sm text-slate-500">Photo</span>
      </div>
      <div className="mt-3">
        <p className="font-semibold text-slate-900 text-sm sm:text-base">{mentor.name}</p>
        <p className="text-slate-600 text-xs sm:text-sm">{mentor.role}</p>
      </div>
    </div>
  )
}

export default function Achievers() {
  return (
    <section id="achievers" className="py-16 section-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Achievers Tracks</h2>
          <p className="mt-3 text-base text-slate-700">Elite, outcome-driven tracks mentored by industry experts.</p>
        </div>

        <div className="space-y-6">
          {TRACKS.map((t, i) => (
            <motion.article
              key={t.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`bg-white border border-slate-200 rounded-2xl shadow-[0_10px_30px_-15px_rgba(15,23,42,0.18)] ${t.accent}`}
            >
              <div className="p-6 sm:p-7 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  {/* Left: Logo + Track name */}
                  <div className="md:col-span-3 flex items-center md:block gap-4">
                    <div className="shrink-0">
                      <div className={`rounded-2xl bg-gradient-to-b ${t.logoBg} ring-1 ring-inset px-5 py-5 flex items-center justify-center w-24 h-24`}>
                        <span className="text-lg font-semibold">{t.short}</span>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 leading-tight">{t.name}</h3>
                    </div>
                  </div>

                  {/* Middle: Achievements */}
                  <div className="md:col-span-6">
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
                      {t.achievements.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Mentor */}
                  <div className="md:col-span-3">
                    <div className="h-full w-full flex md:justify-end">
                      <MentorBlock mentor={t.mentor} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
