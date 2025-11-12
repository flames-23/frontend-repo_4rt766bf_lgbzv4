import { motion } from 'framer-motion'

export default function JobGuarantee() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: slightly lighter than hero for rhythm */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900 via-slate-900 to-blue-950" />

      {/* Ambient gradient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Glass wrapper panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-900/30 ring-1 ring-white/10 overflow-hidden"
        >
          {/* Subtle light streaks / reflections */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/4 h-64 w-64 rotate-12 bg-gradient-to-tr from-white/10 via-cyan-300/10 to-transparent blur-2xl" />
            <div className="absolute -bottom-16 right-1/3 h-40 w-80 -rotate-12 bg-gradient-to-tr from-violet-400/10 via-blue-300/10 to-transparent blur-2xl" />
          </div>

          <div className="relative grid items-stretch gap-10 p-6 sm:p-10 md:grid-cols-2 md:gap-12">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                <span className="bg-gradient-to-br from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  A B.Tech That Guarantees a Job — Not Just a Degree.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-gray-300/95">
                AlgoUniversity’s School of CS & AI blends world-class academics with hands-on industry exposure so students graduate with real experience, not just marksheets.
              </p>

              <p className="mt-3 text-sm text-gray-400">
                Hear from our Founder about how we’re redefining engineering education in India.
              </p>
            </motion.div>

            {/* Right: Video in glass frame */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative"
            >
              {/* Gradient border frame */}
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-500/60 via-blue-500/50 to-violet-600/60 shadow-xl shadow-blue-900/30 transition-transform duration-300 group-hover:scale-[1.01]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-xl">
                  {/* top reflection */}
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1"
                      title="Founder on ASCA Philosophy"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div aria-hidden className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-sky-500/0 via-cyan-400/0 to-violet-600/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
