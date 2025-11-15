import { motion } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import SectionHeading from './SectionHeading.jsx'

export default function JobGuarantee() {
  const youtubeId = '-cn-lOA21Og'
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&loop=1&playlist=${youtubeId}&modestbranding=1&enablejsapi=1`

  const iframeRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const unmute = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    try {
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

  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div aria-hidden className="absolute -top-24 left-1/2 h-56 w-[130%] -translate-x-1/2 rotate-2 rounded-full bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-violet-600/5" />
        <div aria-hidden className="absolute top-1/2 left-1/2 h-52 w-[110%] -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-full bg-gradient-to-r from-violet-600/5 via-fuchsia-500/5 to-cyan-400/5" />
        <div aria-hidden className="absolute -bottom-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rotate-1 rounded-full bg-gradient-to-r from-cyan-400/5 via-teal-400/5 to-blue-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact heading */}
        <SectionHeading
          title="Hear From Our Founder"
          align="center"
          theme="light"
          size="md"
          className="mb-5 sm:mb-6"
        />

        {/* Compact glass card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 lg:p-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_-28px_rgba(2,6,23,0.25)]"
        >
          {/* Gentle flares */}
          <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-violet-500/20 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-500/15 to-cyan-400/20 blur-2xl" />

          {/* Content */}
          <div className="relative">
            <div className="group relative">
              <div className="absolute -inset-1.5 -z-10 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-violet-500/15 opacity-50 blur-xl" aria-hidden />
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-300/50 via-blue-300/40 to-violet-300/50">
                <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-[0_16px_44px_-22px_rgba(2,6,23,0.25)]">
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/70 to-transparent" />

                  <div className="aspect-video">
                    <iframe
                      ref={iframeRef}
                      className="h-full w-full"
                      src={embedUrl}
                      title="Hear from our founder"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
                    />

                    {muted && (
                      <button
                        type="button"
                        onClick={unmute}
                        className="absolute bottom-2.5 right-2.5 z-20 inline-flex items-center rounded-full px-2.5 py-1.5 text-[11px] font-semibold text-white bg-slate-900/80 hover:bg-slate-900/90 backdrop-blur-sm shadow-sm ring-1 ring-white/10"
                      >
                        Unmute
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
