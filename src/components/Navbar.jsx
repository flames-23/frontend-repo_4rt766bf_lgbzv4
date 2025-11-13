import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Admissions & Fees', href: '#admissions' },
    { label: 'Placements++', href: '#placements', new: true },
    { label: 'Recognition', href: '#recognition', new: true },
    { label: 'Campus Life', href: '#campus' },
    { label: 'Events', href: '#events' },
    { label: 'Our Students', href: '#students' },
    { label: 'FAQs', href: '#faqs' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/100 border-b border-gray-200 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Left – Logo */}
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Shield className="h-6 w-6" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold tracking-wide text-gray-900">ALGO UNIVERSITY</span>
                <span className="block text-[12px] text-gray-500">School of CS & AI</span>
              </span>
            </a>
          </div>

          {/* Center – Menu items (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative inline-flex items-center gap-2 text-[16px] font-medium text-[#374151] transition-colors"
              >
                <span className="border-b-2 border-transparent group-hover:border-blue-500 group-hover:text-blue-600">
                  {item.label}
                </span>
                {item.new && (
                  <span className="inline-flex -ml-1 items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white bg-gradient-to-r from-[#2563EB] to-[#60A5FA] shadow-sm">
                    New
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right – Primary CTA + Hamburger */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="#admissions"
              className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-white text-[16px] font-bold bg-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:bg-[#1e4fd0] transition-transform duration-150 hover:scale-[1.02]"
            >
              Apply Now
            </a>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
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
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-white">
                <Shield className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-[13px] font-bold text-gray-900">ALGO UNIVERSITY</div>
                <div className="text-[11px] text-gray-500">School of CS & AI</div>
              </div>
            </div>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
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
                    className="flex items-center justify-between rounded-md px-3 py-2 text-[15px] font-medium text-[#374151] hover:bg-gray-50"
                  >
                    <span>{item.label}</span>
                    {item.new && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
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
                className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-white text-[16px] font-bold bg-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:bg-[#1e4fd0]"
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
