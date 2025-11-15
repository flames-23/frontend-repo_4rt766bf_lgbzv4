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
      {/* Subtle ambient background (kept ultra-soft, no colored frame around video) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div aria-hidden className="absolute -top-24 left-1/2 h-56 w-[130%] -translate-x-1/2 rotate-2 rounded-full bg-gradient-to-r from-slate-300/10 via-slate-200/10 to-slate-300/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          title="Hear From Our Founder"
          align="center"
          theme="light"
          size="md"
          className="mb-5 sm:mb-6"
        />

        {/* Clean, frameless glass block with "peeking" video */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-3xl bg-white/40 backdrop-blur-xl ring-1 ring-slate-200/60 shadow-[0_20px_60px_-28px_rgba(2,6,23,0.20)] p-0"
        >
          {/* Viewport that gently crops the video so it feels like it's peeping out */}
          <div className="relative overflow-hidden rounded-2xl m-2 sm:m-3 lg:m-4 aspect-video">
            {/* The iframe is slightly oversized and offset to create the peek illusion without any colored frame */}
            <div className="absolute -inset-4 sm:-inset-5 lg:-inset-6">
              <iframe
                ref={iframeRef}
                className="h-full w-full"
                src={embedUrl}
                title="Hear from our founder"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
              />
            </div>

            {/* Subtle edge vignettes/reflections for classy glassy feel (neutral, no blue/purple) */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/60 via-white/20 to-transparent" />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
          </div>

          {/* Tiny frost ring to enhance glass without becoming a frame */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/30 mix-blend-normal" />

          {muted && (
            <button
              type="button"
              onClick={unmute}
              className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-white bg-slate-900/80 hover:bg-slate-900/90 backdrop-blur-sm shadow-sm ring-1 ring-white/10"
            >
              Unmute
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
