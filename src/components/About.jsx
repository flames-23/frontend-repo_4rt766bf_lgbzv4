export default function About() {
  return (
    <section id="about" className="section-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.15em] font-semibold" style={{ color: 'var(--ds-blue)' }}>ABOUT ALGOUNIVERSITY</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              School of Computer Science & AI backed by Y Combinator
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              AlgoUniversity is reimagining engineering for the AI era. We blend deep computer science fundamentals with hands-on, industry-scale building, mentored by engineers from Google, Microsoft, Apple and leading startups. Backed by Y Combinator, we focus on AI-first learning where students ship real products, publish research, and build careers that compound.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                { label: 'Years of teaching', value: '7+' },
                { label: 'Learners trained', value: '100k+' },
                { label: 'Global mentors', value: '300+' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-200 p-4 bg-white/80 backdrop-blur-md">
                  <div className="text-xl font-bold text-slate-900">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_16px_44px_-20px_rgba(15,23,42,0.25)]">
              <img src="https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkZW50cyUyMGNvbGxhYm9yYXRpbmclMjBpbiUyMGF8ZW58MHwwfHx8MTc2MzAxNzYwMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Students collaborating in a bright lab" className="w-full h-[340px] object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, rgba(79,140,255,0.12), rgba(154,111,255,0.12))' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
