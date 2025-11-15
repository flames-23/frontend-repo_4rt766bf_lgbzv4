import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function TalentClub() {
  const thumbs = [
    {
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
      sub: 'CTO roundtable • trends & hiring signals'
    },
    {
      src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
      sub: 'Founder meet • early access to cohorts'
    },
    {
      src: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop',
      sub: 'Recruiter workflow • faster shortlists'
    },
    {
      src: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop',
      sub: 'Tech leaders • invite-only updates'
    }
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-24">
      {/* Ambient premium glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgba(246,227,180,0.16) 0%, rgba(246,227,180,0.08) 45%, rgba(246,227,180,0.03) 65%, transparent 75%)'
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/3 opacity-15 blur-2xl"
          style={{
            background:
              'conic-gradient(from 200deg at 50% 50%, rgba(246,227,180,0.06), transparent 18%, rgba(246,227,180,0.08) 28%, transparent 48%, rgba(246,227,180,0.07) 60%, transparent 78%, rgba(246,227,180,0.06) 92%, transparent)',
            maskImage: 'radial-gradient(closest-side, black, transparent)',
            WebkitMaskImage: 'radial-gradient(closest-side, black, transparent)'
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(rgba(246,227,180,0.12) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP: Centered Intro */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <SectionHeading
            kicker="Premium Industry Network"
            title="AlgoUniversity Talent Club"
            subtitle="A private network connecting top recruiters, CTOs, founders, and tech leaders."
            align="center"
            theme="dark"
            size="md"
            className="mb-8 sm:mb-10"
          />
        </motion.div>

        {/* MIDDLE: Two-Half Layout */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {/* Left: Highlight video card with glass + gradient ring */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-white/6 backdrop-blur-sm ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_-40px_rgba(0,0,0,0.6)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl [mask:linear-gradient(#000,#000)content-box,linear-gradient(#000,#000)] [mask-composite:exclude] p-[1px]"
                 style={{ background: 'linear-gradient(135deg, rgba(250,218,94,0.35), rgba(244,114,182,0.25))', WebkitMaskComposite: 'xor' }}
            />
            <video
              className="h-[220px] sm:h-[300px] md:h-[320px] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop"
            >
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
            {/* Inner glossy overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 24%, transparent 42%)' }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Right: Minimal bullets + compact CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center"
          >
            <div className="w-full">
              <ul className="w-full space-y-3 text-sm sm:text-[15px]">
                {[
                  'Direct access to elite engineering talent',
                  'Warm introductions to CTOs, founders, and recruiters',
                  'Private briefs, sourcing sprints, and cohort previews',
                  'Zero-noise, outcomes-focused conversations'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-white/70" />
                    <span className="text-white/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 sm:mt-6">
                <a
                  href="#join-talent-club"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/15 hover:text-white"
                >
                  <span>Request access</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 opacity-80"><path d="M13.5 4.5a.75.75 0 0 0 0 1.5h5.69l-7.72 7.72a.75.75 0 1 0 1.06 1.06l7.72-7.72v5.69a.75.75 0 0 0 1.5 0v-8.25a.75.75 0 0 0-.75-.75h-8.25Z"/><path d="M6 6.75A2.25 2.25 0 0 0 3.75 9v9A2.25 2.25 0 0 0 6 20.25h9A2.25 2.25 0 0 0 17.25 18v-3a.75.75 0 0 0-1.5 0v3c0 .414-.336.75-.75.75H6A.75.75 0 0 1 5.25 18V9c0-.414.336-.75.75-.75h3a.75.75 0 0 0 0-1.5H6Z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: Four image cards, compact glass with motion */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {thumbs.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl bg-white/6 backdrop-blur-sm p-2 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_60px_-40px_rgba(0,0,0,0.6)] transition hover:bg-white/[0.08]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl [mask:linear-gradient(#000,#000)content-box,linear-gradient(#000,#000)] [mask-composite:exclude] p-[1px]"
                   style={{ background: 'linear-gradient(135deg, rgba(250,218,94,0.3), rgba(244,114,182,0.2))', WebkitMaskComposite: 'xor' }}
              />
              <div className="overflow-hidden rounded-xl">
                <img
                  src={t.src}
                  alt="Talent Club update"
                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-3 px-1 text-[12px] leading-snug text-white/65">{t.sub}</p>

              {/* subtle spotlight on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                   style={{ background: 'radial-gradient(1000px 200px at 50% 0%, rgba(255,255,255,0.06), transparent 60%)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
