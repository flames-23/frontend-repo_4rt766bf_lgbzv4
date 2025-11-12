import { motion } from 'framer-motion'

export default function Hero() {
  const videoSrc = 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4'

  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(59,130,246,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Next Generation B.Tech
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">College of Engineering</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 text-lg text-white/85">
                Build, innovate, and lead in a future-first campus that blends rigorous academics with hands-on, industry-driven experience.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#admissions" className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
                  Start Your Application
                </a>
                <a href="#programs" className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-all">
                  Explore Programs
                </a>
              </motion.div>

              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                {[
                  { label: 'Placement Rate', value: '98%' },
                  { label: 'Industry Partners', value: '120+' },
                  { label: 'Research Labs', value: '15' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5" aria-hidden>
              {/* Spacer to balance grid on large screens */}
              <div className="h-[60vh]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
