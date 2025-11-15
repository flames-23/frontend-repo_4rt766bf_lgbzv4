import { useRef } from 'react'
import { motion } from 'framer-motion'

const mentors = [
  {
    name: 'Manas Kumar Verma',
    roles: ['Ex Quant Researcher @ Alphagrep Singapore', 'Directi'],
    img: 'https://i.ibb.co/HjWb82z/image27.png',
    college: 'IIIT Hyderabad',
    companies: [
      { name: 'Alphagrep' },
      { name: 'Directi' }
    ]
  },
  {
    name: 'Swapnil Daga',
    roles: ['Ex-Google London', 'Apple'],
    img: 'https://i.ibb.co/zW3xFnwJ/image5.png',
    college: 'IIIT Hyderabad',
    companies: [
      { name: 'Google', logo: 'https://cdn.simpleicons.org/google/FFFFFF' },
      { name: 'Apple', logo: 'https://cdn.simpleicons.org/apple/FFFFFF' }
    ]
  },
  {
    name: 'Nikita Agarwal',
    roles: ['Ex-Data Scientist at Microsoft', 'Indeed'],
    img: 'https://i.ibb.co/V0MMZmWf/image14.png',
    college: 'IIIT Hyderabad',
    companies: [
      { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/FFFFFF' },
      { name: 'Indeed', logo: 'https://cdn.simpleicons.org/indeed/FFFFFF' }
    ]
  },
  {
    name: 'Nalin Abrol',
    roles: ['Ex - Plivo', 'CTO at AlgoUniversity'],
    img: 'https://i.ibb.co/9HLb3FCC/image15.png',
    college: 'IIIT Hyderabad',
    companies: [
      { name: 'Plivo' },
      { name: 'AlgoUniversity' }
    ]
  }
]

export default function Mentors() {
  const scrollerRef = useRef(null)

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.max(1, Math.floor(el.clientWidth / 4)) * (dir === 'left' ? -1 : 1)
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="mentors" className="section-dark py-20 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Mentors & Advisors</h2>
          <p className="mt-3 text-white/70">Industry leaders and researchers guiding your journey.</p>
        </div>

        {/* Carousel wrapper: shows 4 cards per row on large screens, scrolls for more */}
        <div className="relative">
          {/* Left/Right controls (desktop only) */}
          <button
            aria-label="Scroll mentors left"
            onClick={() => scrollByAmount('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-[5] h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur hover:bg-black/60 transition"
          >
            ‹
          </button>
          <button
            aria-label="Scroll mentors right"
            onClick={() => scrollByAmount('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-[5] h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur hover:bg-black/60 transition"
          >
            ›
          </button>

          <div
            ref={scrollerRef}
            className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          >
            <div
              className="flex gap-5 pr-4 snap-x snap-mandatory"
              style={{ scrollPaddingLeft: '1rem' }}
            >
              {mentors.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative snap-start flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[calc((100%_-_3rem)/4)] xl:w-[calc((100%_-_3rem)/4)] overflow-hidden rounded-xl glass-card"
                  style={{ WebkitBackdropFilter: 'blur(14px)', backdropFilter: 'blur(14px)' }}
                >
                  <div className="relative" style={{ aspectRatio: '3 / 4' }}>
                    <img src={m.img} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  </div>

                  {/* Info panel */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="mx-2 mb-2 rounded-lg border border-white/15 bg-white/12 backdrop-blur-2xl p-2.5">
                      <h3 className="text-white text-sm sm:text-base font-semibold tracking-tight">{m.name}</h3>

                      {/* Companies row (logos if available; fallback to monogram) */}
                      <div className="mt-1.5 flex items-center gap-2">
                        {m.companies?.map((c) => (
                          <div key={c.name} className="h-5 w-5 shrink-0 rounded-[6px] bg-white/10 grid place-items-center overflow-hidden">
                            {c.logo ? (
                              <img src={c.logo} alt={c.name} className="h-3.5 w-3.5 object-contain" loading="lazy" />
                            ) : (
                              <span className="text-[10px] font-semibold text-white/90 leading-none">
                                {c.name.slice(0,1)}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* College row */}
                      <div className="mt-1 text-[12px] text-white/80">
                        {m.college}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#admissions-aseat" className="rounded-full px-6 py-3 font-medium text-white shadow-lg hover:shadow-xl transition" style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))' }}>Become a Mentor</a>
          <a href="#contact" className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-6 py-3 font-medium text-white hover:bg-white/15 transition">Contact Team</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-40 blur-2xl" style={{ backgroundImage: 'linear-gradient(90deg, color-mix(in srgb, var(--ds-blue) 25%, transparent), color-mix(in srgb, var(--ds-violet) 25%, transparent))' }} />
    </section>
  )
}
