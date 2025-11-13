export default function TalentClub() {
  const imageUrl =
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60'

  return (
    <section className="section-dark relative overflow-hidden py-20 sm:py-24">
      {/* Ambient soft ribbons/glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(1200px 400px at 20% -10%, rgba(79,140,255,0.10), transparent 60%), radial-gradient(900px 360px at 85% 110%, rgba(154,111,255,0.10), transparent 60%)'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main horizontal card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#141418] shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)]">
          {/* Soft edge glow to match ASCA cards */}
          <div
            className="absolute -inset-3 -z-10 rounded-[28px] opacity-40 blur-2xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(79,140,255,0.25), rgba(154,111,255,0.25))'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Content */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                Premium Network
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                AlgoUniversity Talent Club
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A9A9B2]">
                An invite-only network of top recruiters, CTOs, founders, and HR leaders. Talent Club enables deep
                hiring insights, curated discussions, and direct access to AlgoUniversity’s elite pipeline of
                industry-ready engineers.
              </p>
            </div>

            {/* Right: Image Placeholder */}
            <div className="relative">
              <div className="m-6 h-[280px] sm:h-[320px] md:h-full rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_40px_120px_-40px_rgba(79,140,255,0.35),0_24px_60px_-28px_rgba(154,111,255,0.25)]">
                <img
                  src={imageUrl}
                  alt="Talent Club recruiter network"
                  className="h-full w-full object-cover"
                />
                {/* Subtle inner gradient for premium feel */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.15), transparent 30%, transparent 70%, rgba(0,0,0,0.25))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
