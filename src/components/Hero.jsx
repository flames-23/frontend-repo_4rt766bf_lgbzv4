import { motion } from 'framer-motion'

export default function Hero() {
  // Media for the visual block (royalty-free stock video)
  const videoSrc =
    'https://videos.pexels.com/video-files/7987806/7987806-uhd_2560_1440_25fps.mp4'
  const posterSrc =
    'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop'

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: [3, 4, 5, 6][i % 4],
    left: `${(i * 9 + 11) % 100}%`,
    top: `${(i * 14 + 7) % 100}%`,
    delay: i * 0.35,
  }))

  return (
    <section className="relative min-h-[88vh] pt-16 pb-8 overflow-hidden text-white">
      {/* Background: dark premium gradient + ambient glows */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_20%_0%,#0b1b3a_0%,#0a1326_45%,#070c1a_100%)]" />
        {/* Ambient gradient ribbons */}
        <motion.div
          initial={{ x: -160, opacity: 0.5 }}
          animate={{ x: 160 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-20 left-0 h-[2px] w-[22rem] -rotate-12 rounded-full bg-gradient-to-r from-sky-400/40 via-cyan-300/30 to-violet-500/40 blur-md"
        />
        <motion.div
          initial={{ x: 140, opacity: 0.5 }}
          animate={{ x: -140 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute bottom-20 right-0 h-[2px] w-[26rem] rotate-8 rounded-full bg-gradient-to-r from-violet-500/40 via-blue-500/30 to-cyan-400/40 blur-md"
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/25 shadow-[0_0_10px_rgba(255,255,255,0.25)]"
            style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
            initial={{ y: 0, opacity: 0.45 }}
            animate={{ y: [0, -10, 0], opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 7 + (p.id % 5), repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 lg:gap-8">
            {/* Left: text content */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="py-6 sm:py-8 md:py-10 pr-0 md:pr-4 lg:pr-6"
            >
              {/* Top badges */}
              <div className="mb-2.5 flex flex-wrap items-center gap-2">
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
                className="text-[2.4rem] sm:text-[3.25rem] md:text-[3.75rem] font-extrabold tracking-tight leading-[1.04]"
              >
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  B.Tech in CS and AI That Gets You a Job
                </span>
              </motion.h1>

              {/* Subtext: learn from engineers */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-2 text-[1.05rem] md:text-lg text-white/90 max-w-xl"
              >
                Learn from engineers who’ve built real systems at:
              </motion.p>

              {/* Company logos row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-2 flex items-center gap-6 sm:gap-7 md:gap-8"
              >
                <LogoGoogle />
                <LogoApple />
                <LogoMicrosoft />
                <LogoAmazon />
                <LogoServiceNow />
              </motion.div>

              {/* Supporting line */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-[0.98rem] md:text-[1.05rem] text-white/85 max-w-xl"
              >
                No outdated coursework. Only real-world engineering taught by real practitioners.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="mt-6"
              >
                <a
                  href="#admissions-aseat"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-[16px] font-semibold text-white tracking-tight shadow-[0_10px_28px_rgba(79,70,229,0.35),0_6px_16px_rgba(59,130,246,0.25)] ring-1 ring-white/10 transition-all hover:scale-[1.02] hover:shadow-[0_16px_44px_rgba(79,70,229,0.45),0_10px_24px_rgba(59,130,246,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Apply via A-SEAT
                </a>
              </motion.div>
            </motion.div>

            {/* Right: visual block with autoplay looping video */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
              className="relative w-full md:-mt-4"
            >
              {/* Background glow behind video for smoother blend */}
              <div aria-hidden className="absolute -inset-6 -z-10 hidden md:block">
                <div className="h-full w-full rounded-[28px] bg-[radial-gradient(60%_60%_at_30%_20%,rgba(59,130,246,0.28),transparent_70%),radial-gradient(60%_60%_at_100%_80%,rgba(139,92,246,0.26),transparent_70%)] blur-2xl opacity-80" />
              </div>

              <div className="relative ml-0 md:ml-2 lg:ml-3 aspect-[16/9] w-full max-w-[780px] lg:max-w-[860px] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-black/40">
                <video
                  className="h-full w-full object-cover"
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={posterSrc}
                />
                {/* Soft gradient edge overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(29,78,216,0.18),transparent_40%),radial-gradient(120%_120%_at_0%_100%,rgba(139,92,246,0.18),transparent_40%)]" />
                {/* Subtle inner vignette */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0)_30%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0)_45%)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Edge vignette to keep it premium and contained */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#070c1a] via-[#070c1a]/60 to-transparent" />
    </section>
  )
}

// --- Logo SVGs (monochrome with subtle glow) ---
function baseLogoClass() {
  return 'h-8 w-auto opacity-90 drop-shadow-[0_0_12px_rgba(255,255,255,0.22)]'
}

function LogoGoogle() {
  return (
    <svg className={baseLogoClass()} viewBox="0 0 48 48" fill="none" aria-label="Google logo">
      <path fill="#E8EAED" d="M43.6 24.5c0-1.5-.1-3-.4-4.4H24v8.4h11.1c-.5 2.8-2.1 5.1-4.4 6.7v5.6h7.1c4.1-3.8 5.8-9.4 5.8-16.3z"/>
      <path fill="#E8EAED" d="M24 44c5.4 0 9.9-1.8 13.2-4.9l-7.1-5.6c-2 1.4-4.6 2.3-6.1 2.3-4.7 0-8.6-3.2-10-7.5H6.6v5.9C9.9 39.9 16.3 44 24 44z"/>
      <path fill="#E8EAED" d="M14 28.3c-.3-1-.5-2.1-.5-3.3s.2-2.3.5-3.3v-5.9H6.6C5 18.1 4 21 4 25s1 6.9 2.6 9.2L14 28.3z"/>
      <path fill="#E8EAED" d="M24 14.2c2.9 0 5.6 1 7.6 3l5.7-5.7C33.9 8.2 29.4 6 24 6 16.3 6 9.9 10.1 6.6 16.8L14 22.1c1.4-4.3 5.3-7.9 10-7.9z"/>
    </svg>
  )
}

function LogoApple() {
  return (
    <svg className={baseLogoClass()} viewBox="0 0 48 48" fill="#E8EAED" aria-label="Apple logo">
      <path d="M32.8 24.4c0-4.2 3.5-6.4 3.6-6.5-2-2.8-5.1-3.2-6.2-3.2-2.6-.3-5.1 1.5-6.4 1.5-1.3 0-3.4-1.5-5.6-1.5-2.9 0-5.6 1.7-7.1 4.3-3.1 5.4-.8 13.4 2.2 17.8 1.5 2.2 3.3 4.6 5.6 4.5 2.2-.1 3.1-1.4 5.9-1.4 2.8 0 3.6 1.4 5.9 1.4 2.4 0 3.9-2.2 5.4-4.4 1.7-2.4 2.4-4.7 2.4-4.8-.1 0-4.8-1.8-4.8-7.7z"/>
      <path d="M28.9 11.7c1.2-1.5 2-3.6 1.8-5.7-1.8.1-4 1.2-5.3 2.7-1.2 1.4-2.1 3.5-1.9 5.5 2 .1 4.1-1.1 5.4-2.5z"/>
    </svg>
  )
}

function LogoMicrosoft() {
  return (
    <svg className={baseLogoClass()} viewBox="0 0 48 48" aria-label="Microsoft logo">
      <rect x="6" y="6" width="16" height="16" fill="#E8EAED"/>
      <rect x="26" y="6" width="16" height="16" fill="#E8EAED"/>
      <rect x="6" y="26" width="16" height="16" fill="#E8EAED"/>
      <rect x="26" y="26" width="16" height="16" fill="#E8EAED"/>
    </svg>
  )
}

function LogoAmazon() {
  return (
    <svg className={baseLogoClass()} viewBox="0 0 64 24" fill="none" aria-label="Amazon logo">
      <path fill="#E8EAED" d="M9.6 6.5c-3.5 0-6.3 2.9-6.3 6.5s2.8 6.5 6.3 6.5c1.9 0 3.4-.8 4.4-2v1.6h3.8V6.7H14v1.7c-1-1.2-2.5-1.9-4.4-1.9zm.9 9.8c-2.1 0-3.7-1.7-3.7-3.8S8.4 8.7 10.5 8.7s3.7 1.7 3.7 3.8-1.6 3.8-3.7 3.8zM22.7 6.7h3.7v14.4h-3.7zM30.5 6.7h3.6v2c.9-1.5 2.3-2.2 4.3-2.2 3.3 0 5.6 2.3 5.6 6.1v8.5h-3.7v-7.7c0-2.3-1.3-3.6-3.4-3.6-2.1 0-3.4 1.4-3.4 3.6v7.7h-3V6.7z"/>
      <path fill="#E8EAED" d="M58.7 18.5c-4.3 3.3-11.2 4.9-16.7 3.7-.8-.2-1.3-.4-1.3-.4s.5.6 1.2 1c5.7 3.4 15.1-.6 18.2-4 .3-.4-.5-.7-1.4-.3z"/>
      <path fill="#E8EAED" d="M56.3 16.6c-2.2-1.2-5.9-1.6-8.6-1.2-1.5.2-2 .5-2 .5s.6.2 1.6.4c3.5.9 8.2 1.1 10.4.7.6-.1.7-.2.7-.3 0-.1-.8-.1-2.1-.1z"/>
    </svg>
  )
}

function LogoServiceNow() {
  return (
    <svg className={baseLogoClass()} viewBox="0 0 120 24" fill="none" aria-label="ServiceNow logo">
      <circle cx="12" cy="12" r="10" fill="#E8EAED" />
      <rect x="28" y="8" width="18" height="8" rx="4" fill="#E8EAED" />
      <rect x="50" y="8" width="18" height="8" rx="4" fill="#E8EAED" />
      <rect x="72" y="8" width="18" height="8" rx="4" fill="#E8EAED" />
      <rect x="94" y="8" width="18" height="8" rx="4" fill="#E8EAED" />
    </svg>
  )
}
