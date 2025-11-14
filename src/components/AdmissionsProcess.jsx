import SectionHeading from './SectionHeading'
import { FileText, Users, CalendarDays, CheckCircle2, ArrowRight } from 'lucide-react'

export default function AdmissionsProcess() {
  const steps = [
    { icon: FileText, label: 'Apply for AUET' },
    { icon: CalendarDays, label: 'Appear for AUET' },
    { icon: Users, label: 'Personal Interview' },
    { icon: CheckCircle2, label: 'Receive Offer' },
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

        {/* Bottom: Single wide premium card with split layout */}
        <div className="mt-10 sm:mt-12">
          <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.2)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Left: Process Overview */}
              <div className="md:col-span-3 p-8 sm:p-10">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">Your 4-Step Selection Process</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {steps.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-neutral-50 ring-1 ring-black/5">
                        <Icon className="h-5 w-5 text-neutral-700" />
                      </div>
                      <div className="text-sm font-medium text-neutral-700">{label}</div>
                    </div>
                  ))}
                </div>

                {/* 360 Admissions Criteria */}
                <div className="mt-8 sm:mt-10">
                  <div className="text-sm font-medium text-neutral-700">360° Admissions Criteria</div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                    <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400/70" /><span>JEE Main scores accepted</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400/70" /><span>State Engineering Entrance Exam ranks accepted</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400/70" /><span>Direct admission via Olympiad ranks</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400/70" /><span>Profile-based selection (similar to Ivy League admissions)</span></li>
                  </ul>
                </div>
              </div>

              {/* Right: AUET Registration Box */}
              <div className="md:col-span-2 p-8 sm:p-10 bg-neutral-50/60 border-l border-black/5">
                <div className="rounded-2xl bg-white ring-1 ring-black/5 p-6 sm:p-7 shadow-[0_16px_44px_-20px_rgba(0,0,0,0.2)]">
                  <div>
                    <div className="text-base font-semibold text-black">Register for AUET</div>
                    <div className="mt-1 text-sm text-neutral-600">Fast-track your application in minutes.</div>
                  </div>

                  <button className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(16,185,129,0.7)] hover:bg-emerald-500 transition">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 ring-1 ring-emerald-200">Early window ends 30 Jun</span>
                    <span className="rounded-full bg-neutral-50 text-neutral-700 text-xs font-medium px-2.5 py-1 ring-1 ring-black/5">Fee waiver available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
