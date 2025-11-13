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
    <div className="min-h-screen bg-[color:var(--ds-white)] text-[color:var(--ds-body-light)]">
      <Navbar />
      <AdmissionsBanner />

      <main>
        <Hero />
        {/* Job Guarantee section followed immediately by Placements and Results */}
        <JobGuarantee />
        <Placements />
        <Results />
        <About />
        {/* School of CS & AI follows About */}
        <SchoolCSAI />
        <WhyASCA />
        <Curriculum />
        <Achievers />
        <CampusCarousel />
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
