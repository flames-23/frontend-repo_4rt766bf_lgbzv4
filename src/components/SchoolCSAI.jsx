import SectionHeading from './SectionHeading'

export default function SchoolCSAI() {
  return (
    <section id="school-csai" className="py-12 sm:py-14 bg-[#F5F7FA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Compact global heading */}
        <SectionHeading
          title="School of Computer Science & Artificial Intelligence"
          align="left"
          theme="light"
          size="md"
          className="mb-6 sm:mb-8"
        />

        {/* Compact, glassy card */}
        <div className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm ring-1 ring-slate-200/70 p-5 sm:p-6 lg:p-7 transition-shadow">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left: Narrative */}
            <div>
              <p className="text-sm sm:text-[15px] leading-7 text-slate-700">
                Our School of CS & AI combines rigorous computer science foundations with modern AI systems and hands‑on engineering. Built with a research mindset and industry collaboration at its core, students learn to think deeply, architect robust systems, and ship production‑grade software.
              </p>

              <ul className="mt-5 space-y-2.5 text-slate-700">
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span className="text-sm">Strong CS fundamentals: algorithms, systems, networks, databases, and security.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span className="text-sm">AI, ML, and data systems integrated with MLOps and scalable infrastructure.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span className="text-sm">Research culture: labs, publications, competitions, and open‑source contributions.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span className="text-sm">Industry integration through co‑taught courses, reviews, internships, and capstones.</span></li>
              </ul>
            </div>

            {/* Right: Visual proof */}
            <div>
              {/* Video block */}
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-b from-white to-slate-50 ring-1 ring-slate-200/70 shadow-sm">
                <div className="h-full w-full grid place-items-center">
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="grid place-items-center h-9 w-9 rounded-full bg-white ring-1 ring-slate-200 shadow-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                    <span className="text-xs sm:text-sm">AI / School of CS & AI concept video</span>
                  </div>
                </div>
              </div>

              {/* Pill badges */}
              <div className="mt-4 flex flex-wrap gap-2.5">
                {[
                  'AI & ML Focus',
                  'Systems & Infrastructure',
                  'Research & Competitions',
                  'Built by Practising Engineers',
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-2.5 py-1 text-xs sm:text-sm font-medium text-slate-700 ring-1 ring-slate-200/70"
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Media / press logos */}
              <div className="mt-5 pt-4 border-t border-slate-200/70">
                <div className="flex items-center gap-5 sm:gap-6 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition">
                  {['The Daily Tech', 'Global Times', 'Code Journal', 'AI Weekly'].map((name) => (
                    <div key={name} className="h-6 sm:h-7 px-3 grid place-items-center rounded-md bg-white/70 backdrop-blur ring-1 ring-slate-200/70 text-[10px] sm:text-xs text-slate-500">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
