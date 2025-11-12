export default function AdmissionsCTA() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 p-6 sm:p-7 bg-white/5 backdrop-blur-xl grid md:grid-cols-3 gap-5 items-center shadow-[0_12px_36px_-16px_rgba(59,130,246,0.25)]">
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold">Ready to shape the future of engineering?</h3>
            <p className="mt-1.5 text-gray-300">Join the 4-year B.Tech in CS & AI built by engineers from Google, Microsoft & Apple.</p>
          </div>
          <div className="flex md:justify-end">
            <a href="#admissions-aseat" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-5 py-2.5 font-semibold text-white shadow-lg hover:shadow-xl transition">Apply via A-SEAT</a>
          </div>
        </div>
      </div>
    </section>
  )
}
