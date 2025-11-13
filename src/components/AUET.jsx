import { useEffect, useMemo, useState } from 'react'

function pad(num) {
  return String(num).padStart(2, '0')
}

export default function AUET() {
  // Registration close deadline (placeholder)
  // Set to 27 December 2025 23:59:59 local time to create urgency ahead of the exam on 28 Dec 2025
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
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading outside the card */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827] mb-6">
          AlgoUniversity Entrance Test (AUET)
        </h2>

        {/* White card container following site conventions */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: Timer and meta */}
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#4B5563]">Registration closes in:</p>

              {/* Premium digital-style countdown */}
              <div className="mt-3 flex items-center gap-3">
                <TimeBlock label="Days" value={pad(days)} />
                <Separator />
                <TimeBlock label="Hours" value={pad(hours)} />
                <Separator />
                <TimeBlock label="Minutes" value={pad(minutes)} />
                <Separator />
                <TimeBlock label="Seconds" value={pad(seconds)} />
              </div>
              {closed && (
                <p className="mt-2 text-sm font-semibold text-red-600">Registration closed</p>
              )}

              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-sm text-[#4B5563]">Next Exam Date: <span className="font-semibold text-[#111827]">28 December 2025</span></p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-extrabold tracking-tight text-[#111827]">Why You Should Appear</h3>
                <ul className="mt-3 space-y-2 text-[#4B5563] text-sm leading-relaxed list-disc pl-5">
                  <li>Unlock entry to a rigorous, outcome-focused B.Tech in CS & AI.</li>
                  <li>Stand out for merit-based scholarships and mentorship access.</li>
                  <li>Build projects with real industry guidance and peer support.</li>
                  <li>Fast-track your career with a community of high-performers.</li>
                </ul>
              </div>
            </div>

            {/* Right: Fee, tags, CTA */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                {/* Fee line */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium text-[#4B5563]">Registration Fee</p>
                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="text-lg font-semibold line-through text-gray-400">₹2000</span>
                      <span className="text-2xl font-extrabold text-emerald-600">₹0</span>
                      <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">Only for Winter Slot Candidates</span>
                    </div>
                  </div>
                </div>

                {/* Tags / highlight chips */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <Chip>Upto 100% Scholarship</Chip>
                  <Chip>Admission to India’s top outcome-focused B.Tech program</Chip>
                  <Chip>Career guidance from current IIT students</Chip>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="#admissions"
                    className="group relative inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition focus:outline-none"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 opacity-95 transition-opacity group-hover:opacity-100" />
                    <span className="absolute inset-0 rounded-xl ring-1 ring-black/5" />
                    <span className="relative z-10">Register for AUET Now</span>
                  </a>
                  <p className="mt-2 text-xs text-center text-[#6B7280]">Takes less than 5 minutes</p>
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
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 shadow-sm">
        <span
          className="font-mono text-2xl sm:text-3xl font-extrabold tracking-widest text-[#111827]"
          style={{ fontFeatureSettings: 'tnum' }}
        >
          {value}
        </span>
      </div>
      <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#6B7280]">{label}</span>
    </div>
  )
}

function Separator() {
  return <span className="-mt-6 pb-6 text-2xl font-extrabold text-[#9CA3AF]">:</span>
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-[#0F172A] ring-1 ring-gray-200 bg-gradient-to-r from-cyan-50 via-blue-50 to-violet-50">
      {children}
    </span>
  )
}
