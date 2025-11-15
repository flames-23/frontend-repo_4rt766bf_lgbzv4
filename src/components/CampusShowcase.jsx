import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function CampusShowcase() {
  const items = [
    {
      title: 'Innovation Hubs',
      copy: '24/7 makerspaces, AI studios, and robotics bays with expert mentors.',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Green, Smart Campus',
      copy: 'Solar canopies, autonomous shuttles, and real-time sustainability dashboards.',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Global Community',
      copy: 'Clubs, hackathons, and exchange programs across leading universities.',
      img: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  const cardBase =
    'group relative flex flex-col overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-slate-200/70 shadow-sm transition duration-300 hover:shadow-md'

  return (
    <section id="campus" className="py-14 bg-[#F5F5F5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          theme="light"
          size="md"
          title="Campus Life"
          subtitle="Thoughtfully designed spaces and a vibrant community—kept elegant and minimal."
          className="mb-8"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={cardBase}
            >
              {/* Media */}
              <div className="relative">
                <img
                  src={card.img}
                  alt=""
                  className="h-36 w-full object-cover"
                  loading="lazy"
                />
                {/* Subtle overlay on hover for polish */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{card.copy}</p>
                {/* Compact footer spacing to keep cards tight */}
                <div className="mt-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
