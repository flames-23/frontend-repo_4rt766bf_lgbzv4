import { Cpu, Brain, Building2, Layers, Trophy, Briefcase } from "lucide-react";

function Tile({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-slate-200 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(79,140,255,0.28)]">
      <div className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] bg-white/50" />
      <div className="relative p-5 flex items-start gap-4">
        <div className="shrink-0 grid place-items-center h-12 w-12 rounded-xl accent-gradient shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55),0_10px_20px_-8px_rgba(79,140,255,0.45)]">
          <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-slate-900 leading-snug">{title}</h4>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-8 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30 accent-gradient" />
    </div>
  );
}

export default function SchoolCSAI() {
  return (
    <section id="school-csai" className="section-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold tracking-wider" style={{ color: 'var(--ds-blue)' }}>NEXT GENERATION</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              School of Computer Science & Artificial Intelligence
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">
              A future-focused school blending rigorous CS fundamentals with modern AI systems, a research-first culture, and deep industry co-creation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#curriculum" className="group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white">
                <span className="absolute inset-0 rounded-xl accent-gradient opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/40" />
                <span className="relative">Explore Curriculum</span>
                <span aria-hidden className="absolute -inset-1 -z-10 rounded-xl accent-gradient blur-2xl opacity-40" />
              </a>
              <a href="#admissions-aseat" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 bg-white/70 backdrop-blur-xl ring-1 ring-slate-200 hover:bg-white/90 transition">
                Apply Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
