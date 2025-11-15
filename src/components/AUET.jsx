import { useEffect, useMemo, useState } from 'react'

function pad(num) {
  return String(num).padStart(2, '0')
}

export default function AUET() {
  // Registration close deadline (placeholder)
  const deadline = useMemo(() => new Date('2025-12-27T23:59:59'), [])
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const remaining = Math.max(0, Math.floor((deadline.getTime() - now.getTime()) / 1000))
  const days = Math.floor(remaining / (24 * 3600))
  const hours = Math.floor((remaining % (24 * 3600)) / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60
  const closed = remaining <= 0

  return (
    <section className="section-dark relative overflow-hidden py-14 sm:py-16">
      {/* Ambient soft ribbons/glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(900px 320px at 12% -10%, rgba(79,140,255,0.10), transparent 60%), radial-gradient(700px 280px at 90% 110%, rgba(154,111,255,0.10), transparent 60%)'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact heading - centered */}
        <div className="mb-5 sm:mb-6 text-center mx-auto max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            AlgoUniversity Entrance Test (AUET)
          </h2>
          <p className="mt-1 text-sm text-white/60">Secure your seat and scholarships through AUET.</p>
        </div>

        {/* Compact glass card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141418]/95 p-5 sm:p-6 lg:p-7 shadow-[0_10px_34px_-18px_rgba(0,0,0,0.65)] max-w-6xl mx-auto">
          {/* Soft edge glow */}
          <div
            className="absolute -inset-3 -z-10 rounded-[22px] opacity-35 blur-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(79,140,255,0.22), rgba(154,111,255,0.22))'
            }}
          />

          <div className="grid gap-6 lg:grid-cols-12">
            {/* Left: Timer and meta */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-white/70">Registration closes in</p>

              {/* Countdown */}
              <div className="mt-2.5 flex items-center gap-2.5">
                <TimeBlock label="Days" value={pad(days)} />
                <Separator />
                <TimeBlock label="Hours" value={pad(hours)} />
                <Separator />
                <TimeBlock label="Minutes" value={pad(minutes)} />
                <Separator />
                <TimeBlock label="Seconds" value={pad(seconds)} />
              </div>
              {closed && (
                <p className="mt-2 text-xs font-semibold text-red-400">Registration closed</p>
              )}

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-[13px] text-[#A9A9B2]">
                  Next Exam: <span className="font-semibold text-white">28 December 2025</span>
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-base font-extrabold tracking-tight text-white">Why AUET</h3>
                <ul className="mt-2 space-y-1.5 text-[#A9A9B2] text-sm leading-relaxed list-disc pl-5">
                  <li>Qualify for India’s top outcome-focused CS & AI program.</li>
                  <li>Access merit scholarships and mentorship.</li>
                  <li>Build real projects with guided support.</li>
                </ul>
              </div>
            </div>

            {/* Right: Fee, tags, CTA */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4 sm:p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
                {/* Fee line */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium text-[#A9A9B2]">Registration Fee</p>
                    <div className="mt-1 flex items-baseline gap-2.5">
                      <span className="text-base font-semibold line-through text-white/40">₹2000</span>
                      <span className="text-xl font-extrabold text-emerald-400">₹0</span>
                      <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full ring-1 ring-emerald-400/20">
                        Winter Slot Offer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags / highlight chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>Up to 100% Scholarship</Chip>
                  <Chip>Outcome-focused B.Tech</Chip>
                  <Chip>IIT mentor guidance</Chip>
                </div>

                {/* CTA */}
                <div className="mt-5">
                  <a
                    href="#admissions"
                    className="group relative inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-[13px] font-semibold text-white transition focus:outline-none"
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 opacity-95 transition-opacity group-hover:opacity-100" />
                    <span className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
                    <span className="relative z-10">Register for AUET</span>
                  </a>
                  <p className="mt-1.5 text-[11px] text-center text-[#A9A9B2]">Takes under 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimeBlock({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
        <span
          className="font-mono text-xl sm:text-2xl font-extrabold tracking-widest text-white"
          style={{ fontFeatureSettings: 'tnum' }}
        >
          {value}
        </span>
      </div>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#A9A9B2]">{label}</span>
    </div>
  )
}

function Separator() {
  return <span className="-mt-5 pb-5 text-xl font-extrabold text-white/60">:</span>
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/10 bg-white/5">
      {children}
    </span>
  )
}
