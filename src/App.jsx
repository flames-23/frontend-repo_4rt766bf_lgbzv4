import Navbar from './components/Navbar'
import AdmissionsBanner from './components/AdmissionsBanner'
import Hero from './components/Hero'
import About from './components/About'
import WhyASCA from './components/WhyASCA'
import Curriculum from './components/Curriculum'
import Achievers from './components/Achievers'
import CampusCarousel from './components/CampusCarousel'
import Placements from './components/Placements'
import Admissions from './components/Admissions'
import AdmissionsCTA from './components/AdmissionsCTA'
import SchoolCSAI from './components/SchoolCSAI'
import Mentors from './components/Mentors'
import ASeatCTA from './components/ASeatCTA'
import Footer from './components/Footer'
import JobGuarantee from './components/JobGuarantee'
import Results from './components/Results'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 relative">
      {/* Ambient gradient glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <Navbar />
      <AdmissionsBanner />

      <main>
        <Hero />
        {/* Move Job Guarantee section directly after Hero */}
        <JobGuarantee />
        <About />
        {/* School of CS & AI follows About */}
        <SchoolCSAI />
        <WhyASCA />
        <Curriculum />
        <Achievers />
        <CampusCarousel />
        <Placements />
        <Results />
        <Mentors />
        <ASeatCTA />
        <Admissions />
        <AdmissionsCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
