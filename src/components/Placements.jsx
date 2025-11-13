export default function Placements() {
  const stats = [
    { label: 'Average CTC', value: '25 LPA' },
    { label: 'Highest CTC', value: '80 LPA' },
    { label: 'Hiring Partners', value: '1,300+' },
    { label: 'Internship Rate', value: '100%' },
  ]

  const gridLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/31/Meta_Platforms_Inc._logo.svg',
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
    <section id="placements" className="section-dark py-16">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Placements & Outcomes</h2>
            <p className="mt-3 text-base text-white/70">Ship real products, publish research, and join high-growth teams. Our network opens doors across product, research, and quant.</p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl glass-card p-4 text-center">
                  <div className="text-xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 text-sm text-white/80">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
              {gridLogos.map((src, i) => (
                <div key={i} className="flex items-center justify-center rounded-xl glass-card p-4 relative overflow-hidden">
                  <img src={src} alt="Logo" className="max-h-8 object-contain invert contrast-75 opacity-90" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden glass-card">
              <img src="https://images.unsplash.com/photo-1757691079287-eb6a8d167287?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkZW50cyUyMHBsYWNlZCUyMGF0JTIwdG9wfGVufDB8MHx8fDE3NjI5NTU4NTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Students placed at top companies" className="w-full h-[340px] object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-12 relative">
          <div aria-hidden className="absolute -inset-x-6 -inset-y-3 mx-auto max-w-7xl rounded-[28px]" style={{ backgroundImage: 'linear-gradient(90deg, color-mix(in srgb, var(--ds-blue) 12%, transparent), color-mix(in srgb, var(--ds-violet) 12%, transparent))' }} />

          <div className="relative rounded-3xl glass-card px-4 sm:px-6 py-8 sm:py-10 overflow-hidden">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight accent-text">
                Active Partnerships with 1300+ Companies
              </h3>
              <p className="text-sm text-white/80">
                A living network across product, research, AI, and quant.
              </p>
            </div>

            <div className="mt-6 relative overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-16" style={{ backgroundImage: 'linear-gradient(to_right, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent)' }} />
              <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-16" style={{ backgroundImage: 'linear-gradient(to_left, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent)' }} />

              <div className="flex gap-8 min-w-max" style={{ animation: 'marquee 36s linear infinite' }}>
                {[...carouselLogos, ...carouselLogos].map((src, i) => (
                  <div key={i} className="shrink-0 flex items-center justify-center rounded-2xl glass-card px-6 py-4">
                    <img src={src} alt="Partner logo" className="h-7 sm:h-8 object-contain grayscale contrast-100 brightness-110 opacity-90" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
