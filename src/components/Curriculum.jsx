import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Wrench, Brain, Briefcase, Layers, Sparkles } from 'lucide-react'

export default function Curriculum() {
  // Updated 4-year map per brief
  const years = [
    {
      year: 'Year 1',
      title: 'Foundations',
      caption: 'Math, programming, and systems fundamentals to build unshakable depth.',
      icon: Rocket,
      items: [
        'Programming I–II (Python/C++)',
        'Math for CS (Discrete + Linear Algebra)',
        'Data Structures',
        'Computer Systems & OS Basics',
        'Version Control & Tooling',
        'AI Primer'
      ]
    },
    {
      year: 'Year 2',
      title: 'Industry Readiness',
      caption: 'Core CS + product engineering skills aligned to real teams.',
      icon: Wrench,
      items: [
        'Algorithms & Complexity',
        'Databases & SQL',
        'Computer Networks',
        'Operating Systems (Deep Dive)',
        'Backend Engineering',
        'DevOps Foundations'
      ]
    },
    {
      year: 'Year 3',
      title: 'Specialization',
      caption: 'Choose depth in AI/Systems and ship production-grade projects.',
      icon: Brain,
      items: [
        'Deep Learning',
        'Distributed Systems',
        'NLP / Computer Vision',
        'MLOps & Deployment',
        'Security & Cryptography',
        'Scalable Backends'
      ]
    },
    {
      year: 'Year 4',
      title: 'Placements',
      caption: 'Capstones, internships, and interview prep to land roles you love.',
      icon: Briefcase,
      items: [
        'Co-op / Internship',
        'Capstone Studio',
        'Open Source & Community',
        'Leadership & Ethics',
        'Interview Prep',
        'Career Launch'
      ]
    }
  ]

  const scrollerRef = useRef(null)
  const [active, setActive] = useState(0)
  const [snapStrict, setSnapStrict] = useState(true)

  useEffect(() => {
    const container = scrollerRef.current
    if (!container) return

    const slides = Array.from(container.querySelectorAll('[data-slide]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const idx = Number(visible.target.getAttribute('data-index'))
          setActive(idx)
        }
      },
      { root: container, threshold: [0.3, 0.5, 0.7] }
    )

    slides.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (idx) => {
    const container = scrollerRef.current
    if (!container) return
    const el = container.querySelector(`[data-index="${idx}"]`)
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  const sectionGlow = (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Ambient gradient glows */}
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.3)_0%,rgba(37,99,235,0)_60%)] blur-2xl" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0%,rgba(139,92,246,0)_60%)] blur-2xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-[36rem] -translate-x-1/2 rounded-[999px] bg-[linear-gradient(120deg,rgba(59,130,246,0.13),rgba(16,185,129,0.06),rgba(139,92,246,0.13))] opacity-60 blur-2xl" />
      </div>
    </>
  )

  return (
    <section id="curriculum" className="relative py-16 sm:py-20 lg:py-24">
      {sectionGlow}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Curriculum Overview
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-3 text-base text-gray-300"
          >
            Your 4-year journey across fundamentals, real-world engineering, depth, and placements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[236px,1fr] gap-5">
          {/* Sticky mini-year sidebar (desktop) */}
          <div className="hidden md:block">
            <div className="sticky top-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300/90">YEARS</span>
                <button
                  onClick={() => setSnapStrict((s) => !s)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200 transition-colors hover:border-cyan-300/40"
                >
                  {snapStrict ? 'Snap: On' : 'Snap: Off'}
                </button>
              </div>
              <ul className="space-y-2">
                {years.map((y, i) => (
                  <li key={y.year}>
                    <button
                      onClick={() => scrollTo(i)}
                      className={`group w-full rounded-xl px-3 py-2 text-left transition-all ${
                        active === i
                          ? 'bg-gradient-to-r from-sky-500/20 via-cyan-400/20 to-violet-500/20 text-white shadow-[0_8px_30px_rgb(32,64,128,0.12)]'
                          : 'hover:bg-white/5 text-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${active === i ? 'bg-gradient-to-r from-sky-400 to-violet-400' : 'bg-white/20 group-hover:bg-cyan-300/70'}`} />
                        <span className="text-sm font-semibold">{y.year}</span>
                      </div>
                      <div className={`text-xs ${active === i ? 'text-white/80' : 'text-gray-400'}`}>{y.title}</div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scroller */}
          <div>
            <div
              ref={scrollerRef}
              className={`${snapStrict ? 'snap-x snap-mandatory' : 'snap-x snap-proximity'} relative -mx-3.5 flex gap-5 overflow-x-auto px-3.5 pb-4 md:pb-6 lg:pb-6 [scrollbar-width:none] [-ms-overflow-style:none]`}
            >
              <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
              {years.map((y, idx) => {
                const Icon = y.icon || Layers
                return (
                  <div
                    key={y.year}
                    data-slide
                    data-index={idx}
                    className={`snap-center shrink-0 w-[88%] sm:w-[82%] md:w-[76%] lg:w-[68%] ${snapStrict ? '[scroll-snap-stop:always]' : ''}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ amount: 0.3, once: true }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                    >
                      {/* Gradient outline glow */}
                      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 [mask-image:linear-gradient(white,transparent)]" />
                      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-40 blur-md" style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.25), rgba(139,92,246,0.25))' }} />

                      <div className="relative z-10 flex items-start justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-200/90">
                            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                            {y.year}
                          </div>
                          <h3 className="mt-2 text-2xl sm:text-3xl font-semibold">
                            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                              {y.title}
                            </span>
                          </h3>
                          <p className="mt-2 max-w-2xl text-gray-300">{y.caption}</p>
                        </div>
                        <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 via-cyan-400/30 to-violet-500/30 text-white shadow-inner shadow-cyan-500/20 ring-1 ring-white/10">
                          <Icon className="h-5 w-5 text-cyan-200" />
                        </div>
                      </div>

                      {/* Cards grid */}
                      <div className="relative mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {y.items.map((it) => (
                          <motion.div
                            key={it}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_8px_22px_rgba(0,0,0,0.35)] backdrop-blur-lg transition-all hover:border-cyan-300/30 hover:shadow-[0_12px_44px_rgba(59,130,246,0.15)]"
                          >
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(120px_60px_at_10%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(120px_60px_at_110%_120%,rgba(139,92,246,0.25),transparent)]" />
                            <div className="mb-1.5 flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                              <span className="text-[15px] font-semibold text-white">{it}</span>
                            </div>
                            <div className="text-sm text-gray-300">Labs and projects focused on real outcomes.</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA row */}
                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => scrollTo(Math.max(0, idx - 1))}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-100 transition-colors hover:border-cyan-300/40"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => scrollTo(Math.min(years.length - 1, idx + 1))}
                          className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow transition-all hover:shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
                        >
                          Next
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>

            {/* Dots indicator (mobile/tablet) */}
            <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
              {years.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to ${years[i].year}`}
                  onClick={() => scrollTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    active === i
                      ? 'bg-gradient-to-r from-sky-400 to-violet-400 w-6'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
