import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Admissions & Fees', href: '#admissions' },
    { label: 'Placements++', href: '#placements', new: true },
    { label: 'Recognition', href: '#recognition', new: true },
    { label: 'Our Students', href: '#students' },
    { label: 'FAQs', href: '#faqs' },
  ]

  return (
    <header className="sticky top-0 z-50 relative bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200 shadow-[0_2px_12px_rgba(17,24,39,0.06)]">
      {/* Faint top glow to match hero lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-sky-400/60 via-blue-500/50 to-violet-500/60 opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-[88px]">
          {/* Left – Logo (rounded card aesthetic) */}
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-3">
              <span className="relative inline-flex items-center justify-center">
                {/* Gradient border container with soft rounding to match hero cards */}
                <span className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_8px_20px_rgba(79,70,229,0.15)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white ring-1 ring-slate-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_16px_rgba(17,24,39,0.06)]">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </span>
                </span>
              </span>
              <span className="leading-tight select-none">
                <span className="block text-[14px] font-extrabold tracking-tight text-[#111827]">ALGO UNIVERSITY</span>
                <span className="block text-[12px] text-slate-600">School of CS & AI</span>
              </span>
            </a>
          </div>

          {/* Center – Menu items (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative inline-flex items-center gap-2 text-[15px] font-semibold text-[#111827] tracking-tight transition-colors"
              >
                <span className="border-b-2 border-transparent group-hover:border-blue-500/70 group-hover:text-blue-700">
                  {item.label}
                </span>
                {item.new && (
                  <span className="inline-flex -ml-1 items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-[0_6px_18px_rgba(59,130,246,0.35)]">
                    New
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right – Primary CTA + Hamburger */}
          <div className="flex items-center justify-end gap-3 pr-1 sm:pr-2 md:pr-3 lg:pr-4">
            {/* Apply Now – matches hero CTA */}
            <a
              href="#admissions"
              className="hidden md:inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-white text-[15px] font-semibold tracking-tight shadow-[0_10px_28px_rgba(79,70,229,0.35),0_6px_16px_rgba(59,130,246,0.25)] ring-1 ring-white/10 hover:shadow-[0_14px_36px_rgba(79,70,229,0.45),0_10px_24px_rgba(59,130,246,0.35)] transition-transform duration-150 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Apply Now
            </a>

            <button
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100/80 ring-1 ring-slate-200/70 shadow-[0_2px_8px_rgba(17,24,39,0.06)]"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-out panel */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between px-4 h-20 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <span className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 to-violet-500">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-white ring-1 ring-slate-200/80">
                  <Shield className="h-5 w-5 text-blue-600" />
                </span>
              </span>
              <div className="leading-tight">
                <div className="text-[13px] font-extrabold text-[#111827]">ALGO UNIVERSITY</div>
                <div className="text-[11px] text-slate-600">School of CS & AI</div>
              </div>
            </div>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-3 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-md px-3 py-2 text-[15px] font-semibold text-[#111827] hover:bg-slate-50"
                  >
                    <span>{item.label}</span>
                    {item.new && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-[0_6px_18px_rgba(59,130,246,0.35)]">
                        New
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3.5 text-white text-[15px] font-semibold tracking-tight shadow-[0_10px_28px_rgba(79,70,229,0.35),0_6px_16px_rgba(59,130,246,0.25)] ring-1 ring-white/10 hover:shadow-[0_14px_36px_rgba(79,70,229,0.45),0_10px_24px_rgba(59,130,246,0.35)]"
              >
                Apply Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
