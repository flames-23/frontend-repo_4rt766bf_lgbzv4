import SectionHeading from './SectionHeading'

// Unified blue–purple brand gradient across all four cards
const BRAND_GRADIENT = 'from-indigo-600 via-violet-500 to-blue-500'

const points = [
  {
    value: '1:1',
    label: 'Industry Mentorship',
    desc: 'Work with senior engineers and researchers from FAANG and fast-growing startups every semester.',
    gradient: BRAND_GRADIENT
  },
  {
    value: 'Paid',
    label: 'Internships from Year 2',
    desc: 'Co-op model ensures real product work, ownership and compensation while you study.',
    gradient: BRAND_GRADIENT
  },
  {
    value: '25 LPA',
    label: 'Avg. Placements',
    desc: 'Outcome-focused career prep with rigorous fundamentals and a project-heavy portfolio.',
    gradient: BRAND_GRADIENT
  },
  {
    value: '1,300+',
    label: 'Hiring Partners',
    desc: 'Expansive network of product companies, research labs, and high-frequency trading firms.',
    gradient: BRAND_GRADIENT
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map(({ value, label, desc, gradient }) => (
            <div key={label} className="relative group">
              {/* Gradient border frame */}
              <div className={`relative rounded-3xl p-[1.5px] bg-gradient-to-br ${gradient} shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]`}> 
                {/* Glass card (darkened for white text contrast) */}
                <div className="relative rounded-3xl bg-slate-900/55 backdrop-blur-xl border border-white/10 shadow-sm overflow-hidden">
                  {/* Soft sheen */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-16 -left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                  </div>

                  <div className="relative p-5 sm:p-6">
                    {/* Value as bold white text */}
                    <div className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl leading-none [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]">{value}</div>
                    <h3 className="mt-2 text-white font-semibold text-sm sm:text-base tracking-tight [text-shadow:0_1px_8px_rgba(0,0,0,0.25)]">{label}</h3>
                    <p className="mt-2 text-white/90 text-[13px] leading-5">{desc}</p>
                  </div>

                  {/* Hover aura */}
                  <div className={`absolute inset-px rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${gradient} mix-blend-soft-light`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
