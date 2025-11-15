import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

// Press items: publication + screenshot
const pressItems = [
  {
    publication: 'The New York Times',
    src: 'https://images.unsplash.com/photo-1638740600767-d50c5c7781cc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBOZXclMjBZb3JrJTIwVGltZXN8ZW58MHwwfHx8MTc2MzIxNDQwNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'The New York Times feature on Algouniversity',
  },
  {
    publication: 'Le Monde',
    src: 'https://images.unsplash.com/photo-1638740600767-d50c5c7781cc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBOZXclMjBZb3JrJTIwVGltZXN8ZW58MHwwfHx8MTc2MzIxNDQwNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Le Monde article on Algouniversity',
  },
  {
    publication: 'The Guardian',
    src: 'https://images.unsplash.com/photo-1730992508883-aa8c0714100b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZSUyME1vbmRlJTIwYXJ0aWNsZSUyMG9ufGVufDB8MHx8fDE3NjMyMTQ0MDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'The Guardian coverage of Algouniversity',
  },
  {
    publication: 'Times of India',
    src: 'https://images.unsplash.com/photo-1599744301623-9f5a27313368?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBHdWFyZGlhbiUyMGNvdmVyYWdlJTIwb2Z8ZW58MHwwfHx8MTc2MzIxNDQwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Times of India feature on Algouniversity',
  },
  {
    publication: 'The Times',
    src: 'https://images.unsplash.com/photo-1546833998-07256bcc76ad?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaW1lcyUyMG9mJTIwSW5kaWElMjBmZWF0dXJlfGVufDB8MHx8fDE3NjMyMTQ0MDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'The Times front page mention',
  },
  {
    publication: 'La Stampa',
    src: 'https://images.unsplash.com/photo-1579532582940-957ceba4f373?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBUaW1lcyUyMGZyb250JTIwcGFnZSUyMG1lbnRpb258ZW58MHwwfHx8MTc2MzIxNDQwOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'La Stampa coverage',
  },
  {
    publication: 'Corriere della Sera',
    src: 'https://images.unsplash.com/photo-1722684768315-11fc753354f6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYSUyMFN0YW1wYSUyMGNvdmVyYWdlfGVufDB8MHx8fDE3NjMyMTQ0MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Corriere della Sera article',
  },
]

export default function BuzzAboutUsMinimal() {
  const cardBase =
    'flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow transition-shadow duration-300'

  // Duplicate items to create a seamless loop
  const loopItems = [...pressItems, ...pressItems]

  return (
    <section id="buzz" className="py-[60px] bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section title (top-left) */}
        <div className="mb-6">
          <SectionHeading
            title="Global Press Coverage"
            subtitle={null}
            align="left"
            theme="light"
            size="md"
          />
        </div>
      </div>

      {/* Auto-scrolling, infinite loop carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 py-2 will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 35 }}
          aria-label="Press carousel auto-scroll"
        >
          {loopItems.map((item, i) => (
            <article
              key={`${item.publication}-${i}`}
              className={`${cardBase}`}
              aria-label={`Press card: ${item.publication}`}
            >
              {/* Top header bar */}
              <div className="px-4 pt-4 pb-3">
                <div className="text-[12px] leading-5 text-[#8A8A8A]">Acknowledged by media</div>
                <div className="mt-0.5 text-sm font-semibold text-slate-900">{item.publication}</div>
              </div>

              {/* Main body */}
              <div className="px-4 pb-4">
                <div className="rounded-2xl shadow-sm overflow-hidden bg-white">
                  {/* Fixed-height media box for consistent card heights */}
                  <div className="h-[160px] sm:h-[180px] md:h-[200px] flex items-center justify-center bg-white">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Edge fades to hint overflow while keeping it clean */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F7FA] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F7FA] to-transparent" />
      </div>
    </section>
  )
}
