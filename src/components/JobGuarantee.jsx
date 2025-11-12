import { motion } from 'framer-motion'

export default function JobGuarantee() {
  return (
    <section className="relative overflow-hidden">
      {/* Keep page background as-is; this section provides its own light card */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Light theme card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_-10px_rgba(2,6,23,0.15)] overflow-hidden"
        >
          {/* Soft radial highlight for a premium feel */}
          <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-200/60 via-cyan-100/50 to-violet-200/60 blur-3xl" />

          <div className="relative grid items-stretch gap-10 p-6 sm:p-10 md:grid-cols-2 md:gap-12">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                <span className="bg-gradient-to-br from-sky-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
                  A B.Tech That Guarantees a Job — Not Just a Degree.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-700">
                AlgoUniversity’s School of CS & AI blends world-class academics with hands-on industry exposure so students graduate with real experience, not just marksheets.
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Hear from our Founder about how we’re redefining engineering education in India.
              </p>

              {/* Light themed bullets for quick highlights */}
              <ul className="mt-6 grid gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" />Industry-backed curriculum</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-500" />Real projects and internships</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-500" />Placement support until you land a role</li>
              </ul>
            </motion.div>

            {/* Right: Video in light card frame */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative"
            >
              {/* Subtle gradient border */}
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-300 via-cyan-300 to-violet-300">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  {/* top reflection */}
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/80 to-transparent" />

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

              {/* Gentle hover glow */}
              <div aria-hidden className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-sky-300/0 via-cyan-300/0 to-violet-300/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
