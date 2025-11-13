import { motion } from 'framer-motion'

export default function JobGuarantee() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Ambient background kept subtle so focus stays on the card */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div aria-hidden className="absolute -top-24 left-1/2 h-72 w-[140%] -translate-x-1/2 rotate-2 rounded-full bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-violet-600/5" />
        <div aria-hidden className="absolute top-1/2 left-1/2 h-64 w-[120%] -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-full bg-gradient-to-r from-violet-600/5 via-fuchsia-500/5 to-cyan-400/5" />
        <div aria-hidden className="absolute -bottom-24 left-1/2 h-80 w-[130%] -translate-x-1/2 rotate-1 rounded-full bg-gradient-to-r from-cyan-400/5 via-teal-400/5 to-blue-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* White glass-style card (matches A-SEAT style) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_-30px_rgba(56,189,248,0.25)]"
        >
          {/* Light gradient flares for premium glow */}
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/25 to-violet-500/30 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-500/20 to-cyan-400/25 blur-2xl" />

          {/* Content */}
          <div className="relative">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900/95">
              Hear From Our Founder
            </h2>

            {/* Video container */}
            <div className="mt-6 sm:mt-8">
              {/* Gradient edge and glow */}
              <div className="group relative">
                <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 opacity-40 blur-2xl" aria-hidden />
                <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-cyan-300/60 via-blue-300/60 to-violet-300/60">
                  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/90 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.25)]">
                    {/* Soft top reflection */}
                    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />

                    <div className="aspect-video">
                      <video
                        className="h-full w-full object-cover"
                        src="https://assets.mixkit.co/videos/preview/mixkit-man-typing-fast-1126-large.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
                      />
                    </div>
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
