import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Next Generation B.Tech
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">College of Engineering</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 text-lg text-gray-700/90 dark:text-gray-300">
                Build, innovate, and lead in a future-first campus that blends rigorous academics with hands-on, industry-driven experience.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#admissions" className="inline-flex items-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
                  Start Your Application
                </a>
                <a href="#programs" className="inline-flex items-center rounded-full border border-gray-800/10 dark:border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10 transition-all">
                  Explore Programs
                </a>
              </motion.div>

              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                {[
                  { label: 'Placement Rate', value: '98%' },
                  { label: 'Industry Partners', value: '120+' },
                  { label: 'Research Labs', value: '15' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-white/20 dark:border-white/10 p-4">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-6" aria-hidden>
              {/* 3D scene already rendered full-bleed in background */}
              <div className="h-[60vh]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
