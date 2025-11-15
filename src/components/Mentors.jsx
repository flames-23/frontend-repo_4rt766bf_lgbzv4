import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const mentors = [
  {
    name: 'Manas Kumar Verma',
    roles: ['Ex Quant Researcher @ Alphagrep Singapore', 'Directi'],
    img: 'https://i.ibb.co/HjWb82z/image27.png',
    college: 'IIIT Hyderabad',
    linkedin: 'https://www.linkedin.com/',
    companies: [
      { name: 'Alphagrep', logo: 'https://www.alpha-grep.com/wp-content/uploads/2022/01/logo-color.png' },
      { name: 'Directi', logo: 'https://www.directi.com/images/directi-logo-0b6a20d2.svg' }
    ]
  },
  {
    name: 'Swapnil Daga',
    roles: ['Ex-Google London', 'Apple'],
    img: 'https://i.ibb.co/zW3xFnwJ/image5.png',
    college: 'IIIT Hyderabad',
    linkedin: 'https://www.linkedin.com/',
    companies: [
      { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Google_logo_%282013-2015%29.svg' },
      { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }
    ]
  },
  {
    name: 'Nikita Agarwal',
    roles: ['Ex-Data Scientist at Microsoft', 'Indeed'],
    img: 'https://i.ibb.co/V0MMZmWf/image14.png',
    college: 'IIIT Hyderabad',
    linkedin: 'https://www.linkedin.com/',
    companies: [
      { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
      { name: 'Indeed', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Indeed_logo.svg' }
    ]
  },
  {
    name: 'Nalin Abrol',
    roles: ['Ex - Plivo', 'CTO at AlgoUniversity'],
    img: 'https://i.ibb.co/9HLb3FCC/image15.png',
    college: 'IIIT Hyderabad',
    linkedin: 'https://www.linkedin.com/',
    companies: [
      { name: 'Plivo', logo: 'https://cdn.prod.website-files.com/6836fa6fd9f61895cba27d8b/6842ca7808ff42cfd420b97c_Group%201000007593.svg' },
      { name: 'AlgoUniversity', logo: 'https://d1lrk9cp1c3gxw.cloudfront.net/static/nurture/images/logo.png' }
    ]
  }
]

function CompanyLogo({ name, logo }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(/\s|\-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join('')

  if (!failed && logo) {
    return (
      <img
        src={logo}
        alt={name}
        className="h-6 sm:h-7 md:h-8 w-auto object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <span className="text-xs sm:text-[13px] md:text-sm font-semibold text-white/85 tracking-wide">
      {initials || name.slice(0, 2).toUpperCase()}
    </span>
  )
}

export default function Mentors() {
  const scrollerRef = useRef(null)

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.max(1, Math.floor(el.clientWidth / 3)) * (dir === 'left' ? -1 : 1)
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="mentors" className="section-dark py-14 sm:py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center">
          <h2 className="text-[28px] sm:text-3xl font-bold text-white">Mentors & Advisors</h2>
          <p className="mt-2 text-sm sm:text-base text-white/70">Industry leaders and researchers guiding your journey.</p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left/Right controls (desktop only) */}
          <button
            aria-label="Scroll mentors left"
            onClick={() => scrollByAmount('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-[5] h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur hover:bg-black/60 transition"
          >
            ‹
          </button>
          <button
            aria-label="Scroll mentors right"
            onClick={() => scrollByAmount('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-[5] h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur hover:bg-black/60 transition"
          >
            ›
          </button>

          <div
            ref={scrollerRef}
            className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          >
            <div
              className="flex gap-4 sm:gap-5 pr-3 sm:pr-4 snap-x snap-mandatory"
              style={{ scrollPaddingLeft: '1rem' }}
            >
              {mentors.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative snap-start flex-shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[calc((100%_-_3rem)/3)] xl:w-[calc((100%_-_3rem)/3)] overflow-hidden rounded-2xl"
                >
                  {/* Elegant compact glass card */}
                  <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/10 to-white/5">
                    <div className="rounded-2xl h-full w-full bg-white/5 backdrop-blur-xl border border-white/10">
                      {/* Image */}
                      <div className="relative rounded-t-2xl overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                        <img src={m.img} alt={m.name} className="h-full w-full object-cover" loading="lazy" />

                        {/* Top-right LinkedIn button over the photo */}
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`View ${m.name} on LinkedIn`}
                            className="absolute top-2 right-2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/50 text-white border border-white/15 backdrop-blur hover:bg-black/60 transition"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                      </div>

                      {/* Info */}
                      <div className="px-3.5 pt-3.5 pb-3 text-center">
                        <h3 className="text-white text-sm sm:text-[15px] font-semibold tracking-tight">{m.name}</h3>
                        {/* Roles */}
                        <div className="mt-1 space-y-0.5">
                          {m.roles?.map((r) => (
                            <p key={r} className="text-[11px] sm:text-xs text-white/75 leading-relaxed">{r}</p>
                          ))}
                        </div>

                        {/* Divider */}
                        <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                        {/* Companies row (unboxed logos) */}
                        <div className="mt-1.5 flex items-center justify-center gap-2.5 sm:gap-3.5">
                          {m.companies?.map((c) => (
                            <CompanyLogo key={c.name} name={c.name} logo={c.logo} />
                          ))}
                        </div>

                        {/* College */}
                        <div className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white/70">{m.college}</div>
                      </div>
                    </div>

                    {/* Hover polish */}
                    <div className="absolute inset-0 rounded-2xl ring-0 ring-white/0 group-hover:ring-1 group-hover:ring-white/15 transition" />
                    <div className="absolute -inset-x-6 -bottom-6 h-20 opacity-0 group-hover:opacity-20 blur-2xl" style={{ backgroundImage: 'radial-gradient(40% 60% at 50% 20%, var(--ds-violet), transparent)' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Removed CTAs for a cleaner, compact section */}
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-40 blur-2xl" style={{ backgroundImage: 'linear-gradient(90deg, color-mix(in srgb, var(--ds-blue) 25%, transparent), color-mix(in srgb, var(--ds-violet) 25%, transparent))' }} />
    </section>
  )
}
