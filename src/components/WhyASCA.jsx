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
    <section id="why" className="section-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          align="center"
          theme="light"
          size="md"
          title="Why AlgoUniversity School of CS & AI"
          subtitle="A builder-first program engineered for outcomes."
          className="mb-8"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl accent-gradient text-white shadow-sm ring-1 ring-white/20">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-slate-900 tracking-tight">{title}</h3>
              <p className="mt-1.5 text-[13px] leading-5 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
