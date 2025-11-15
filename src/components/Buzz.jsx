import { motion } from 'framer-motion'

const logos = [
  // Use neutral, trustworthy-style placeholders (replace with real press/partner logos later)
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-7b6832f07adb?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502143139013-314a636a5b86?q=80&w=600&auto=format&fit=crop',
]

const stripVariants = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 25,
        ease: 'linear',
      },
    },
  },
}

export default function Buzz() {
  // Duplicate the logos to create a seamless loop
  const items = [...logos, ...logos]

  return (
    <section className="bg-transparent">
      <div className="relative overflow-hidden border-t border-b border-black/10">
        {/* Scroller Track */}
        <motion.div
          className="flex gap-10 py-6 md:py-8 will-change-transform"
          variants={stripVariants}
          animate="animate"
        >
          {items.map((src, idx) => (
            <div key={idx} className="shrink-0 flex items-center justify-center">
              <img
                src={src}
                alt=""
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain select-none pointer-events-none [image-rendering:auto]"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>

        {/* Subtle gradient edges for polish while keeping sharp corners */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F7FA] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F7FA] to-transparent" />
      </div>
    </section>
  )
}
