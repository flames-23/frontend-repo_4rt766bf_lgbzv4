export default function AdmissionsCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 p-8 bg-white grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">Ready to shape the future of engineering?</h3>
            <p className="mt-2 text-gray-700">Join the 4-year B.Tech in CS & AI built by engineers from Google, Microsoft & Apple.</p>
          </div>
          <div className="flex md:justify-end">
            <a href="#admissions-aseat" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition">Apply via A-SEAT</a>
          </div>
        </div>
      </div>
    </section>
  )
}
