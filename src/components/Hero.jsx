import { motion } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'

export default function Hero() {
  const youtubeId = 'BxsQaKIZB3Q'
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&loop=1&playlist=${youtubeId}&modestbranding=1&enablejsapi=1`

  const iframeRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const unmute = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    try {
      // Unmute and play using YouTube IFrame Player API via postMessage
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        '*'
      )
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      )
      setMuted(false)
    } catch (e) {
      // no-op
    }
  }, [])

  // Cards content to be shown below the hero, merged from the former Why ASCA section
  const points = [
    {
      value: '200',
      label: 'Seats',
      desc: 'Only 200 students admitted, with merit-based scholarships up to 90%.'
    },
    {
      value: '12',
      label: 'Months Guaranteed Work-Ex',
      desc: 'Paid internships & real engineering work from early semesters - so you graduate with experience, not as a fresher.'
    },
    {
      value: '25 LPA',
      label: 'Avg. Placements',
      desc: 'Outcome-focused career prep with rigorous fundamentals and a project-heavy portfolio.'
    },
    {
      value: '1,300+',
      label: 'Hiring Partners',
      desc: 'Expansive network of product companies, research labs, and high-frequency trading firms.'
    }
  ]

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

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
              B.Tech in CS & AI That Gets You a Job
            </h1>

            <p className="mt-3 text-base sm:text-lg text-white/80">
              Learn from engineers who’ve built real systems at
            </p>

            {/* Logos row - updated to Scaler CDN SVGs */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 opacity-95">
              <img
                src="https://assets-v2.scaler.com/assets/programs/undergrad/svg/google-logo-97e403d0b48d2da1c9d47dc98b6198171ff21048714ba6575c6cadb409053aee.svg.gz"
                alt="Google"
                loading="lazy"
                className="h-7 sm:h-8 w-auto" />
              <img
                src="https://assets-v2.scaler.com/assets/programs/undergrad/svg/microsoft-logo-e807dee90674e40eecefb333c9c5520fd1b6350061677237394015dd7e01f855.svg.gz"
                alt="Microsoft"
                loading="lazy"
                className="h-7 sm:h-8 w-auto" />
              <img
                src="https://assets-v2.scaler.com/assets/programs/undergrad/svg/amazon-logo-a2568f4eba54775b04f3ff133b9208b24f88523a928b35ea6c937f336426f1aa.svg.gz"
                alt="Amazon"
                loading="lazy"
                className="h-7 sm:h-8 w-auto" />
              <img
                src="https://assets-v2.scaler.com/assets/programs/undergrad/svg/meta-logo-f70b8a81c2da4927bea050414bf0c252ec5f8f2ca865eb6a00bb8d5771bce59b.svg.gz"
                alt="Meta"
                loading="lazy"
                className="h-7 sm:h-8 w-auto" />
              <img
                src="https://assets-v2.scaler.com/assets/programs/undergrad/svg/adobe-logo-8e264a414a3687d0fe237cb585973f1b1ac4c26c639684f1aaa7de0ca4301dd9.svg.gz"
                alt="Adobe"
                loading="lazy"
                className="h-7 sm:h-8 w-auto" />
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
                ref={iframeRef}
                className="h-full w-full"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
              />
              {/* subtle top/edge vignette */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.35)_0%,rgba(2,6,23,0)_35%)]" />

              {muted && (
                <button
                  type="button"
                  onClick={unmute}
                  className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Unmute
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Merged cards from Why ASCA: placed below hero content */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {points.map(({ value, label, desc }) => (
              <div key={label} className="relative group">
                {/* Transparent + blur card using background, with silver border */}
                <div className="relative rounded-2xl bg-transparent backdrop-blur-lg border border-[rgba(192,192,192,0.28)] shadow-[0_8px_22px_-14px_rgba(0,0,0,0.45)] overflow-hidden">
                  {/* Subtle silver sheen */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-14 -left-8 h-32 w-32 rounded-full bg-[rgba(192,192,192,0.10)] blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[rgba(255,255,255,0.05)] blur-2xl" />
                  </div>

                  <div className="relative p-4 sm:p-5">
                    <div className="text-white font-extrabold tracking-tight text-2xl sm:text-3xl leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]">{value}</div>
                    <h3 className="mt-1.5 text-white font-semibold text-sm sm:text-[15px] tracking-tight [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]">{label}</h3>
                    <p className="mt-1.5 text-white/85 text-xs sm:text-[13px] leading-5">{desc}</p>
                  </div>

                  {/* Hover: subtle brighten + slight lift */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-[rgba(192,192,192,0.5)] transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade to next section bottom edge */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--ds-bg-darker)] via-[color-mix(in_srgb,var(--ds-bg-darker)_60%,transparent)] to-transparent" />
    </section>
  )
}
