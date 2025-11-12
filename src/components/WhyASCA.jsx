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
    <section id="why" className="py-16 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Why AlgoUniversity School of CS & AI</h2>
          <p className="mt-3 text-base text-gray-700">A program engineered for outcomes with a builder-first ethos.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-blue-200/60 bg-white p-5 shadow-sm hover:shadow-lg transition-alls">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
