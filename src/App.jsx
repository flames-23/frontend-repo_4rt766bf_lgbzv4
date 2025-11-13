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
import Leadership from './components/Leadership'
import TalentClub from './components/TalentClub'
import AUET from './components/AUET'

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
        {/* Place AUET before results */}
        <AUET />
        <Results />
        <About />
        <SchoolCSAI />
        <ComparisonASCA />
        <Leadership />
        <WhyASCA />
        <Curriculum />
        <Achievers />
        {/* Move Talent Club section right after Achievers */}
        <TalentClub />
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
