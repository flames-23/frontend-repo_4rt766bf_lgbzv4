import SectionHeading from './SectionHeading.jsx'

export default function Placements() {
  const stats = [
    { label: 'Average Salary', value: '25 LPA' },
    { label: 'Average Stipend', value: '₹75K / month' },
    { label: 'Hiring Partners', value: '1,300+' },
    { label: 'International Offers', value: '15+' },
  ]

  const carouselLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/Tesla_Motors.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7e/Stripe_Logo%2C_revised_2016.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/19/Uber_2018_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Airbnb_Logo_B%C3%A9lo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/21/LinkedIn_logo_initials.png',
    'https://upload.wikimedia.org/wikipedia/commons/2/29/NVIDIA_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/01/Intel_logo_%282020%2C_dark_blue%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Logo_OpenAI.svg',
  ]

  return (
    <section id="placements" className="py-12 sm:py-14 bg-[#F7F8FB]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <SectionHeading
            title="Placements & Outcomes"
            subtitle="Real offers. Real outcomes. A network that opens doors."
            align="center"
            theme="light"
            size="md"
          />
        </div>

        {/* Compact stats row */}
        <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-3 sm:p-4 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-3 py-3 sm:px-4 sm:py-4 ${i % 2 === 0 ? '' : ''}`}>
                <div className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">{s.value}</div>
                <div className="mt-0.5 text-xs sm:text-sm text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slim logo marquee */}
      <div className="mt-8 overflow-hidden">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F7F8FB] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F7F8FB] to-transparent" />

          <div className="flex min-w-max gap-8 sm:gap-10" style={{ animation: 'marquee 55s linear infinite' }}>
            {[...carouselLogos, ...carouselLogos].map((src, i) => (
              <div key={i} className="shrink-0 flex items-center justify-center px-6 py-4">
                <img
                  src={src}
                  alt="Partner logo"
                  className="h-6 sm:h-7 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
