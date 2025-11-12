import { motion } from 'framer-motion'

export default function Hero() {
  // Source media
  const videoSrc = 'https://videos.pexels.com/video-files/5212327/5212327-uhd_2560_1440_25fps.mp4'
  const posterSrc = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=60'

  // Replace with the actual upcoming date when available
  const examDate = 'Dec 08, 2025'

  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: [3, 4, 5, 6][i % 4],
    left: `${(i * 9 + 11) % 100}%`,
    top: `${(i * 14 + 7) % 100}%`,
    delay: i * 0.35,
  }))

  return (
    <section className="relative min-h-[88vh] pt-20 overflow-hidden text-white">
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
        {/* Dark + color overlays for premium depth */}
        <div className="absolute inset-0 bg-neutral-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(99,102,241,0.15)_0%,rgba(17,17,17,0.7)_60%,rgba(17,17,17,0.95)_100%)]" />
      </div>

      {/* Ambient gradient glows and subtle light streaks */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ x: -160, opacity: 0.5 }}
          animate={{ x: 160 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-24 left-0 h-[2px] w-[22rem] -rotate-12 rounded-full bg-gradient-to-r from-sky-400/40 via-cyan-300/30 to-violet-500/40 blur-md"
        />
        <motion.div
          initial={{ x: 140, opacity: 0.5 }}
          animate={{ x: -140 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute bottom-24 right-0 h-[2px] w-[26rem] rotate-8 rounded-full bg-gradient-to-r from-violet-500/40 via-blue-500/30 to-cyan-400/40 blur-md"
        />
      </div>

      {/* Floating particles (very subtle) */}
      <div aria-hidden className="absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/25 shadow-[0_0_10px_rgba(255,255,255,0.25)]"
            style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
            initial={{ y: 0, opacity: 0.55 }}
            animate={{ y: [0, -10, 0], opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 7 + (p.id % 5), repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Foreground content - left column only */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left: text content */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="py-10 sm:py-14 md:py-16 pr-0 md:pr-8"
            >
              {/* Top badges */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  AICTE Approved
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  UGC Recognised
                </span>
              </div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-3xl sm:text-5xl md:text-[2.9rem] font-extrabold tracking-tight leading-tight md:leading-[1.07]"
              >
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  4-Year B.Tech in Computer Science & AI
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-base md:text-lg text-white/90 max-w-xl"
              >
                Built by Engineers from Google, Apple & Microsoft
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6"
              >
                <a
                  href="#admissions-aseat"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition"
                >
                  Apply via A-SEAT
                </a>
              </motion.div>
            </motion.div>

            {/* Right: empty column to keep text on left half */}
            <div className="hidden md:block" aria-hidden />
          </div>
        </div>
      </div>

      {/* Edge vignette to keep it premium and contained */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
    </section>
  )
}
