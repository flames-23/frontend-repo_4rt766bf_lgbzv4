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
    <section className="section-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            A futuristic program, guided by experienced leaders.
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Our curriculum and academic decisions are reviewed by leaders who have built and led at the highest levels of industry.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.18)]"
            >
              {/* Image placeholder */}
              <div className="relative w-full overflow-hidden rounded-xl bg-slate-100" style={{ aspectRatio: '4 / 3' }}>
                {/* Empty by design; user will replace */}
                {p.img ? (
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-slate-400 text-sm">Image Placeholder</div>
                )}
              </div>

              {/* Badge */}
              <div className="mt-4 inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium
                              border-green-200 bg-green-50 text-green-700">
                Advisor & Oversight
              </div>

              {/* Text */}
              <div className="mt-3">
                <h3 className="text-base font-semibold text-slate-900 tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-sm text-slate-600 italic">
            “Their oversight ensures academic rigor, real-world relevance, and a future-ready curriculum for every student.”
          </p>
        </div>
      </div>
    </section>
  )
}
