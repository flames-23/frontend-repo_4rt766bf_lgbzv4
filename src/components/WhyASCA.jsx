import { motion } from 'framer-motion'

// We keep the data here in case it's reused elsewhere, but the UI heading is removed
const points = [
  {
    value: '1:1',
    label: 'Industry Mentorship',
    desc: 'Work with senior engineers and researchers from FAANG and fast-growing startups every semester.'
  },
  {
    value: 'Paid',
    label: 'Internships from Year 2',
    desc: 'Co-op model ensures real product work, ownership and compensation while you study.'
  },
  {
    value: '25 LPA',
    label: 'Avg. Placements',
    desc: 'Outcome-focused career prep with rigorous fundamentals and a project-heavy portfolio.'
  },
  {
    value: '1,300+',
    label: 'Hiring Partners',
    desc: 'Expansive network of product companies, research labs, and high-frequency trading firms.'
  }
]

export default function WhyASCA() {
  return (
    <section id="why" className="hidden" aria-hidden>
      {/* Cards moved into Hero section as requested */}
    </section>
  )
}
