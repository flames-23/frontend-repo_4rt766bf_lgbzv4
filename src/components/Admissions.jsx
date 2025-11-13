export default function Admissions() {
  return (
    <section id="admissions-aseat" className="section-light edge-glow py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-blue-200/30 bg-gradient-to-br from-white to-[#f6f7ff] p-8 md:p-12 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)]">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Admissions via <span className="accent-text">A-SEAT</span></h2>
            <p className="mt-4 text-lg text-slate-700">Register for A-SEAT, our entrance process assessing fundamentals, reasoning, and builder mindset. Shortlisted candidates proceed to interviews and scholarships.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <input className="col-span-1 rounded-xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--ds-blue)]" placeholder="Full name" />
              <input type="email" className="col-span-1 rounded-xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--ds-blue)]" placeholder="Email" />
              <a href="#" className="col-span-1 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition accent-gradient">Apply via A-SEAT</a>
            </div>

            <p className="mt-4 text-sm text-slate-600">By registering, you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
