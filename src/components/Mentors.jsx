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
    <section id="mentors" className="section-dark py-20 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Mentors & Advisors</h2>
          <p className="mt-3 text-white/70">Industry leaders and researchers guiding your journey.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass-card"
              style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
            >
              <div className="relative" style={{ aspectRatio: '4 / 5' }}>
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              </div>

              <div className="absolute bottom-0 left-0 right-0">
                <div className="mx-3 mb-3 rounded-xl border border-white/15 bg-white/15 backdrop-blur-2xl p-3">
                  <h3 className="text-white font-semibold tracking-tight">{m.name}</h3>
                  <p className="text-white/80 text-sm">{m.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#admissions-aseat" className="rounded-full px-6 py-3 font-medium text-white shadow-lg hover:shadow-xl transition" style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))' }}>Become a Mentor</a>
          <a href="#contact" className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-6 py-3 font-medium text-white hover:bg-white/15 transition">Contact Team</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-40 blur-2xl" style={{ backgroundImage: 'linear-gradient(90deg, color-mix(in srgb, var(--ds-blue) 25%, transparent), color-mix(in srgb, var(--ds-violet) 25%, transparent))' }} />
    </section>
  )
}
