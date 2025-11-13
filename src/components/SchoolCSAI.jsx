import { Cpu, Brain, Building2, Layers, Trophy, Briefcase } from "lucide-react";

function Tile({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl ring-1 ring-slate-200/80 shadow-[0_12px_30px_-12px_rgba(2,6,23,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(29,78,216,0.28)]">
      {/* subtle inner highlight */}
      <div className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] bg-white/40" />

      <div className="relative p-5 flex items-start gap-4">
        {/* Gradient icon token */}
        <div className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55),0_10px_20px_-8px_rgba(79,70,229,0.45)]">
          <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-[#111827] leading-snug">{title}</h4>
          <p className="mt-1 text-sm text-[#4B5563] leading-relaxed">{desc}</p>
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute -inset-8 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30 bg-gradient-to-r from-sky-400/30 via-indigo-500/20 to-fuchsia-500/30" />
    </div>
  );
}

export default function SchoolCSAI() {
  return (
    <section id="school-csai" className="relative py-24">
      {/* Bright ambient background with soft ribbons, matching A-SEAT white aesthetic */}
      <style>{`
        @keyframes waveShiftLight { 0%{transform:translateX(0)} 50%{transform:translateX(-3%)} 100%{transform:translateX(0)} }
        @keyframes glowPulseLight { 0%,100%{opacity:.55; filter:blur(30px)} 50%{opacity:.9; filter:blur(42px)} }
      `}</style>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-violet-50" />
        <div aria-hidden className="absolute -top-24 left-1/2 h-72 w-[140%] -translate-x-1/2 rotate-2 rounded-full bg-gradient-to-r from-sky-400/10 via-cyan-400/10 to-violet-500/10" style={{ animation: 'waveShiftLight 14s ease-in-out infinite' }} />
        <div aria-hidden className="absolute top-1/2 left-1/2 h-64 w-[120%] -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-400/10 to-cyan-400/10" style={{ animation: 'waveShiftLight 18s ease-in-out infinite' }} />
        <div aria-hidden className="absolute -bottom-24 left-1/2 h-80 w-[130%] -translate-x-1/2 rotate-1 rounded-full bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-violet-500/10" style={{ animation: 'waveShiftLight 20s ease-in-out infinite' }} />
        <div aria-hidden className="pointer-events-none absolute -inset-16 rounded-[48px] bg-gradient-to-b from-transparent via-white/30 to-transparent" style={{ animation: 'glowPulseLight 8s ease-in-out infinite' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Heading block */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-600">NEXT GENERATION</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827]">
              School of Computer Science & Artificial Intelligence
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#4B5563]">
              A future-focused school blending rigorous CS fundamentals with modern AI systems, a research-first culture, and deep industry co-creation.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#curriculum" className="group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-violet-600 opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/40" />
                <span className="relative">Explore Curriculum</span>
                <span aria-hidden className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-sky-500/35 via-blue-500/25 to-violet-600/35 blur-2xl" />
              </a>
              <a href="#admissions" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[#111827] bg-white/60 backdrop-blur-xl ring-1 ring-slate-200 hover:bg-white/80 transition">
                Apply Now
              </a>
            </div>
          </div>

          {/* Right: 3x2 Feature cards grid */}
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
