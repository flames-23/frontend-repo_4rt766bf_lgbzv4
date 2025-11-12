import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Programs', href: '#programs' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Campus', href: '#campus' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl/50 bg-white/60 dark:bg-neutral-900/60 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="font-semibold text-gray-900 dark:text-white tracking-tight">
              NextGen B.Tech College
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700/80 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#admissions" className="inline-flex items-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-all">
              Apply Now
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#admissions" onClick={() => setOpen(false)} className="rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 text-center text-sm font-medium shadow-sm">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
