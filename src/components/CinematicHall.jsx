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

function VideoTile({ title, src }){
  return (
    <motion.div
      className="group relative aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(255,255,255,0)_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/60" />
      <Vignette />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80 ring-1 ring-white/15">
          {title}
        </div>
      </div>
    </motion.div>
  )
}

function PosterTile({ title, img }){
  return (
    <motion.div
      className="group relative aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={{ scale: 1.01 }}
    >
      <img src={img} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6),rgba(0,0,0,0.25),rgba(0,0,0,0.75))]" />
      <Spotlight />
      <Vignette />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80 ring-1 ring-white/15">
          {title}
        </div>
      </div>
    </motion.div>
  )
}

function AchievementGrid(){
  const videos = [
    { title: 'HFT ₹4.5 LPA/month', src: 'https://images.unsplash.com/photo-1585752475238-52db8826b2f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIRlQlMjAlRTIlODIlQjk0LjUlMjBMUEElMkZtb250aHxlbnwwfDB8fHwxNzYzMTE2NDQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'FAANG', src: 'https://images.unsplash.com/photo-1585752475238-52db8826b2f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIRlQlMjAlRTIlODIlQjk0LjUlMjBMUEElMkZtb250aHxlbnwwfDB8fHwxNzYzMTE2NDQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'GSoC', src: 'https://images.unsplash.com/photo-1585752475238-52db8826b2f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIRlQlMjAlRTIlODIlQjk0LjUlMjBMUEElMkZtb250aHxlbnwwfDB8fHwxNzYzMTE2NDQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'ICPC → WF', src: 'https://images.unsplash.com/photo-1585752475238-52db8826b2f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIRlQlMjAlRTIlODIlQjk0LjUlMjBMUEElMkZtb250aHxlbnwwfDB8fHwxNzYzMTE2NDQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'UberSTAR', src: 'https://images.unsplash.com/photo-1585752475238-52db8826b2f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIRlQlMjAlRTIlODIlQjk0LjUlMjBMUEElMkZtb250aHxlbnwwfDB8fHwxNzYzMTE2NDQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Google STEP', src: 'https://images.unsplash.com/photo-1585752475238-52db8826b2f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIRlQlMjAlRTIlODIlQjk0LjUlMjBMUEElMkZtb250aHxlbnwwfDB8fHwxNzYzMTE2NDQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'International offers', src: 'https://videos.pexels.com/video-files/855272/855272-hd_1920_1080_24fps.mp4' },
    { title: 'Smart India Hackathon', src: 'https://images.unsplash.com/photo-1744131290924-1d2fcbd59a17?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMxMTY0NDZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Meta HackerCup stories', src: 'https://images.unsplash.com/photo-1744549112357-802befad1cc4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJQ1BDJTIwJUUyJTg2JTkyJTIwV0Z8ZW58MHwwfHx8MTc2MzExNjQ0Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]

  const posters = [
    { title: 'Shobhit Nair story', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Multi-offer achievers', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop' },
    { title: 'ICPC team photos', img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Meta HackerCup leaderboard', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Hackathon winners', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop' },
  ]

  const mixed = [
    ...videos.slice(0, 3).map(v => ({ type: 'video', ...v })),
    ...posters.slice(0, 2).map(p => ({ type: 'poster', ...p })),
    ...videos.slice(3, 6).map(v => ({ type: 'video', ...v })),
    ...posters.slice(2, 5).map(p => ({ type: 'poster', ...p })),
    ...videos.slice(6, 9).map(v => ({ type: 'video', ...v })),
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
      {mixed.map((item, idx) => (
        item.type === 'video' ? (
          <VideoTile key={idx} title={item.title} src={item.src} />
        ) : (
          <PosterTile key={idx} title={item.title} img={item.img} />
        )
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

        {/* Cinematic Highlight Strip */}
        <div className="mt-8 sm:mt-12 lg:mt-14">
          <HighlightCarousel />
        </div>

        {/* Cinematic Achievement Grid */}
        <div className="mt-10 sm:mt-16 lg:mt-20">
          <AchievementGrid />
        </div>
      </div>
    </section>
  )
}
