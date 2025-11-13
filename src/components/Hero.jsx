import { motion } from 'framer-motion'

export default function Hero() {
  const youtubeId = 'Rguj5vn18JI'
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&loop=1&playlist=${youtubeId}&modestbranding=1&enablejsapi=1`

  return (
    <section className="relative section-dark overflow-hidden">
      {/* Full-width dark gradient background overlay (blue → deep navy → black) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(79,140,255,0.45),transparent_50%),radial-gradient(900px_500px_at_110%_10%,rgba(154,111,255,0.25),transparent_55%),linear-gradient(180deg,#0b1226_0%,#070b14_50%,#030712_100%)]" />

      {/* Subtle moving ribbons to keep premium vibe */}
      <div aria-hidden className="absolute inset-0">
        <motion.div
          initial={{ x: -120, opacity: 0.35 }}
          animate={{ x: 120 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-24 left-0 h-px w-[22rem] -rotate-12 rounded-full ribbon-blue blur-sm"
        />
        <motion.div
          initial={{ x: 120, opacity: 0.3 }}
          animate={{ x: -120 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute bottom-24 right-0 h-px w-[26rem] rotate-6 rounded-full ribbon-violet blur-sm"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: Heading, subheading, logos, CTAs */}
          <div className="max-w-2xl">
            {/* Small credibility badges (optional) */}
            <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px]">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 font-semibold text-white/80 backdrop-blur-sm">AICTE Approved</span>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 font-semibold text-white/80 backdrop-blur-sm">UGC Recognised</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] to-[#9A6FFF]">
              B.Tech in CS & AI That Gets You a Job
            </h1>

            <p className="mt-3 text-base sm:text-lg text-white/80">
              Learn from engineers who’ve built real systems at
            </p>

            {/* Logos row */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 opacity-95">
              <LogoGoogle variant="light" />
              <LogoApple variant="light" />
              <LogoMicrosoft variant="light" />
              <LogoAmazon variant="light" />
              <LogoServiceNow variant="light" />
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#admissions-aseat"
                className="relative inline-flex items-center justify-center rounded-full px-6 sm:px-7 py-3 text-sm sm:text-[15px] font-semibold text-white transition shadow-[0_10px_30px_-10px_rgba(79,140,255,0.6)]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#9A6FFF] opacity-95 transition-opacity" />
                <span className="relative z-10">Apply via A-SEAT</span>
                <span aria-hidden className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#9A6FFF] blur-2xl opacity-30" />
              </a>

              <a
                href="#download-brochure"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 sm:px-7 py-3 text-sm sm:text-[15px] font-semibold text-white/90 backdrop-blur-md hover:bg-white/10 transition"
              >
                Download Brochure
              </a>
            </div>

            <div className="mt-3 text-xs text-white/70">
              Admissions open for 2025 batch.
            </div>
          </div>

          {/* Right: YouTube embed with rounded rectangle and thin glow */}
          <div className="relative w-full">
            <div className="relative aspect-[16/9] w-full max-w-[800px] ml-auto overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_-30px_rgba(79,140,255,0.35),0_24px_60px_-24px_rgba(154,111,255,0.25)]">
              <iframe
                className="h-full w-full"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
              {/* subtle top/edge vignette */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.35)_0%,rgba(2,6,23,0)_35%)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Fade to next section bottom edge */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--ds-bg-darker)] via-[color-mix(in_srgb,var(--ds-bg-darker)_60%,transparent)] to-transparent" />
    </section>
  )
}

// Logos remain monochrome; adapt to light/dark via variant
function baseLogoClass() {
  return 'h-8 w-auto opacity-90'
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
