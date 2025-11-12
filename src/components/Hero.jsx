import { motion } from 'framer-motion'

export default function Hero() {
  const videoSrc = 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4'

  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden text-white">
      {/* Background video */}
      <div className="absolute inset-0" aria-hidden>
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_10%,rgba(59,130,246,0.20),transparent_60%)] mix-blend-screen" />
      </div>

      {/* Foreground */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1]"
           >
              A 4-Year B.Tech in
              <span className="block mt-2 text-white/90">Computer Science & AI</span>
              <span className="block mt-2 text-white/80 font-semibold text-base sm:text-lg md:text-xl tracking-normal">
                built by engineers from Google, Microsoft & Apple
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-base md:text-lg text-white/90 max-w-2xl"
            >
              An AI-first engineering degree that blends rigorous fundamentals, industry mentorship, paid internships, and research opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#admissions-aseat"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Apply via A-SEAT
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 hover:bg-white/15 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors"
              >
                View Curriculum
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 grid w-full grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              {[
                { label: 'Average CTC', value: '25 LPA' },
                { label: 'Hiring Partners', value: '1,300+' },
                { label: 'Internship Rate', value: '100%' },
              ].map((stat) => (
                <div key={stat.label} className="p-5">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-white/90">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
