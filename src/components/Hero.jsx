import { motion } from 'framer-motion'

export default function Hero() {
  const videoSrc = 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4'

  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden text-white">
      {/* Background video (campus tour) */}
      <div className="absolute inset-0" aria-hidden>
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_10%,rgba(99,102,241,0.18),transparent_60%)] mix-blend-screen" />
      </div>

      {/* Foreground content */}
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
              className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
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
                className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 hover:bg-white/15 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors"
              >
                Explore Programs
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 grid w-full grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              {[
                { label: 'Placement Rate', value: '98%' },
                { label: 'Industry Partners', value: '120+' },
                { label: 'Research Labs', value: '15' },
              ].map((stat) => (
                <div key={stat.label} className="p-5">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-white/90">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
