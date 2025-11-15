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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Hear From Our Founder"
          align="center"
          theme="light"
          size="md"
          className="mb-5 sm:mb-6"
        />

        {/* Bezel-less, clean video (no peek, no glass, no vignettes) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative aspect-video w-full overflow-hidden rounded-xl bg-black"
        >
          <iframe
            ref={iframeRef}
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title="Hear from our founder"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
          />

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
