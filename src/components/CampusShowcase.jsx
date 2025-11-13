import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function CampusShowcase() {
  const items = [
    {
      title: 'Innovation Hubs',
      copy: 'Makerspaces, AI studios, and robotics bays open 24/7 with expert mentors on-site.',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Green, Smart Campus',
      copy: 'Solar canopies, autonomous shuttles, and IoT-powered sustainability dashboards.',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Global Community',
      copy: 'Vibrant clubs, hackathons, and exchange programs across leading universities.',
      img: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="campus" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          theme="light"
          size="lg"
          title="Experience Campus Life"
          subtitle="A community designed to inspire, collaborate, and create."
          className="mb-10"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-sm"
            >
              <img src={card.img} alt="" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{card.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
