import SectionHeading from './SectionHeading'
import { FileText, Users, CalendarDays, CheckCircle2 } from 'lucide-react'

export default function AdmissionsProcess() {
  const steps = [
    { icon: FileText, label: 'Apply' },
    { icon: Users, label: 'AUET + PI' },
    { icon: CalendarDays, label: 'Review' },
    { icon: CheckCircle2, label: 'Offer' },
  ]

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Global heading style (light theme) */}
        <SectionHeading
          title="Admissions & Process"
          subtitle="A simple, streamlined path: apply once, complete AUET + PI, get a clear decision."
          align="center"
          theme="light"
          size="lg"
          className="mb-10 sm:mb-12"
        />

        {/* Middle: Single explainer video */}
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.2)]">
            <video
              className="h-[240px] sm:h-[320px] md:h-[420px] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
            >
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
            {/* subtle inner gradient for premium feel */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),transparent_18%,transparent_70%,rgba(0,0,0,0.06))]" />
          </div>
        </div>

        {/* Bottom: Infographic Row */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Steps card */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-black/5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)]">
            <div className="mb-4 text-sm font-medium text-neutral-700">Your 4-step path</div>
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {steps.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-50 ring-1 ring-black/5">
                    <Icon className="h-5 w-5 text-neutral-700" />
                  </div>
                  <div className="text-xs text-neutral-600 text-center">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accepted exams logos */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-black/5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)]">
            <div className="mb-4 text-sm font-medium text-neutral-700">Accepted exams</div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {["JEE Main", "SAT", "State Exams"].map((name) => (
                <div key={name} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm">
                  {name}
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-neutral-500">Use your latest valid score during application.</div>
          </div>

          {/* Reserved seats badge */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-black/5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)] flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 ring-1 ring-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-emerald-700">5% seats reserved for board toppers</span>
              </div>
              <div className="mt-3 text-xs text-neutral-500">Merit-based reservation across boards.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
