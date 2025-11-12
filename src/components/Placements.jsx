export default function Placements() {
  const stats = [
    { label: 'Average CTC', value: '25 LPA' },
    { label: 'Highest CTC', value: '80 LPA' },
    { label: 'Hiring Partners', value: '1,300+' },
    { label: 'Internship Rate', value: '100%' },
  ]

  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/31/Meta_Platforms_Inc._logo.svg',
  ]

  return (
    <section id="placements" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Placements & Outcomes</h2>
            <p className="mt-3 text-base text-gray-300">Ship real products, publish research, and join high-growth teams. Our network opens doors across product, research, and quant.</p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                  <div className="text-xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
              {logos.map((src, i) => (
                <div key={i} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <img src={src} alt="Logo" className="max-h-8 object-contain invert contrast-75" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_16px_44px_-20px_rgba(124,58,237,0.25)]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="Students placed at top companies" className="w-full h-[340px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
