import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

function cx(...classes){
  return classes.filter(Boolean).join(' ')
}

function Spotlight({ className }){
  return (
    <div className={cx('pointer-events-none absolute inset-0', className)}>
      <div className="absolute -inset-[20%] rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)] blur-2xl" />
    </div>
  )
}

function Vignette(){
  return (
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.5))]" />
  )
}

function HighlightCard({ title, tag }){
  return (
    <motion.div
      className="group relative aspect-[16/10] md:aspect-[16/7] w-[92vw] sm:w-[84vw] md:w-[74vw] lg:w-[60vw] xl:w-[50vw] overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-white/10 shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background visual placeholder */}
      <div className="absolute inset-0">
        <img
          src={`https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop`}
          alt="achievement background"
          loading="lazy"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.35),rgba(0,0,0,0.85))]" />
        <Spotlight />
        <Vignette />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-end p-5 sm:p-8">
        <div>
          {tag ? (
            <div className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/15">
              {tag}
            </div>
          ) : null}
          <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.25)]">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

function HighlightCarousel(){
  const scrollerRef = useRef(null)

  const cards = [
    { title: 'Team Represented India at Meta HackerCup', tag: 'Legendary' },
    { title: 'ICPC → World Finals', tag: 'World Stage' },
    { title: '30/50 in Meta HackerCup mentored by MKV sir', tag: 'Mentored' },
    { title: 'International Research Internship in Year 1', tag: 'Global' },
    { title: 'UberSTAR & Google STEP wins', tag: 'Early Wins' },
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
          className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Previous"
        >
          ‹
        </button>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-2 sm:pr-4">
        <button
          onClick={() => scrollBy(600)}
          className="pointer-events-auto hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
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
        {cards.map((c, idx) => (
          <div key={idx} className="snap-center shrink-0">
            <HighlightCard title={c.title} tag={c.tag} />
          </div>
        ))}
      </div>
    </div>
  )
}

// New GrowthX-style small achievement card
function SmallAchievementCard({ tag, img, meta }){
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 bg-zinc-900"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      {/* Full-bleed image */}
      <img
        src={img}
        alt={tag}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:brightness-110"
      />
      {/* Bottom-up gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      {/* Subtle spotlight for premium feel */}
      <Spotlight className="opacity-40" />
      <Vignette />
      {/* Text anchored bottom-left */}
      <div className="relative z-10 flex h-full items-end">
        <div className="p-4 sm:p-5">
          <div className="text-white font-extrabold tracking-tight text-lg sm:text-xl">
            {tag}
          </div>
          {meta ? (
            <div className="mt-1 text-white/75 text-xs sm:text-sm">
              {meta}
            </div>
          ) : null}
        </div>
      </div>
      {/* Maintain vertical poster proportion */}
      <div className="invisible aspect-[2/3] w-full" aria-hidden="true" />
    </motion.div>
  )
}

function AchievementGrid(){
  // Replace the mixed media grid with GrowthX-style vertical posters only
  const achievements = [
    { tag: 'HFT ₹4.5 LPA/month', img: 'https://images.unsplash.com/photo-1551281044-8b89e4fd7f4b?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'FAANG', img: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'GSoC', img: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'ICPC → WF', img: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'UberSTAR', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'Google STEP', img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'International offers', img: 'https://images.unsplash.com/photo-1529070960185-6c75a0c6a743?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'Smart India Hackathon', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'Meta HackerCup stories', img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {achievements.map((a, idx) => (
        <SmallAchievementCard key={idx} tag={a.tag} img={a.img} meta={a.meta} />
      ))}
    </div>
  )
}

export default function CinematicHall(){
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0C10]">
      {/* Full-bleed background with subtle motion noise */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,69,109,0.25),rgba(11,12,16,1)_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-plus-lighter" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
        <Vignette />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <SectionHeading
          title="Stories That Made Us Proud."
          subtitle="A hall of fame crafted by grit, mentorship, and world‑stage wins."
          align="center"
          theme="dark"
          size="lg"
        />

        {/* Cinematic Highlight Strip → DO NOT MODIFY per request */}
        <div className="mt-8 sm:mt-12 lg:mt-14">
          <HighlightCarousel />
        </div>

        {/* GrowthX-style Achievements Grid (3×N desktop, 2×N tablet, 1×N mobile) */}
        <div className="mt-10 sm:mt-16 lg:mt-20">
          <AchievementGrid />
        </div>
      </div>
    </section>
  )
}
