import Navbar from './components/Navbar'
import AdmissionsBanner from './components/AdmissionsBanner'
import Hero from './components/Hero'
import WhyASCA from './components/WhyASCA'
import Curriculum from './components/Curriculum'
import CurriculumAllYears from './components/CurriculumAllYears'
import Achievers from './components/Achievers'
import CampusShowcase from './components/CampusShowcase'
import Placements from './components/Placements'
import Admissions from './components/Admissions'
import Mentors from './components/Mentors'
import ASeatCTA from './components/ASeatCTA'
import Footer from './components/Footer'
import JobGuarantee from './components/JobGuarantee'
import Results from './components/Results'
import ComparisonASCA from './components/ComparisonASCA'
import Leadership from './components/Leadership'
import TalentClub from './components/TalentClub'
import AUET from './components/AUET'
import MacbookM5 from './components/MacbookM5'
import SchoolCSAI from './components/SchoolCSAI'
import AdmissionsProcess from './components/AdmissionsProcess'
import USPs from './components/USPs'
import CinematicHall from './components/CinematicHall'
import BuzzAboutUsMinimal from './components/BuzzAboutUsMinimal'

function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[color:var(--ds-body-light)]">
      <Navbar />
      <AdmissionsBanner />

      <main>
        {/* Hero remains as-is */}
        <Hero />

        {/* Order: 1) Hero, 2) Why ASCA, 3) Placements, then Founder video */}
        <WhyASCA />
        <Placements />
        <JobGuarantee />

        {/* Continue with the rest of the flow */}
        {/* Place AUET before results */}
        <AUET />
        <Results />
        <ComparisonASCA />
        <Leadership />
        {/* New USPs section with alternating video + text cards */}
        <USPs />
        {/* Cinematic Achievement Hall in dark theme */}
        <CinematicHall />
        {/* Dedicated School of CS & AI section following Why ASCA */}
        <SchoolCSAI />
        {/* Super-premium MacBook Pro M5 section placed after School of CS and AI */}
        <MacbookM5 />
        {/* Existing interactive curriculum */}
        <Curriculum />
        {/* New light-themed all-years scroller */}
        <CurriculumAllYears />
        {/* Keep Achievers section after the cinematic hall */}
        <Achievers />
        {/* Move Talent Club section right after Achievers */}
        <TalentClub />
        {/* New Admissions & Process section in light theme */}
        <AdmissionsProcess />
        {/* Compact Campus Life showcase with glass cards */}
        <CampusShowcase />
        <Mentors />
        <ASeatCTA />
        <Admissions />

        {/* Buzz about us at the end of the page (above footer) */}
        <BuzzAboutUsMinimal />
      </main>

      <Footer />
    </div>
  )
}

export default App
