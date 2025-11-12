export default function FAQ() {
  const faqs = [
    { q: 'Who can apply for the B.Tech in CS & AI?', a: 'Students who have completed 12th grade with PCM and meet the eligibility criteria are encouraged to apply.' },
    { q: 'What is A-SEAT?', a: 'A-SEAT is our admissions process evaluating fundamentals, reasoning, and builder mindset through an online assessment and interviews.' },
    { q: 'Is the program residential?', a: 'Yes, the program is full-time residential with vibrant campus life, labs, and clubs.' },
    { q: 'Do you offer scholarships?', a: 'Yes, merit- and need-based scholarships are available for exceptional talent.' },
  ]

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">FAQs</h2>
          <p className="mt-3 text-lg text-gray-700">Quick answers to common questions from students and parents.</p>
        </div>
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="p-6 group">
              <summary className="cursor-pointer list-none font-medium text-gray-900 flex items-center justify-between">
                <span>{f.q}</span>
                <span className="ml-4 text-blue-600 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
