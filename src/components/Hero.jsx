import { motion } from 'framer-motion'

export default function Hero() {
  // Premium dark hero with campus video background + glass overlay
  const videoSrc = 'https://videos.pexels.com/video-files/5212327/5212327-uhd_2560_1440_25fps.mp4'
  const posterSrc = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=60'

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: [3, 4, 5, 6][i % 4],
    left: `${(i * 8 + 7) % 100}%`,
    top: `${(i * 13 + 6) % 100}%`,
    delay: i * 0.45,
  }))

  return (
    <section className="relative min-h-[78vh] pt-20 overflow-hidden text-white">
      {/* Background video */}
      <div className="absolute inset-0" aria-hidden>
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
        />
        {/* Dark and color glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)] mix-blend-screen" />
      </div>

      {/* Gradient light streaks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          initial={{ x: -160, opacity: 0.5 }}
          animate={{ x: 160 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-24 left-0 h-1 w-[22rem] -rotate-12 rounded-full bg-gradient-to-r from-blue-500/40 via-cyan-400/30 to-violet-500/40 blur-xl"
        />
        <motion.div
          initial={{ x: 140, opacity: 0.5 }}
          animate={{ x: -140 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute bottom-24 right-0 h-1 w-[26rem] rotate-8 rounded-full bg-gradient-to-r from-violet-500/40 via-blue-500/30 to-cyan-400/40 blur-xl"
        />
      </div>

      {/* Floating particles */}
      <div aria-hidden className="absolute inset-0 -z-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/30 shadow-[0_0_12px_rgba(255,255,255,0.25)]"
            style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
            initial={{ y: 0, opacity: 0.6 }}
            animate={{ y: [0, -10, 0], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6 + (p.id % 5), repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Foreground content inside a glass card */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 sm:p-6 md:p-7 shadow-[0_16px_48px_-18px_rgba(59,130,246,0.35)]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-5xl md:text-[2.9rem] font-extrabold tracking-tight leading-tight md:leading-[1.07]"
            >
              The Future of Engineering Education. Today.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-base md:text-lg text-white/90"
            >
              A 4-Year B.Tech in Computer Science & Artificial Intelligence built by engineers from Google, Apple & Microsoft.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 flex flex-wrap gap-3"
            >
              <a
                href="#admissions-aseat"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:shadow-violet-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                Register for A-SEAT
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 hover:bg-white/15 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              >
                Explore Curriculum
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
