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
    <section className="relative min-h-[88vh] pt-12 pb-10 overflow-hidden">
      {/* Background: keep dark premium gradient */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_20%_0%,#0b1b3a_0%,#0a1326_45%,#070c1a_100%)]" />
        {/* Ambient gradient ribbons (very subtle) */}
        <motion.div
          initial={{ x: -160, opacity: 0.35 }}
          animate={{ x: 160 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-20 left-0 h-[2px] w-[22rem] -rotate-12 rounded-full bg-gradient-to-r from-sky-400/30 via-cyan-300/20 to-violet-500/30 blur-md"
        />
        <motion.div
          initial={{ x: 140, opacity: 0.35 }}
          animate={{ x: -140 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute bottom-20 right-0 h-[2px] w-[26rem] rotate-8 rounded-full bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-cyan-400/30 blur-md"
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            style={{ width: p.size, height: p.size, left: p.left, top: p.top }}
            initial={{ y: 0, opacity: 0.4 }}
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 7 + (p.id % 5), repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* White/Lite glass card matching A-SEAT vibe */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white via-white to-[#eef2ff] backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),0_30px_80px_-30px_rgba(56,189,248,0.25),0_24px_60px_-24px_rgba(99,102,241,0.22)]"
          >
            {/* Gentle glow flares to match A-SEAT */}
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-300/40 via-blue-400/30 to-violet-400/40 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-violet-400/35 via-fuchsia-400/30 to-cyan-300/35 blur-3xl" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-10 p-6 sm:p-8 lg:p-12">
              {/* Left: text content (dark for readability) */}
              <div className="pr-0 md:pr-4 lg:pr-8">
                {/* Badges: light gray chips */}
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[11px] font-semibold text-[#111]/80 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    AICTE Approved
                  </span>
                  <span className="inline-flex items-center rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[11px] font-semibold text-[#111]/80 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    UGC Recognised
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold leading-tight tracking-tight text-[#111]">
                  B.Tech in CS and AI That Gets You a Job
                </h1>

                {/* One-line subtext */}
                <p className="mt-2 text-[1.05rem] md:text-lg text-[#555] max-w-xl">
                  Learn from engineers who’ve built real systems at:
                </p>

                {/* Company logos (monochrome, consistent) */}
                <div className="mt-3 flex items-center gap-6 sm:gap-7 md:gap-8">
                  <LogoGoogle variant="dark" />
                  <LogoApple variant="dark" />
                  <LogoMicrosoft variant="dark" />
                  <LogoAmazon variant="dark" />
                  <LogoServiceNow variant="dark" />
                </div>

                {/* Supporting line */}
                <p className="mt-4 text-[0.98rem] md:text-[1.05rem] text-[#555] max-w-xl">
                  No outdated coursework. Only real-world engineering taught by real practitioners.
                </p>

                {/* CTA (match A-SEAT gradient pill) */}
                <div className="mt-6">
                  <a
                    href="#admissions-aseat"
                    className="group relative inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-[15px] font-semibold text-white transition focus:outline-none"
                  >
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-95 transition-opacity group-hover:opacity-100" />
                    <span className="absolute inset-0 rounded-2xl ring-1 ring-white/50" />
                    <span className="relative z-10">Apply via A-SEAT</span>
                    <span aria-hidden className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-violet-500/40 blur-2xl" />
                  </a>
                </div>
              </div>

              {/* Right: visual block with autoplay looping video */}
              <div className="relative w-full">
                <div className="relative aspect-[16/9] w-full max-w-[780px] lg:max-w-[860px] overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.12)] bg-white">
                  <video
                    className="h-full w-full object-cover"
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={posterSrc}
                  />
                  {/* Soft inner vignette to seat it in the card */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0)_30%),linear-gradient(0deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_45%)]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom vignette to keep it premium and contained */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070c1a] via-[#070c1a]/60 to-transparent" />
    </section>
  )
}

// --- Logo SVGs (monochrome with subtle glow on dark; darker for light cards) ---
function baseLogoClass() {
  return 'h-8 w-auto drop-shadow-[0_0_6px_rgba(2,6,23,0.08)]'
}

function LogoGoogle({ variant = 'dark' }) {
  const fill = variant === 'dark' ? '#1F2937' : '#E8EAED'
  return (
    <svg className={baseLogoClass()} viewBox="0 0 48 48" fill="none" aria-label="Google logo">
      <path fill={fill} d="M43.6 24.5c0-1.5-.1-3-.4-4.4H24v8.4h11.1c-.5 2.8-2.1 5.1-4.4 6.7v5.6h7.1c4.1-3.8 5.8-9.4 5.8-16.3z"/>
      <path fill={fill} d="M24 44c5.4 0 9.9-1.8 13.2-4.9l-7.1-5.6c-2 1.4-4.6 2.3-6.1 2.3-4.7 0-8.6-3.2-10-7.5H6.6v5.9C9.9 39.9 16.3 44 24 44z"/>
      <path fill={fill} d="M14 28.3c-.3-1-.5-2.1-.5-3.3s.2-2.3.5-3.3v-5.9H6.6C5 18.1 4 21 4 25s1 6.9 2.6 9.2L14 28.3z"/>
      <path fill={fill} d="M24 14.2c2.9 0 5.6 1 7.6 3l5.7-5.7C33.9 8.2 29.4 6 24 6 16.3 6 9.9 10.1 6.6 16.8L14 22.1c1.4-4.3 5.3-7.9 10-7.9z"/>
    </svg>
  )
}

function LogoApple({ variant = 'dark' }) {
  const fill = variant === 'dark' ? '#1F2937' : '#E8EAED'
  return (
    <svg className={baseLogoClass()} viewBox="0 0 48 48" fill={fill} aria-label="Apple logo">
      <path d="M32.8 24.4c0-4.2 3.5-6.4 3.6-6.5-2-2.8-5.1-3.2-6.2-3.2-2.6-.3-5.1 1.5-6.4 1.5-1.3 0-3.4-1.5-5.6-1.5-2.9 0-5.6 1.7-7.1 4.3-3.1 5.4-.8 13.4 2.2 17.8 1.5 2.2 3.3 4.6 5.6 4.5 2.2-.1 3.1-1.4 5.9-1.4 2.8 0 3.6 1.4 5.9 1.4 2.4 0 3.9-2.2 5.4-4.4 1.7-2.4 2.4-4.7 2.4-4.8-.1 0-4.8-1.8-4.8-7.7z"/>
      <path d="M28.9 11.7c1.2-1.5 2-3.6 1.8-5.7-1.8.1-4 1.2-5.3 2.7-1.2 1.4-2.1 3.5-1.9 5.5 2 .1 4.1-1.1 5.4-2.5z"/>
    </svg>
  )
}

function LogoMicrosoft({ variant = 'dark' }) {
  const fill = variant === 'dark' ? '#1F2937' : '#E8EAED'
  return (
    <svg className={baseLogoClass()} viewBox="0 0 48 48" aria-label="Microsoft logo">
      <rect x="6" y="6" width="16" height="16" fill={fill}/>
      <rect x="26" y="6" width="16" height="16" fill={fill}/>
      <rect x="6" y="26" width="16" height="16" fill={fill}/>
      <rect x="26" y="26" width="16" height="16" fill={fill}/>
    </svg>
  )
}

function LogoAmazon({ variant = 'dark' }) {
  const fill = variant === 'dark' ? '#1F2937' : '#E8EAED'
  return (
    <svg className={baseLogoClass()} viewBox="0 0 64 24" fill="none" aria-label="Amazon logo">
      <path fill={fill} d="M9.6 6.5c-3.5 0-6.3 2.9-6.3 6.5s2.8 6.5 6.3 6.5c1.9 0 3.4-.8 4.4-2v1.6h3.8V6.7H14v1.7c-1-1.2-2.5-1.9-4.4-1.9zm.9 9.8c-2.1 0-3.7-1.7-3.7-3.8S8.4 8.7 10.5 8.7s3.7 1.7 3.7 3.8-1.6 3.8-3.7 3.8zM22.7 6.7h3.7v14.4h-3.7zM30.5 6.7h3.6v2c.9-1.5 2.3-2.2 4.3-2.2 3.3 0 5.6 2.3 5.6 6.1v8.5h-3.7v-7.7c0-2.3-1.3-3.6-3.4-3.6-2.1 0-3.4 1.4-3.4 3.6v7.7h-3V6.7z"/>
      <path fill={fill} d="M58.7 18.5c-4.3 3.3-11.2 4.9-16.7 3.7-.8-.2-1.3-.4-1.3-.4s.5.6 1.2 1c5.7 3.4 15.1-.6 18.2-4 .3-.4-.5-.7-1.4-.3z"/>
      <path fill={fill} d="M56.3 16.6c-2.2-1.2-5.9-1.6-8.6-1.2-1.5.2-2 .5-2 .5s.6.2 1.6.4c3.5.9 8.2 1.1 10.4.7.6-.1.7-.2.7-.3 0-.1-.8-.1-2.1-.1z"/>
    </svg>
  )
}

function LogoServiceNow({ variant = 'dark' }) {
  const fill = variant === 'dark' ? '#1F2937' : '#E8EAED'
  return (
    <svg className={baseLogoClass()} viewBox="0 0 120 24" fill="none" aria-label="ServiceNow logo">
      <circle cx="12" cy="12" r="10" fill={fill} />
      <rect x="28" y="8" width="18" height="8" rx="4" fill={fill} />
      <rect x="50" y="8" width="18" height="8" rx="4" fill={fill} />
      <rect x="72" y="8" width="18" height="8" rx="4" fill={fill} />
      <rect x="94" y="8" width="18" height="8" rx="4" fill={fill} />
    </svg>
  )
}
