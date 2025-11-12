export default function Curriculum() {
  const years = [
    {
      year: 'Year 1',
      title: 'Foundations',
      items: ['Math for CS', 'Programming I-II', 'Data Structures', 'Systems & OS', 'AI Primer']
    },
    {
      year: 'Year 2',
      title: 'Core Computer Science',
      items: ['Algorithms', 'Databases', 'Networks', 'Compilers', 'Machine Learning']
    },
    {
      year: 'Year 3',
      title: 'Specialization',
      items: ['Deep Learning', 'Distributed Systems', 'NLP / CV', 'MLOps', 'Security']
    },
    {
      year: 'Year 4',
      title: 'Industry Experience',
      items: ['Co-op / Internship', 'Research Thesis', 'Capstone Studio', 'Leadership & Ethics']
    }
  ]

  return (
    <section id="curriculum" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Curriculum Overview</h2>
          <p className="mt-4 text-lg text-gray-700">A structured flow from fundamentals to specialization and industry building.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-px bg-gradient-to-b from-blue-200 via-blue-200/40 to-transparent" />
          <div className="grid md:grid-cols-2 gap-8">
            {years.map((y, idx) => (
              <div key={y.year} className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-sm ${idx % 2 === 0 ? 'md:translate-y-8' : ''}`}>
                <div className="text-xs font-semibold tracking-widest text-blue-600">{y.year}</div>
                <h3 className="mt-2 text-2xl font-semibold">{y.title}</h3>
                <ul className="mt-4 grid gap-2 text-gray-700">
                  {y.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
