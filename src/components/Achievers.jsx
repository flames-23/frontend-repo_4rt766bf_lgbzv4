import { motion } from 'framer-motion'

const tracks = [
  { name: 'Google Summer of Code', short: 'GSoC', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop', result: 'Multiple selections each year under top orgs.' },
  { name: 'ICPC', short: 'ICPC', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop', result: 'Teams advancing to regionals and beyond.' },
  { name: 'Meta Hacker Cup', short: 'HackerCup', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop', result: 'Top percentile finishes and global ranks.' },
  { name: 'Quant & Trading', short: 'Quant', img: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1600&auto=format&fit=crop', result: 'Offers from HFTs and leading quant funds.' },
  { name: 'Research', short: 'Research', img: 'https://images.unsplash.com/photo-1581092334625-1e7e7c1c1f5f?q=80&w=1600&auto=format&fit=crop', result: 'Papers at top-tier venues with faculty mentors.' },
]

export default function Achievers() {
  return (
    <section id="achievers" className="py-24 bg-gradient-to-b from-white to-violet-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Achievers Tracks</h2>
          <p className="mt-4 text-lg text-gray-700">Elite tracks mentored by experts with measurable outcomes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <motion.div
              key={t.short}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative" style={{ aspectRatio: '16 / 9' }}>
                <img src={t.img} alt={t.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                    <p className="text-white/80 text-sm">{t.result}</p>
                  </div>
                  <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-white text-sm">{t.short}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
