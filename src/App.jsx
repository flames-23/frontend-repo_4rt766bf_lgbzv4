import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProgramCards from './components/ProgramCards'
import CampusShowcase from './components/CampusShowcase'
import SchoolCSAI from './components/SchoolCSAI'
import Mentors from './components/Mentors'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <ProgramCards />
        <CampusShowcase />
        <SchoolCSAI />
        <Mentors />

        <section id="admissions" className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Admissions Open 2025</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Merit-first, holistic reviews with scholarships for exceptional talent. Limited seats across flagship programs.
            </p>
            <form className="mt-8 grid gap-3 sm:grid-cols-3 bg-white/70 dark:bg-white/5 backdrop-blur border border-gray-900/10 dark:border-white/10 rounded-2xl p-4">
              <input className="col-span-1 rounded-lg px-4 py-3 bg-white/80 dark:bg-white/10 border border-gray-900/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full name" />
              <input type="email" className="col-span-1 rounded-lg px-4 py-3 bg-white/80 dark:bg-white/10 border border-gray-900/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
              <button type="button" className="col-span-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all">
                Get Prospectus
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
