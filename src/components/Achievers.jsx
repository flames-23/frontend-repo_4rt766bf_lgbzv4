import SectionHeading from './SectionHeading.jsx'

const TRACKS = [
  {
    key: 'gsoc',
    title: 'Google Summer of Code Track',
    short: 'GSoC',
    tagline: 'Multiple open‑source selections with close mentorship.',
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
    tagline: 'Top‑percentile finishes with timed mocks and editorials.',
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
    tagline: 'Regionals‑ready training with coached upsolving.',
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
    tagline: 'HFT‑level prep across math, Python, and systems.',
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
    <div className="mt-5 sm:mt-6 flex items-center gap-4">
      <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
        <img src={mentor.photo} alt={mentor.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">Track led by</p>
        <p className="font-semibold text-gray-900 text-sm sm:text-base">{mentor.name}</p>
        <p className="text-gray-600 text-xs sm:text-sm">{mentor.role}</p>
      </div>
    </div>
  )
}

function TrackCard({ track }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl bg-white border-2 ${track.accent.border} shadow-md hover:shadow-lg transition-shadow`}>      
      {/* Hero thumbnail */}
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-t-[22px]">
          <img src={track.thumb} alt={`${track.short} hero`} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
        </div>
        {/* Logo badge overlay */}
        <div className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl ${track.accent.bg} px-3 py-2 ring-1 ${track.accent.ring} backdrop-blur-sm`}>          
          <div className="h-5 w-5 shrink-0">
            <img src={track.logo} alt={`${track.short} logo`} className="h-full w-full object-contain" />
          </div>
          <span className={`text-xs font-semibold ${track.accent.text}`}>{track.short}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 lg:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{track.title}</h3>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">{track.tagline}</p>

        {/* Mentor spotlight */}
        <MentorSpotlight mentor={track.mentor} />
      </div>
    </article>
  )
}

export default function Achievers() {
  return (
    <section id="achievers" className="py-16 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Global heading outside the cards */}
        <div className="mb-8 sm:mb-10">
          <SectionHeading
            title="Achievers Tracks"
            subtitle="Elite tracks led by top mentors with real, measurable outcomes."
            align="center"
            theme="light"
            size="lg"
          />
        </div>

        {/* 2x2 grid of large, high-visual white cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TRACKS.map((t) => (
            <TrackCard key={t.key} track={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
