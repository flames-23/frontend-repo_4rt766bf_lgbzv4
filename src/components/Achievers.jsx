import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const TRACKS = [
  {
    key: 'gsoc',
    title: 'Google Summer of Code Track',
    short: 'GSoC',
    tagline: 'Open‑source selections with close mentorship.',
    accent: {
      ring: 'ring-amber-400/60',
      border: 'border-amber-400/70',
      text: 'text-amber-700',
      bg: 'bg-amber-50',
      gradient: 'from-amber-400/70 via-amber-500/50 to-orange-400/60',
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Google_Summer_of_Code_logo.svg',
    thumb: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    mentor: {
      name: 'Aarav Mehta',
      role: 'Senior Engineer • Rubrik',
      photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328d13bf?q=80&w=800&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com/in/aarav-mehta',
    },
  },
  {
    key: 'hacker-cup',
    title: 'Meta Hacker Cup Track',
    short: 'Hacker Cup',
    tagline: 'Timed mocks and editorials for top finishes.',
    accent: {
      ring: 'ring-sky-500/60',
      border: 'border-sky-500/70',
      text: 'text-sky-700',
      bg: 'bg-sky-50',
      gradient: 'from-sky-400/70 via-sky-500/50 to-cyan-400/60',
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg',
    thumb: 'https://images.unsplash.com/photo-1549925862-99c5f7c3ad6b?q=80&w=1600&auto=format&fit=crop',
    mentor: {
      name: 'Ishita Rao',
      role: 'Team Lead • Stripe',
      photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com/in/ishita-rao',
    },
  },
  {
    key: 'icpc',
    title: 'ACM ICPC Track',
    short: 'ICPC',
    tagline: 'Regionals‑ready training with coached upsolves.',
    accent: {
      ring: 'ring-violet-500/60',
      border: 'border-violet-500/70',
      text: 'text-violet-700',
      bg: 'bg-violet-50',
      gradient: 'from-violet-400/70 via-violet-500/50 to-fuchsia-400/60',
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/ACM_ICPC_Logo.svg',
    thumb: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    mentor: {
      name: 'Rohan Gupta',
      role: 'Data Scientist • Microsoft',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com/in/rohan-gupta',
    },
  },
  {
    key: 'quant',
    title: 'Quant & Trading Track',
    short: 'Quant',
    tagline: 'HFT‑level prep across math, Python, systems.',
    accent: {
      ring: 'ring-emerald-500/60',
      border: 'border-emerald-500/70',
      text: 'text-emerald-700',
      bg: 'bg-emerald-50',
      gradient: 'from-emerald-400/70 via-emerald-500/50 to-teal-400/60',
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Candlestick_chart_scheme_03-en.svg',
    thumb: 'https://images.unsplash.com/photo-1551281044-8b89e4fd7f4b?q=80&w=1600&auto=format&fit=crop',
    mentor: {
      name: 'Neha Shah',
      role: 'Senior Quant • Millennium',
      photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
      linkedin: 'https://www.linkedin.com/in/neha-shah',
    },
  },
]

function MentorSpotlight({ mentor, accent }) {
  return (
    <div className="mt-3 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative h-10 w-10 rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
          <img src={mentor.photo} alt={mentor.name} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wide text-gray-500">Track lead</p>
          <p className="font-semibold text-gray-900 text-sm truncate">{mentor.name}</p>
          <p className="text-gray-600 text-xs truncate">{mentor.role}</p>
        </div>
      </div>

      {mentor.linkedin && (
        <a
          href={mentor.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${mentor.name} on LinkedIn`}
          className={`inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white/70 backdrop-blur-sm ring-1 ${accent.ring} text-slate-700 hover:text-slate-900 hover:shadow-sm transition`}
        >
          <Linkedin size={18} />
        </a>
      )}
    </div>
  )
}

function TrackCard({ track }) {
  return (
    <motion.article
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group relative"
    >
      {/* Premium gradient border wrapper */}
      <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br ${track.accent.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}>
        {/* Inner glass card */}
        <div className="relative flex flex-col overflow-hidden rounded-[15px] bg-white/60 backdrop-blur-sm ring-1 ring-slate-200/70 shadow-sm hover:shadow-md transition-all">
          {/* Soft spotlight */}
          <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/40 blur-3xl opacity-0 group-hover:opacity-60 transition" />

          {/* Media (portrait friendly) */}
          <div className="relative">
            <div className="h-40 sm:h-44 md:h-48 w-full overflow-hidden">
              <img src={track.thumb} alt={`${track.short} hero`} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
            {/* Logo badge overlay */}
            <div className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-xl ${track.accent.bg} px-2.5 py-1.5 ring-1 ${track.accent.ring} backdrop-blur-sm`}>          
              <div className="h-4 w-4 shrink-0">
                <img src={track.logo} alt={`${track.short} logo`} className="h-full w-full object-contain" />
              </div>
              <span className={`text-[11px] font-semibold ${track.accent.text}`}>{track.short}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 md:p-6">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-snug">
              {track.title}
            </h3>
            <p className="mt-1.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              {track.tagline}
            </p>
            <MentorSpotlight mentor={track.mentor} accent={track.accent} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Achievers() {
  return (
    <section id="achievers" className="relative py-10 sm:py-12 lg:py-14 bg-[#F5F7FA]">
      {/* Subtle premium background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 right-10 h-40 w-40 rounded-full bg-gradient-to-br from-sky-200/40 to-violet-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-gradient-to-br from-amber-200/40 to-rose-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievers Tracks"
          subtitle="Elite, mentor-led paths with real outcomes."
          align="center"
          theme="light"
          size="md"
          className="mb-6 sm:mb-8"
        />

        {/* 4 → 2 → 1 responsive row of long portrait cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRACKS.map((t, i) => (
            <TrackCard key={t.key} track={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
