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
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading with concise subtext (light theme) */}
        <SectionHeading
          title="Admissions & Process"
          subtitle="A streamlined path: apply, complete AUET and PI, receive a clear decision."
          align="center"
          theme="light"
          size="md"
          className="mb-6 sm:mb-8"
        />

        {/* Single explainer video (glass, compact) */}
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-black/5 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.2)] transition hover:shadow-[0_18px_56px_-18px_rgba(0,0,0,0.24)]">
            <video
              className="h-[200px] sm:h-[260px] md:h-[340px] w-full object-cover"
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

        {/* Premium card with split layout (glass, compact) */}
        <div className="mt-8 sm:mt-9">
          <div className="rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-black/5 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.2)] overflow-hidden transition hover:shadow-[0_18px_56px_-18px_rgba(0,0,0,0.24)]">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Left: Process Overview */}
              <div className="md:col-span-3 p-6 sm:p-7">
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-black tracking-tight">Your 4-Step Selection Process</h3>
                  <p className="mt-1.5 text-sm text-neutral-600">Follow the steps from left to right. It's linear and simple.</p>
                </div>

                {/* Desktop / Tablet: Horizontal stepper with arrows */}
                <div className="hidden md:flex items-center justify-between gap-3">
                  {steps.map(({ icon: Icon, label }, idx) => (
                    <div key={label} className="flex items-center flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 font-semibold">
                          {idx + 1}
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-neutral-50 ring-1 ring-black/5">
                            <Icon className="h-4.5 w-4.5 text-neutral-700" />
                          </div>
                          <div className="truncate text-sm font-medium text-neutral-800">{label}</div>
                        </div>
                      </div>
                      {idx !== steps.length - 1 && (
                        <div className="flex-1 flex items-center">
                          <div className="mx-3 flex items-center gap-3 w-full">
                            <div className="h-px grow bg-gradient-to-r from-neutral-200 to-neutral-300" />
                            <ArrowRight className="h-4 w-4 text-neutral-400 shrink-0" />
                            <div className="h-px grow bg-gradient-to-r from-neutral-200 to-neutral-300" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile: Vertical timeline */}
                <div className="md:hidden">
                  <ol className="relative border-l border-neutral-200 ml-5 space-y-5">
                    {steps.map(({ icon: Icon, label }, idx) => (
                      <li key={label} className="ml-4">
                        <span className="absolute -left-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 font-semibold">
                          {idx + 1}
                        </span>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-neutral-50 ring-1 ring-black/5">
                            <Icon className="h-4 w-4 text-neutral-700" />
                          </div>
                          <div className="text-sm font-medium text-neutral-800">{label}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* 360 Admissions Criteria */}
                <div className="mt-7 sm:mt-8">
                  <div className="text-xs sm:text-sm font-medium text-neutral-700">360° Admissions Criteria</div>
                  <ul className="mt-2.5 space-y-2 text-xs sm:text-sm text-neutral-600">
                    <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400/70" /><span>JEE Main scores accepted</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400/70" /><span>State Engineering Entrance Exam ranks accepted</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400/70" /><span>Direct admission via Olympiad ranks</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400/70" /><span>Profile-based selection (similar to Ivy League admissions)</span></li>
                  </ul>
                </div>
              </div>

              {/* Right: AUET Registration Box */}
              <div className="md:col-span-2 p-6 sm:p-7 bg-neutral-50/60 border-l border-black/5">
                <div className="rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-black/5 p-5 sm:p-6 shadow-[0_12px_32px_-18px_rgba(0,0,0,0.2)]">
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-black">Register for AUET</div>
                    <div className="mt-1 text-xs sm:text-sm text-neutral-600">Fast-track your application in minutes.</div>
                  </div>

                  <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(16,185,129,0.7)] hover:bg-emerald-500 transition">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-medium px-2.5 py-1 ring-1 ring-emerald-200">Early window ends 30 Jun</span>
                    <span className="rounded-full bg-neutral-50 text-neutral-700 text-[11px] sm:text-xs font-medium px-2.5 py-1 ring-1 ring-black/5">Fee waiver available</span>
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
