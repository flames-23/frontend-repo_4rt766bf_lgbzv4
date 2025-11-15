import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

// Config: small brand chip shown above the carousel (logo + label)
const pressBrand = {
  logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg',
  label: 'Global Press Coverage',
}

// Newspaper cutouts carousel — compact, classy, light theme
const cutouts = [
  {
    src: 'https://images.unsplash.com/photo-1638740600767-d50c5c7781cc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBOZXclMjBZb3JrJTIwVGltZXN8ZW58MHwwfHx8MTc2MzIxNDQwNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'The New York Times feature on Algouniversity',
  },
  {
    src: 'https://images.unsplash.com/photo-1638740600767-d50c5c7781cc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBOZXclMjBZb3JrJTIwVGltZXN8ZW58MHwwfHx8MTc2MzIxNDQwNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Le Monde article on Algouniversity',
  },
  {
    src: 'https://images.unsplash.com/photo-1730992508883-aa8c0714100b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZSUyME1vbmRlJTIwYXJ0aWNsZSUyMG9ufGVufDB8MHx8fDE3NjMyMTQ0MDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'The Guardian coverage of Algouniversity',
  },
  {
    src: 'https://images.unsplash.com/photo-1599744301623-9f5a27313368?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBHdWFyZGlhbiUyMGNvdmVyYWdlJTIwb2Z8ZW58MHwwfHx8MTc2MzIxNDQwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Times of India feature on Algouniversity',
  },
  {
    src: 'https://images.unsplash.com/photo-1546833998-07256bcc76ad?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaW1lcyUyMG9mJTIwSW5kaWElMjBmZWF0dXJlfGVufDB8MHx8fDE3NjMyMTQ0MDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'The Times front page mention',
  },
  {
    src: 'https://images.unsplash.com/photo-1579532582940-957ceba4f373?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBUaW1lcyUyMGZyb250JTIwcGFnZSUyMG1lbnRpb258ZW58MHwwfHx8MTc2MzIxNDQwOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'La Stampa coverage',
  },
  {
    src: 'https://images.unsplash.com/photo-1722684768315-11fc753354f6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYSUyMFN0YW1wYSUyMGNvdmVyYWdlfGVufDB8MHx8fDE3NjMyMTQ0MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Corriere della Sera article',
  },
]

export default function BuzzAboutUsMinimal() {
  const trackRef = useRef(null)
  const rafRef = useRef(0)

  // Duplicate items to enable seamless looping
  const items = [...cutouts, ...cutouts]

  // Auto-scroll (right-to-left visual movement)
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let last = performance.now()
    const speed = 0.4 // pixels per ms (tuned for subtle, classy motion)

    const tick = (now) => {
      const dt = now - last
      last = now
      el.scrollLeft += speed * dt // scrollRight so content moves left

      const half = el.scrollWidth / 2
      if (el.scrollLeft >= half) {
        el.scrollLeft = el.scrollLeft - half
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const handleMouseEnter = () => cancelAnimationFrame(rafRef.current)
    const handleMouseLeave = () => {
      last = performance.now()
      rafRef.current = requestAnimationFrame(tick)
    }

    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const cardBase =
    'flex-shrink-0 overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm ring-1 ring-slate-200/70 shadow-sm hover:shadow-md transition-shadow duration-300'

  return (
    <section id="buzz" className="py-14 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-6">
          <SectionHeading
            title="Buzz about us"
            subtitle="Selected press cutouts featuring Algouniversity"
            align="center"
            theme="light"
            size="md"
          />
        </div>

        {/* Small brand chip + heading aligned left, above the carousel */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="mb-3 flex items-center gap-3"
        >
          <img
            src={pressBrand.logo}
            alt="Press logo"
            className="h-6 w-auto rounded-sm ring-1 ring-slate-200 object-contain bg-white"
            loading="lazy"
          />
          <div className="text-sm font-medium text-slate-700">
            {pressBrand.label}
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* gradient edges for elegance */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth scrollbar-none"
          >
            <div className="flex gap-4 pr-4">
              {items.map((item, i) => (
                <motion.div
                  key={`${item.src}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: (i % cutouts.length) * 0.04 }}
                  className={`${cardBase} w-[220px] sm:w-[260px] md:w-[300px]`}
                >
                  <div className="relative" style={{ aspectRatio: '3 / 4' }}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-contain bg-white"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* soft white glow at bottom for depth */}
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 blur-2xl opacity-60"
        style={{
          background:
            'linear-gradient(90deg, rgba(15,23,42,0.05), rgba(99,102,241,0.06))',
        }}
      />
    </section>
  )
}
