import { Cpu, Brain, Building2, Layers, Trophy, Briefcase } from "lucide-react";

function Tile({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[rgba(242,242,242,0.4)] backdrop-blur-xl ring-1 ring-white/40 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.35)] hover:ring-white/60">
      {/* subtle inner highlight */}
      <div className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] bg-white/5" />

      <div className="relative p-6 flex items-start gap-4">
        {/* Icon with gradient badge */}
        <div className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3),0_10px_20px_-8px_rgba(99,102,241,0.45)]">
          <Icon className="h-7 w-7 text-white/95" strokeWidth={1.75} />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-[#111827] leading-snug">{title}</h4>
          <p className="mt-1 text-sm text-[#374151] leading-relaxed">{desc}</p>
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute -inset-8 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40 bg-gradient-to-r from-sky-400/30 via-indigo-500/20 to-fuchsia-500/30" />
    </div>
  );
}

export default function SchoolCSAI() {
  return (
    <section id="school-csai" className="relative py-24">
      {/* Spotlight glow behind left heading area */}
      <div aria-hidden className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full blur-3xl bg-gradient-to-br from-sky-500/25 via-cyan-400/15 to-violet-600/25" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left: bold text block */}
          <div className="md:sticky md:top-24">
            <div className="relative">
              {/* Dark-to-darker overlay for legibility */}
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-b from-neutral-900/60 to-neutral-950/80" />

              <p className="tracking-[0.15em] text-xs font-semibold text-sky-400/90">NEXT GENERATION</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                <span className="block text-[#E5E7EB]">School of</span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500">Computer Science</span>
                <span className="block mt-1 text-[#E5E7EB]">&</span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-400">Artificial Intelligence</span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#E5E7EB]">
                A future-focused school blending rigorous CS fundamentals with modern AI systems, a research-first culture, and deep industry co-creation.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#curriculum" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 hover:shadow-indigo-600/30 transition">
                  Explore Curriculum
                </a>
                <a href="#admissions" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-[#111827] bg-[rgba(242,242,242,0.4)] backdrop-blur-xl ring-1 ring-white/50 hover:ring-white/70 hover:bg-white/60 transition">
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          {/* Right: cards */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
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
