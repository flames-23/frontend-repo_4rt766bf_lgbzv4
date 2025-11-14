import { useRef } from 'react'
import { motion } from 'framer-motion'

const mentors = [
  {
    name: 'Dr. Ayesha Rao',
    title: 'AI Researcher, Ex-DeepMind',
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Prof. Karthik Menon',
    title: 'Aerospace Systems, ISRO Advisor',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Ananya Kapoor',
    title: 'Cloud Architect, AWS Hero',
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Rohit Saini',
    title: 'Security Engineer, Ex-Palo Alto',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Meera Gupta',
    title: 'Product Leader, Google',
    img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Arjun Verma',
    title: 'ML Engineer, OpenAI',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Neha Sharma',
    title: 'Data Scientist, Nvidia',
    img: 'https://images.unsplash.com/photo-1544723120-68f20b61b66d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Vikram Iyer',
    title: 'SRE, Netflix',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop'
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
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="mx-2 mb-2 rounded-lg border border-white/15 bg-white/15 backdrop-blur-2xl p-2.5">
                      <h3 className="text-white text-sm sm:text-base font-semibold tracking-tight">{m.name}</h3>
                      <p className="text-white/80 text-xs sm:text-sm">{m.title}</p>
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
