import { Cpu, Brain, Building2, Layers, Trophy, Briefcase } from "lucide-react";

function Tile({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5 hover:shadow-xl transition-all">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />
      <div className="relative flex items-start gap-4">
        <div className="rounded-xl bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 p-3">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function SchoolCSAI() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left: 1/3 width */}
          <div className="md:sticky md:top-20 space-y-6">
            <p className="tracking-[0.15em] text-xs font-semibold text-blue-600 dark:text-blue-400">NEXT GENERATION</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="block text-gray-900 dark:text-white">SCHOOL OF</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">COMPUTER SCIENCE</span>
              <span className="block mt-1 text-gray-900 dark:text-white">&</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">ARTIFICIAL INTELLIGENCE</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              A future-focused school blending rigorous CS fundamentals with modern AI systems, research-first culture, and industry co-creation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all">Explore Curriculum</a>
              <a href="#admissions" className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-gray-900/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur font-semibold hover:border-blue-500/40 hover:bg-blue-500/5 transition-all">Apply Now</a>
            </div>
          </div>

          {/* Right: 2/3 width tiles */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-5">
            <Tile icon={Cpu} title="Systems + AI Track" desc="Strong CS core with AI/ML, data systems, and MLOps integrated from semester one." />
            <Tile icon={Brain} title="Research Labs" desc="Join labs in NLP, CV, robotics, systems, and safety; publish with mentors." />
            <Tile icon={Building2} title="Industry Co-taught" desc="Courses co-designed with tech partners; master real-world stacks and tools." />
            <Tile icon={Layers} title="Capstone Studio" desc="Year-long build with production reviews, demo days, and portfolio prep." />
            <Tile icon={Trophy} title="Hackathons & Clubs" desc="Ship fast in maker culture with 24x7 labs, sprints, and open-source." />
            <Tile icon={Briefcase} title="Career Outcomes" desc="Internships from year two; pathways to research, startups, and product roles." />
          </div>
        </div>
      </div>
    </section>
  );
}
