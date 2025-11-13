export default function ASeatCTA() {
  return (
    <section id="a-seat" className="relative py-16">
      {/* Animated ambient background */}
      <style>{`
        @keyframes waveShift {
          0% { transform: translateX(0); opacity: 0.8; }
          50% { transform: translateX(-3%); opacity: 1; }
          100% { transform: translateX(0); opacity: 0.8; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; filter: blur(36px); }
          50% { opacity: 0.9; filter: blur(48px); }
        }
      `}</style>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle moving gradient ribbons */}
        <div aria-hidden className="absolute -top-24 left-1/2 h-72 w-[140%] -translate-x-1/2 rotate-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-600/10" style={{ animation: 'waveShift 12s ease-in-out infinite' }} />
        <div aria-hidden className="absolute top-1/2 left-1/2 h-64 w-[120%] -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-full bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-cyan-400/10" style={{ animation: 'waveShift 16s ease-in-out infinite' }} />
        <div aria-hidden className="absolute -bottom-24 left-1/2 h-80 w-[130%] -translate-x-1/2 rotate-1 rounded-full bg-gradient-to-r from-cyan-400/10 via-teal-400/10 to-blue-500/10" style={{ animation: 'waveShift 18s ease-in-out infinite' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* White panel */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="relative grid gap-5 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <p className="text-sm font-medium tracking-wider text-[#4B5563]">Admissions 2025</p>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
                Get Started with <span className="text-[#111827]">A-SEAT</span> — The Entrance to AlgoUniversity.
              </h2>
              <p className="mt-3 text-base text-[#4B5563] max-w-2xl">
                Claim your edge in Computer Science & AI. Limited seats, high mentorship density, and a builder-first culture to launch your career.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:items-center lg:items-end justify-end">
                <a
                  href="#admissions"
                  className="group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition focus:outline-none"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 opacity-95 transition-opacity group-hover:opacity-100" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-black/5" />
                  <span className="relative z-10">Register Now</span>
                </a>
                <a href="#admissions" className="text-sm text-[#4B5563] hover:text-[#111827] transition">Learn about the process</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
