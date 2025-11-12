import { motion } from 'framer-motion'

const mentors = [
  {
    name: 'Dr. Ayesha Rao',
    title: 'AI Researcher, Ex-DeepMind',
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Prof. Karthik Menon',
    title: 'Aerospace Systems, ISRO Advisor',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Ananya Kapoor',
    title: 'Cloud Architect, AWS Hero',
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Rohit Saini',
    title: 'Security Engineer, Ex-Palo Alto',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Mentors() {
  return (
    <section id="mentors" className="py-20 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Mentors & Advisors</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Industry leaders and researchers guiding your journey.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-shadow"
              style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
            >
              {/* Top 80%: Image */}
              <div className="relative" style={{ aspectRatio: '4 / 5' }}>
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                {/* Subtle gradient overlay for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Bottom 20%: Text on glass bar */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="mx-3 mb-3 rounded-xl border border-white/15 bg-white/20 dark:bg-white/10 backdrop-blur-2xl p-3">
                  <h3 className="text-white font-semibold tracking-tight">{m.name}</h3>
                  <p className="text-white/80 text-sm">{m.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#admissions" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 font-medium shadow-lg hover:shadow-xl transition">Become a Mentor</a>
          <a href="#contact" className="rounded-full border border-gray-900/10 dark:border-white/15 bg-white/50 dark:bg-white/10 backdrop-blur px-6 py-3 font-medium text-gray-900 dark:text-white hover:bg-white/70 dark:hover:bg-white/15 transition">Contact Team</a>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-40 bg-gradient-to-t from-blue-500/10 to-transparent blur-2xl" />
    </section>
  )
}
