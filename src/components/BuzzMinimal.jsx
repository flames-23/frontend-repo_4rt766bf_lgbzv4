import { motion } from 'framer-motion'

// Minimal, no-text, sharp-edged logo/image scroller (left-to-right)
// Designed to generate trust via familiar brand imagery. Replace URLs with real logos.

const logos = [
  'https://assets-v2.scaler.com/assets/programs/undergrad/svg/google-logo-97e403d0b48d2da1c9d47dc98b6198171ff21048714ba6575c6cadb409053aee.svg.gz',
  'https://assets-v2.scaler.com/assets/programs/undergrad/svg/microsoft-logo-e807dee90674e40eecefb333c9c5520fd1b6350061677237394015dd7e01f855.svg.gz',
  'https://assets-v2.scaler.com/assets/programs/undergrad/svg/amazon-logo-a2568f4eba54775b04f3ff133b9208b24f88523a928b35ea6c937f336426f1aa.svg.gz',
  'https://assets-v2.scaler.com/assets/programs/undergrad/svg/meta-logo-f70b8a81c2da4927bea050414bf0c252ec5f8f2ca865eb6a00bb8d5771bce59b.svg.gz',
  'https://assets-v2.scaler.com/assets/programs/undergrad/svg/adobe-logo-8e264a414a3687d0fe237cb585973f1b1ac4c26c639684f1aaa7de0ca4301dd9.svg.gz',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Accenture.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/Infosys_logo.svg',
]

const stripVariants = {
  animate: {
    x: ['-50%', '0%'],
    transition: {
      x: { repeat: Infinity, repeatType: 'loop', duration: 26, ease: 'linear' },
    },
  },
}

export default function BuzzMinimal() {
  const items = [...logos, ...logos]

  return (
    <section aria-label="Buzz about us" className="py-6">
      <div className="relative overflow-hidden border-y border-black/10 bg-white">
        <motion.div
          className="flex items-center gap-10 sm:gap-14 md:gap-16 py-5 md:py-6 will-change-transform"
          variants={stripVariants}
          animate="animate"
        >
          {items.map((src, idx) => (
            <div key={idx} className="shrink-0 px-2">
              <img src={src} alt="" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain select-none pointer-events-none" draggable={false} />
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
