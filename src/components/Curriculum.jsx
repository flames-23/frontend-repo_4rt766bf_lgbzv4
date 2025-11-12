import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Curriculum() {
  const years = [
    {
      year: 'Year 1',
      title: 'Foundations',
      description: 'Build rock-solid fundamentals across math, programming and systems.',
      items: [
        'Programming I-II (Python/CPP)',
        'Math for CS (Discrete + Linear Algebra)',
        'Data Structures',
        'Systems & OS Basics',
        'Version Control & Tooling',
        'AI Primer'
      ]
    },
    {
      year: 'Year 2',
      title: 'Core Computer Science',
      description: 'Master the core pillars that power modern software.',
      items: [
        'Algorithms & Complexity',
        'Databases & SQL',
        'Computer Networks',
        'Operating Systems (Deep Dive)',
        'Compilers (Intro)',
        'Machine Learning Fundamentals'
      ]
    },
    {
      year: 'Year 3',
      title: 'Specialization',
      description: 'Choose depth areas and build production-grade projects.',
      items: [
        'Deep Learning',
        'Distributed Systems',
        'NLP / Computer Vision',
        'MLOps & Deployment',
        'Security & Cryptography',
        'Scalable Backend Systems'
      ]
    },
    {
      year: 'Year 4',
      title: 'Industry Experience',
      description: 'Ship real products, research and capstones with mentors.',
      items: [
        'Co-op / Internship',
        'Research Thesis',
        'Capstone Studio',
        'Open Source & Community',
        'Leadership & Ethics',
        'Career Preparation'
      ]
    }
  ]

  const scrollerRef = useRef(null)
  const [active, setActive] = useState(0)

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

  return (
    <section id="curriculum" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Curriculum Overview</h2>
          <p className="mt-4 text-lg text-gray-700">Swipe through the 4-year journey. Each year contains focused modules you will study.</p>
        </div>

        {/* Year pager */}
        <div className="mx-auto mb-6 flex w-full max-w-2xl items-center justify-center gap-2">
          {years.map((y, i) => (
            <button
              key={y.year}
              onClick={() => scrollTo(i)}
              className={`group relative h-10 flex-1 rounded-full border transition-all ${
                active === i
                  ? 'border-transparent bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow'
                  : 'border-gray-200 bg-white text-gray-800 hover:border-blue-300'
              }`}
            >
              <span className="px-4 text-sm font-semibold leading-10">{y.year}</span>
            </button>
          ))}
        </div>

        {/* Horizontal scroller on md+, vertical stack on mobile */}
        <div
          ref={scrollerRef}
          className="relative -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 md:pb-6 lg:pb-8 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          {years.map((y, idx) => (
            <div
              key={y.year}
              data-slide
              data-index={idx}
              className="snap-center shrink-0 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[72%]"
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-blue-600">{y.year}</div>
                    <h3 className="mt-1 text-2xl sm:text-3xl font-semibold">{y.title}</h3>
                    <p className="mt-2 text-gray-600">{y.description}</p>
                  </div>
                  <div className="hidden sm:block">
                    <span className="inline-flex h-10 items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 px-4 text-sm font-semibold text-white shadow">
                      {idx + 1}/4
                    </span>
                  </div>
                </div>

                {/* Cards grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {y.items.map((it) => (
                    <motion.div
                      key={it}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-blue-50 via-violet-50 to-transparent" />
                      <div className="mb-2 h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 opacity-90 shadow-sm" />
                      <div className="text-base font-semibold text-gray-900">{it}</div>
                      <div className="mt-1 text-sm text-gray-600">Key concepts, labs and projects focused on outcomes.</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA row */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollTo(Math.max(0, idx - 1))}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-blue-300"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => scrollTo(Math.min(years.length - 1, idx + 1))}
                    className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow transition-all hover:shadow-md"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {years.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to ${years[i].year}`}
              onClick={() => scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                active === i ? 'bg-gradient-to-r from-blue-600 to-violet-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
