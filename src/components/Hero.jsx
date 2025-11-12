import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      {/* Subtle background accents (clean, not busy) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
            >
              Bold. Modern. Engineering for the Future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl"
            >
              A next‑generation B.Tech experience that blends deep fundamentals with hands‑on, industry‑scale building.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#admissions"
                className="inline-flex items-center rounded-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
              >
                Start Application
              </a>
              <a
                href="#programs"
                className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors"
              >
                Explore Programs
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 grid w-full grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {[
                { label: 'Placement Rate', value: '98%' },
                { label: 'Industry Partners', value: '120+' },
                { label: 'Research Labs', value: '15' },
              ].map((stat, i) => (
                <div key={stat.label} className="p-5">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-slate-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
