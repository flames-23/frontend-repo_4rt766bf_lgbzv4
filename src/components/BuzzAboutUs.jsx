import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

// Left-to-right continuous scroller with sharp edges, no text on tiles
// Aim: generate trust by showcasing partner/press/logo strip

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Forbes_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/59/Times_Network_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/1/1b/TechCrunch_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4a/The_Economic_Times_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/0/0c/Wired_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/YourStory_Media_logo.png',
]

const stripVariants = {
  animate: {
    x: ['-50%', '0%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 28,
        ease: 'linear',
      },
    },
  },
}

export default function BuzzAboutUs() {
  const items = [...logos, ...logos]

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Buzz about us"
          title="Trusted by media and partners"
          subtitle="A quick look at who’s talking about us."
          align="left"
          size="md"
          theme="light"
          className="mb-6 sm:mb-8"
        />
      </div>

      {/* Sharp-edged scroller bar */}
      <div className="relative overflow-hidden border-y border-black/10 bg-white">
        <motion.div
          className="flex items-center gap-10 sm:gap-14 md:gap-16 py-6 md:py-8 will-change-transform"
          variants={stripVariants}
          animate="animate"
        >
          {items.map((src, idx) => (
            <div key={idx} className="shrink-0 flex items-center justify-center px-2">
              <img
                src={src}
                alt=""
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain select-none pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>

        {/* Hard edges kept; only subtle fade for overflow without rounding corners */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
