import { useState } from 'react'

const photos = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop'
]

export default function CampusCarousel() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % photos.length)
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)

  return (
    <section id="campus-life" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Campus Life</h2>
          <p className="mt-3 text-lg text-gray-700">Labs, hackathons, clubs, and a vibrant community.</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-200">
          <div className="relative" style={{ aspectRatio: '16 / 9' }}>
            <img src={photos[index]} className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button onClick={prev} className="rounded-full bg-white/80 backdrop-blur px-4 py-2 text-gray-900 shadow">Prev</button>
            <button onClick={next} className="rounded-full bg-white/80 backdrop-blur px-4 py-2 text-gray-900 shadow">Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}
