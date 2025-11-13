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
import SchoolCSAI from './components/SchoolCSAI'
import Mentors from './components/Mentors'
import ASeatCTA from './components/ASeatCTA'
import Footer from './components/Footer'
import JobGuarantee from './components/JobGuarantee'
import Results from './components/Results'
import ComparisonASCA from './components/ComparisonASCA'

function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[color:var(--ds-body-light)]">
      <Navbar />
      <AdmissionsBanner />

      <main>
        {/* Hero remains as-is */}
        <Hero />

        {/* Clean, hard-cut section transitions: simply stack sections */}
        <JobGuarantee />
        <Placements />
        <Results />
        <About />
        <SchoolCSAI />
        <ComparisonASCA />
        <WhyASCA />
        <Curriculum />
        <Achievers />
        <CampusCarousel />
        <Mentors />
        <ASeatCTA />
        <Admissions />
      </main>

      <Footer />
    </div>
  )
}

export default App
