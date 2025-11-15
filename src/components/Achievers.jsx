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
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Google_Summer_of_Code_logo.svg',
    thumb: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    mentor: {
      name: 'Aarav Mehta',
      role: 'Senior Engineer • Rubrik',
      photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328d13bf?q=80&w=800&auto=format&fit=crop',
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
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg',
    thumb: 'https://images.unsplash.com/photo-1549925862-99c5f7c3ad6b?q=80&w=1600&auto=format&fit=crop',
    mentor: {
      name: 'Ishita Rao',
      role: 'Team Lead • Stripe',
      photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop',
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
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/ACM_ICPC_Logo.svg',
    thumb: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    mentor: {
      name: 'Rohan Gupta',
      role: 'Data Scientist • Microsoft',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
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
    },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Candlestick_chart_scheme_03-en.svg',
    thumb: 'https://images.unsplash.com/photo-1551281044-8b89e4fd7f4b?q=80&w=1600&auto=format&fit=crop',
    mentor: {
      name: 'Neha Shah',
      role: 'Senior Quant • Millennium',
      photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    },
  },
]

function MentorSpotlight({ mentor }) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
        <img src={mentor.photo} alt={mentor.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-500">Track lead</p>
        <p className="font-semibold text-gray-900 text-sm">{mentor.name}</p>
        <p className="text-gray-600 text-xs">{mentor.role}</p>
      </div>
    </div>
  )
}

function TrackCard({ track }) {
  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-slate-200/70 shadow-sm hover:shadow-md transition-all`}>
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
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-snug">{track.title}</h3>
        <p className="mt-1.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed">{track.tagline}</p>
        <MentorSpotlight mentor={track.mentor} />
      </div>
    </article>
  )
}

export default function Achievers() {
  return (
    <section id="achievers" className="py-10 sm:py-12 lg:py-14 bg-[#F5F7FA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievers Tracks"
          subtitle="Four elite tracks, one builder-first approach."
          align="center"
          theme="light"
          size="md"
          className="mb-6 sm:mb-8"
        />

        {/* 4 → 2 → 1 responsive row of long portrait cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRACKS.map((t) => (
            <TrackCard key={t.key} track={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
