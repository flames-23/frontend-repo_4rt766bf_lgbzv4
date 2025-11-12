export default function Admissions() {
  return (
    <section id="admissions-aseat" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-violet-50 p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Admissions via A-SEAT</h2>
            <p className="mt-4 text-lg text-gray-700">Register for A-SEAT, our entrance process assessing fundamentals, reasoning, and builder mindset. Shortlisted candidates proceed to interviews and scholarships.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <input className="col-span-1 rounded-xl border border-blue-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full name" />
              <input type="email" className="col-span-1 rounded-xl border border-blue-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
              <a href="#" className="col-span-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition">Apply via A-SEAT</a>
            </div>

            <p className="mt-4 text-sm text-gray-600">By registering, you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
