import { useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

// Newspaper cutouts carousel — styled like Mentors but in light/white theme
const cutouts = [
  'https://upload.wikimedia.org/wikipedia/commons/7/7e/The_New_York_Times_front_page.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/95/2019-02-16_Le_Monde.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8f/The_Guardian_March_2012.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Times_of_India_Newspaper.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/8/88/The_Times_front_page.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1f/La_Stampa_2015-11-14.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b7/Corriere_della_Sera_front_page_2015-11-14.jpg',
]

export default function BuzzAboutUsMinimal() {
  const scrollerRef = useRef(null)

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.max(1, Math.floor(el.clientWidth / 3)) * (dir === 'left' ? -1 : 1)
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="buzz" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SectionHeading
            title="Buzz about us"
            subtitle="Selected press cutouts featuring Algouniversity"
            align="center"
            theme="light"
            size="lg"
          />
        </div>

        <div className="relative">
          {/* Controls (desktop only) */}
          <button
            aria-label="Scroll buzz left"
            onClick={() => scrollByAmount('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-[5] h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm hover:shadow transition"
          >
            ‹
          </button>
          <button
            aria-label="Scroll buzz right"
            onClick={() => scrollByAmount('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-[5] h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm hover:shadow transition"
          >
            ›
          </button>

          <div
            ref={scrollerRef}
            className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
          >
            <div className="flex gap-5 pr-4 snap-x snap-mandatory" style={{ scrollPaddingLeft: '1rem' }}>
              {cutouts.map((src, i) => (
                <motion.div
                  key={`${src}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="snap-start flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[calc((100%_-_3rem)/3)] overflow-hidden rounded-xl bg-white/70 backdrop-blur-sm ring-1 ring-slate-200 shadow-sm hover:shadow-md transition"
                >
                  <div className="relative" style={{ aspectRatio: '3 / 4' }}>
                    <img
                      src={src}
                      alt="Press cutout about Algouniversity"
                      className="h-full w-full object-contain bg-white"
                      loading="lazy"
                    />
                    {/* Light theme bottom label bar (optional, currently empty to keep clean) */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* soft white glow at bottom for depth */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-32 blur-2xl opacity-60" style={{ background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.05), rgba(99, 102, 241, 0.06))' }} />
    </section>
  )
}
