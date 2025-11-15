import { motion } from 'framer-motion'

// "Buzz about us" — newspaper cutouts scroller
// Sharp edges, no text overlays, readable image size, subtle edge gradients

// Replace these URLs with real Algouniversity press cutouts when available
const cutouts = [
  'https://upload.wikimedia.org/wikipedia/commons/7/7e/The_New_York_Times_front_page.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/95/2019-02-16_Le_Monde.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8f/The_Guardian_March_2012.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Times_of_India_Newspaper.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/8/88/The_Times_front_page.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1f/La_Stampa_2015-11-14.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b7/Corriere_della_Sera_front_page_2015-11-14.jpg',
]

const stripVariants = {
  animate: {
    x: ['-50%', '0%'],
    transition: {
      x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' },
    },
  },
}

export default function BuzzAboutUsMinimal() {
  const items = [...cutouts, ...cutouts]
  return (
    <section aria-label="Buzz about us" className="py-6">
      <div className="relative overflow-hidden border-y border-black/10 bg-white">
        <motion.div
          className="flex items-center gap-10 py-6 will-change-transform"
          variants={stripVariants}
          animate="animate"
        >
          {items.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              className="h-32 sm:h-36 md:h-40 lg:h-48 w-auto object-contain select-none pointer-events-none shadow-sm ring-1 ring-black/10 bg-white"
              draggable={false}
              loading="lazy"
            />
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
