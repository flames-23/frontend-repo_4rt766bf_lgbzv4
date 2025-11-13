import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Admissions & Fees', href: '#admissions-aseat' },
    { label: 'Placements++', href: '#placements', new: true },
    { label: 'Recognition', href: '#recognition', new: true },
    { label: 'Our Students', href: '#students' },
    { label: 'FAQs', href: '#faqs' },
  ]

  return (
    <header className="sticky top-0 z-50 relative bg-white/90 backdrop-blur border-b border-black/10 shadow-[0_2px_12px_rgba(17,24,39,0.06)]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-[2px]" style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-[88px]">
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-3">
              <span className="relative inline-flex items-center justify-center">
                <span className="p-[2px] rounded-xl" style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))' }}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white ring-1 ring-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_16px_rgba(17,24,39,0.06)]">
                    <Shield className="h-6 w-6" style={{ color: 'var(--ds-blue)' }} />
                  </span>
                </span>
              </span>
              <span className="leading-tight select-none">
                <span className="block text-[14px] font-extrabold tracking-tight text-[color:var(--ds-body-light)]">ALGO UNIVERSITY</span>
                <span className="block text-[12px] subtext">School of CS & AI</span>
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-7 whitespace-nowrap">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight transition-colors whitespace-nowrap text-[color:var(--ds-body-light)]"
              >
                <span className="border-b-2 border-transparent group-hover:text-[color:var(--ds-blue)]">
                  {item.label}
                </span>
                {item.new && (
                  <span className="inline-flex -ml-1 items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white" style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))' }}>
                    New
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 pr-1 sm:pr-2 md:pr-3 lg:pr-4">
            <a
              href="#admissions-aseat"
              className="hidden md:inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-white text-[15px] font-semibold tracking-tight ring-1 ring-white/10 hover:scale-[1.03] transition-transform"
              style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))', boxShadow: '0 10px 28px rgba(79,140,255,0.35), 0 6px 16px rgba(154,111,255,0.25)' }}
            >
              Apply Now
            </a>

            <button
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-[color:var(--ds-body-light)] hover:bg-black/5 ring-1 ring-black/10 shadow-[0_2px_8px_rgba(17,24,39,0.06)]"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl border-l border-black/10 transform transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between px-4 h-20 border-b border-black/10">
            <div className="flex items-center gap-3">
              <span className="p-[2px] rounded-lg" style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))' }}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-white ring-1 ring-black/10">
                  <Shield className="h-5 w-5" style={{ color: 'var(--ds-blue)' }} />
                </span>
              </span>
              <div className="leading-tight">
                <div className="text-[13px] font-extrabold text-[color:var(--ds-body-light)]">ALGO UNIVERSITY</div>
                <div className="text-[11px] subtext">School of CS & AI</div>
              </div>
            </div>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--ds-body-light)] hover:bg-black/5"
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
                    className="flex items-center justify-between rounded-md px-3 py-2 text-[15px] font-semibold text-[color:var(--ds-body-light)] hover:bg-black/5"
                  >
                    <span>{item.label}</span>
                    {item.new && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white" style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))' }}>
                        New
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a
                href="#admissions-aseat"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-white text-[15px] font-semibold tracking-tight"
                style={{ backgroundImage: 'linear-gradient(90deg, var(--ds-blue), var(--ds-violet))', boxShadow: '0 10px 28px rgba(79,140,255,0.35), 0 6px 16px rgba(154,111,255,0.25)' }}
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
