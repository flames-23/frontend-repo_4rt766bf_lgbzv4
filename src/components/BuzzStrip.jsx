import { motion } from 'framer-motion'

// Ultra-minimal trust scroller: sharp edges, no text, left-to-right motion

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Forbes_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Accenture.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/59/Times_Network_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/Infosys_logo.svg',
]

const stripVariants = {
  animate: {
    x: ['-50%', '0%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      }
    }
  }
}

export default function BuzzStrip() {
  const items = [...logos, ...logos]

  return (
    <section className="py-4">
      <div className="relative overflow-hidden border-y border-black/10 bg-white">
        <motion.div
          className="flex items-center gap-12 py-5 will-change-transform"
          variants={stripVariants}
          animate="animate"
        >
          {items.map((src, i) => (
            <img key={`${src}-${i}`} src={src} alt="" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain select-none pointer-events-none" draggable={false} />
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
