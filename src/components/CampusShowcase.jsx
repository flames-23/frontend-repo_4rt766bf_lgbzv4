import { useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

function cx(...classes){
  return classes.filter(Boolean).join(' ')
}

function LightSlideCard({ img, title, copy }){
  return (
    <motion.div
      className="group relative w-[92vw] sm:w-[84vw] md:w-[74vw] lg:w-[60vw] xl:w-[50vw] overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-2xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={{ scale: 1.01 }}
    >
      {/* 80% visual, 20% text below */}
      <div className="flex h-full flex-col">
        <div className="relative flex-[4]">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {/* ultra subtle film overlay for cinematic feel, still light */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
        </div>
        <div className="flex-[1]">
          <div className="px-5 sm:px-6 py-4">
            <h3 className="text-slate-900 text-lg sm:text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-slate-600 text-sm leading-relaxed line-clamp-2">{copy}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function LightCinematicCarousel(){
  const scrollerRef = useRef(null)

  const slides = [
    {
      title: 'Sunlit Quads & Morning Runs',
      copy: 'Golden hour across tree-lined paths, perfect for a serene start before studios open.',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Studios That Inspire',
      copy: 'Collaborative maker bays and AI pods, bright and airy with all-day access.',
      img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Weekend Club Scenes',
      copy: 'Hackathons, music circles, and coffee-fueled brainstorms spilling into the lawns.',
      img: 'https://images.unsplash.com/photo-1515165562835-c3b8c8c7a3b2?q=80&w=2000&auto=format&fit=crop'
    },
  ]

  const scrollBy = (delta) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Controls */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-2 sm:pl-4">
        <button
          onClick={() => scrollBy(-600)}
          className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200 shadow hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label="Previous"
        >
          ‹
        </button>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-2 sm:pr-4">
        <button
          onClick={() => scrollBy(600)}
          className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200 shadow hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Strip */}
      <div
        ref={scrollerRef}
        className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 sm:gap-6 overflow-x-auto px-4 py-2"
      >
        {slides.map((s, idx) => (
          <div key={idx} className="snap-center shrink-0">
            <LightSlideCard img={s.img} title={s.title} copy={s.copy} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CampusShowcase() {
  const items = [
    {
      title: 'Innovation Hubs',
      copy: '24/7 makerspaces, AI studios, and robotics bays with expert mentors.',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Green, Smart Campus',
      copy: 'Solar canopies, autonomous shuttles, and real-time sustainability dashboards.',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Global Community',
      copy: 'Clubs, hackathons, and exchange programs across leading universities.',
      img: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  const cardBase =
    'group relative flex flex-col overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-slate-200/70 shadow-sm transition duration-300 hover:shadow-md'

  return (
    <section id="campus" className="py-14 bg-[#F5F7FA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          theme="light"
          size="md"
          title="Campus Life"
          subtitle="Cinematic glimpses of everyday life — bright, modern, and thoughtfully designed."
          className="mb-8"
        />

        {/* Light cinematic carousel (80% image / 20% text) */}
        <div className="mt-2">
          <LightCinematicCarousel />
        </div>

        {/* Compact grid below for quick highlights */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={cardBase}
            >
              {/* Media */}
              <div className="relative">
                <img
                  src={card.img}
                  alt=""
                  className="h-36 w-full object-cover"
                  loading="lazy"
                />
                {/* Subtle overlay on hover for polish */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{card.copy}</p>
                {/* Compact footer spacing to keep cards tight */}
                <div className="mt-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
