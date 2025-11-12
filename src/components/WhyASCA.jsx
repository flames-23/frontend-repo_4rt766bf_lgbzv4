import { Briefcase, LineChart, Users, ShieldCheck } from 'lucide-react'

const points = [
  {
    icon: Users,
    title: '1:1 Industry Mentorship',
    desc: 'Work with senior engineers and researchers from FAANG and fast-growing startups every semester.'
  },
  {
    icon: Briefcase,
    title: 'Paid Internships',
    desc: 'Intern from year two via our industry co-op. Real responsibility, real products, real pay.'
  },
  {
    icon: LineChart,
    title: '25 LPA Avg. Placements',
    desc: 'Outcome-focused career prep with rigorous fundamentals and project-heavy portfolio building.'
  },
  {
    icon: ShieldCheck,
    title: '1,300+ Hiring Partners',
    desc: 'Expansive network of product companies, research labs, and high-frequency trading firms.'
  }
]

export default function WhyASCA() {
  return (
    <section id="why" className="py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Why AlgoUniversity School of CS & AI</h2>
          <p className="mt-4 text-lg text-gray-700">A program engineered for outcomes with a builder-first ethos.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-blue-200/60 bg-white p-6 shadow-sm hover:shadow-lg transition-alls">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
