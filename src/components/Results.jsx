import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const testimonials = [
  {
    id: '1',
    videoId: 'dQw4w9WgXcQ',
    name: 'Aarav Mehta',
    company: 'Amazon',
    companyLogo: 'https://logo.clearbit.com/amazon.com',
    roleType: 'Full-time',
    compensation: '₹32 LPA',
    quote: 'From campus to my dream job at Amazon.'
  },
  {
    id: '2',
    videoId: 'ysz5S6PUM-U',
    name: 'Ishika Rao',
    company: 'Google',
    companyLogo: 'https://logo.clearbit.com/google.com',
    roleType: 'Internship Stipend',
    compensation: '₹80,000 / month',
    quote: 'The projects and mentorship changed everything.'
  },
  {
    id: '3',
    videoId: 'ScMzIvxBSi4',
    name: 'Ritvik Sharma',
    company: 'Microsoft',
    companyLogo: 'https://logo.clearbit.com/microsoft.com',
    roleType: 'Full-time',
    compensation: '₹28 LPA',
    quote: 'Clear roadmap + relentless support = offers.'
  },
  {
    id: '4',
    videoId: '9bZkp7q19f0',
    name: 'Neha Kulkarni',
    company: 'Uber',
    companyLogo: 'https://logo.clearbit.com/uber.com',
    roleType: 'Internship Stipend',
    compensation: '₹1,00,000 / month',
    quote: 'I learned to ship, not just study.'
  }
]

export default function Results() {
  const [current, setCurrent] = useState(0)
  const [openVideo, setOpenVideo] = useState(null)
  const containerRef = useRef(null)

  const items = useMemo(() => testimonials, [])

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [items.length])

  // Scroll effect when current changes
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const child = el.children[current]
    if (child) {
      const left = child.offsetLeft - el.clientWidth / 2 + child.clientWidth / 2
      el.scrollTo({ left, behavior: 'smooth' })
    }
  }, [current])

  const next = () => setCurrent((c) => (c + 1) % items.length)
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length)

  return (
    <section className="relative overflow-hidden">
      {/* Light background gradient to contrast dark sections */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-slate-100" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-[#111827]">
            Results That Speak for Themselves.
          </h2>
          <p className="mt-4 text-[#4B5563] text-base sm:text-lg">
            Hear from our students who turned their B.Tech into real-world success stories.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-10 sm:mt-12">
          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-lg backdrop-blur-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-lg backdrop-blur-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>

          <div
            ref={containerRef}
            className="scrollbar-hide relative mx-[-1rem] flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 py-2"
          >
            {items.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * idx }}
                className="group relative w-[85%] sm:w-[360px] lg:w-[400px] shrink-0 snap-center"
              >
                {/* Panel card */}
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  {/* Thumbnail */}
                  <button
                    onClick={() => setOpenVideo(t.videoId)}
                    className="relative block w-full"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`}
                      alt={`${t.name} testimonial thumbnail`}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                    {/* Play overlay */}
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="relative grid place-items-center h-16 w-16 rounded-full bg-white/90 text-slate-800 shadow-xl ring-1 ring-slate-200 transition group-hover:scale-105">
                        <Play className="h-6 w-6" fill="currentColor" />
                      </span>
                    </span>
                    {/* subtle top highlight */}
                    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/60 to-transparent" />
                  </button>

                  {/* Meta */}
                  <div className="p-5">
                    {/* Student name as heading */}
                    <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                    {/* Subheading for stipend/full-time salary */}
                    <div className="mt-0.5 text-sm text-slate-700">{t.roleType}: <span className="font-medium">{t.compensation}</span></div>

                    {/* Company logo (no text names) */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={t.companyLogo}
                          alt={`${t.company} logo`}
                          className="h-6 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="mt-3 text-slate-600 text-sm">“{t.quote}”</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setOpenVideo(null)}
          >
            <div className="absolute inset-0 p-4 sm:p-8 grid place-items-center" onClick={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${openVideo}?autoplay=1&rel=0&modestbranding=1`}
                    title="Student Testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
