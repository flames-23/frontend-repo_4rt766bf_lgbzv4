import { motion } from 'framer-motion'

const tracks = [
  {
    name: 'Google Summer of Code',
    short: 'GSoC',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
    result: 'Multiple selections each year under top orgs with strong mentorship and open-source impact.',
  },
  {
    name: 'ICPC',
    short: 'ICPC',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    result: 'Teams advancing to regionals and beyond through rigorous problem solving and camps.',
  },
  {
    name: 'Meta Hacker Cup',
    short: 'HackerCup',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    result: 'Top percentile finishes with structured prep, editorials, and mock contests.',
  },
  {
    name: 'Quant & Trading',
    short: 'Quant',
    img: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1600&auto=format&fit=crop',
    result: 'Offers from HFTs and leading quant funds through math + systems + interview prep.',
  },
]

export default function Achievers() {
  return (
    <section id="achievers" className="py-16 bg-gradient-to-b from-white to-violet-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Achievers Tracks</h2>
          <p className="mt-3 text-base text-gray-700">Elite tracks mentored by experts with measurable outcomes.</p>
        </div>

        {/* 4 compact cards for tighter layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tracks.map((t, i) => (
            <motion.article
              key={t.short}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/80 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-gray-800">
                  {t.short}
                </span>
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900">{t.name}</h3>
                <p className="mt-1.5 text-sm text-gray-600">{t.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
