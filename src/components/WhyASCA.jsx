import { Briefcase, LineChart, Users, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

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
    <section id="why" className="section-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          align="center"
          theme="light"
          size="lg"
          title="Why AlgoUniversity School of CS & AI"
          subtitle="A program engineered for outcomes with a builder-first ethos."
          className="mb-8"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.18)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl accent-gradient text-white shadow-md">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
