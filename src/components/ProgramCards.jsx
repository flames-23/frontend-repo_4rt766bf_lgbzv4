import { Cpu, Rocket, Cloud, Shield } from 'lucide-react'

const programs = [
  {
    icon: Cpu,
    title: 'Computer Science & AI',
    desc: 'Cutting-edge curriculum in AI/ML, systems, and full‑stack engineering with real-world projects.',
  },
  {
    icon: Rocket,
    title: 'Aerospace Engineering',
    desc: 'Design, simulate, and test next-gen UAVs and propulsion systems in advanced wind tunnels.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Modern cloud-native development, SRE practices, and platform engineering with industry tooling.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Blue/Purple team operations, secure architectures, and offensive security labs.',
  },
]

export default function ProgramCards() {
  return (
    <section id="programs" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Programs Built for the Future</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Interdisciplinary, industry-aligned tracks with capstone studios and co-ops.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
