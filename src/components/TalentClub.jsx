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

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 sm:py-32 lg:py-40">
      {/* Ambient premium glow (match MacBook section vibe) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h:[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgba(246,227,180,0.18) 0%, rgba(246,227,180,0.08) 45%, rgba(246,227,180,0.03) 65%, transparent 75%)'
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/3 opacity-15 blur-2xl"
          style={{
            background:
              'conic-gradient(from 200deg at 50% 50%, rgba(246,227,180,0.06), transparent 18%, rgba(246,227,180,0.08) 28%, transparent 48%, rgba(246,227,180,0.07) 60%, transparent 78%, rgba(246,227,180,0.06) 92%, transparent)',
            maskImage: 'radial-gradient(closest-side, black, transparent)',
            WebkitMaskImage: 'radial-gradient(closest-side, black, transparent)'
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(246,227,180,0.12) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP: Centered Intro */}
        <SectionHeading
          kicker="Premium Industry Network"
          title="AlgoUniversity Talent Club"
          subtitle="A private network connecting top recruiters, CTOs, founders, and tech leaders."
          align="center"
          theme="dark"
          size="lg"
          className="mb-10 sm:mb-12"
        />

        {/* MIDDLE: Two-Half Layout */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {/* Left: Highlight video */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-40px_rgba(0,0,0,0.7)]">
            <video
              className="h-[240px] sm:h-[320px] md:h-[360px] w-full object-cover"
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
              style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 24%, transparent 40%)' }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Right: Minimal bullets */}
          <div className="flex items-center">
            <ul className="w-full space-y-4 text-sm sm:text-base">
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
          </div>
        </div>

        {/* BOTTOM: Four image cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {thumbs.map((t, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_-40px_rgba(0,0,0,0.6)] hover:bg-white/[0.07] transition"
            >
              <div className="overflow-hidden rounded-xl">
                <img src={t.src} alt="Talent Club update" className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <p className="mt-3 px-1 text-[12px] leading-snug text-white/60">{t.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
