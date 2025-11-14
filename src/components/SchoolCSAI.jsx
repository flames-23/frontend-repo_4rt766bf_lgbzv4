import SectionHeading from './SectionHeading'

export default function SchoolCSAI() {
  return (
    <section id="school-csai" className="py-20 sm:py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Global heading outside the card */}
        <SectionHeading
          title="School of Computer Science & Artificial Intelligence"
          align="left"
          theme="light"
          size="lg"
          className="mb-8 sm:mb-10"
        />

        {/* Light, premium card */}
        <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-6 sm:p-8 lg:p-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Narrative */}
            <div>
              <p className="text-[15px] leading-7 text-slate-700">
                Our School of CS & AI combines rigorous computer science foundations with modern AI systems and hands‑on engineering. Built with a research mindset and industry collaboration at its core, students learn to think deeply, architect robust systems, and ship production‑grade software.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-400"></span><span>Strong CS fundamentals: algorithms, systems, networks, databases, and security.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-400"></span><span>AI, ML, and data systems integrated with MLOps and scalable infrastructure.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-400"></span><span>Research culture: labs, publications, competitions, and open‑source contributions.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-400"></span><span>Industry integration through co‑taught courses, reviews, internships, and capstones.</span></li>
              </ul>
            </div>

            {/* Right: Visual proof */}
            <div>
              {/* Video block */}
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 shadow-sm">
                <div className="h-full w-full grid place-items-center">
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="grid place-items-center h-10 w-10 rounded-full bg-white ring-1 ring-slate-200 shadow-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                    <span className="text-sm">AI / School of CS & AI concept video</span>
                  </div>
                </div>
              </div>

              {/* Pill badges */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                {[
                  'AI & ML Focus',
                  'Systems & Infrastructure',
                  'Research & Competitions',
                  'Built by Practising Engineers',
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Media / press logos */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-6 sm:gap-8 opacity-80 grayscale">
                  {['The Daily Tech', 'Global Times', 'Code Journal', 'AI Weekly'].map((name) => (
                    <div key={name} className="h-7 sm:h-8 px-3 grid place-items-center rounded-md bg-slate-50 ring-1 ring-slate-200 text-[11px] sm:text-xs text-slate-500">
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
