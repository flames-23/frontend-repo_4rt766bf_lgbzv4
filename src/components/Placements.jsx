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
    <section id="placements" className="py-16 bg-[#F5F7FA]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Heading */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <SectionHeading
            title="Placements & Outcomes"
            subtitle="Ship real products, publish research, and join high-growth teams. Our network opens doors across product, research, and quant."
            align="center"
            theme="light"
            size="lg"
          />
        </div>

        {/* 4 stat cards - equal width and spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-[#111827]">{s.value}</div>
              <div className="mt-1 text-sm text-[#4B5563]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width logo carousel strip (edge to edge, no container card) */}
      <div className="mt-12 overflow-hidden">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F5F7FA] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F5F7FA] to-transparent" />

          <div className="flex gap-10 sm:gap-12 min-w-max" style={{ animation: 'marquee 40s linear infinite' }}>
            {[...carouselLogos, ...carouselLogos].map((src, i) => (
              <div key={i} className="shrink-0 flex items-center justify-center px-8 py-5">
                <img src={src} alt="Partner logo" className="h-7 sm:h-8 object-contain opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
