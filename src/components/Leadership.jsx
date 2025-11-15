const leaders = [
  {
    name: 'Dr. Maya Srinivasan',
    title: 'Former Director of AI Research, Global Tech Lab',
    img: ''
  },
  {
    name: 'Arjun Mehta',
    title: 'SVP Engineering, Product Cloud (Ex-Stripe)',
    img: ''
  },
  {
    name: 'Neha Kapoor',
    title: 'Head of Data Science, FinTech Unicorn',
    img: ''
  },
  {
    name: 'Prof. R. Iyer',
    title: 'Chair, Computer Science Dept., Research University',
    img: ''
  }
]

export default function Leadership() {
  return (
    <section className="section-light py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading - compact + centered */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            A futuristic program, guided by experienced leaders.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Our curriculum and academic decisions are reviewed by leaders who have built and led at the highest levels of industry.
          </p>
        </div>

        {/* Cards - compact/classy */}
        <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-3.5 shadow-[0_8px_26px_-16px_rgba(15,23,42,0.18)] transition hover:border-slate-300"
            >
              {/* Image placeholder */}
              <div className="relative w-full overflow-hidden rounded-lg bg-slate-100" style={{ aspectRatio: '3 / 2' }}>
                {p.img ? (
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover grayscale hover:grayscale-0 transition" />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-slate-400 text-xs">Image Placeholder</div>
                )}
              </div>

              {/* Badge */}
              <div className="mt-3 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium border-green-200 bg-green-100/60 text-green-700">
                Advisor & Oversight
              </div>

              {/* Text */}
              <div className="mt-2.5">
                <h3 className="text-sm font-semibold text-slate-900 tracking-tight">{p.name}</h3>
                <p className="mt-1 text-xs text-slate-600 leading-normal">{p.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote - compact */}
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-xs text-slate-600 italic">
            “Their oversight ensures academic rigor, real-world relevance, and a future-ready curriculum for every student.”
          </p>
        </div>
      </div>
    </section>
  )
}
