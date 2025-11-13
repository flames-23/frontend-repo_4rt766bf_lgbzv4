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
import SectionTransition from './components/SectionTransition'

function App() {
  return (
    <div className="min-h-screen bg-[color:var(--ds-white)] text-[color:var(--ds-body-light)]">
      <Navbar />
      <AdmissionsBanner />

      <main>
        {/* Dark hero */}
        <Hero />

        {/* Dark → Light transition */}
        <SectionTransition variant="dark-to-light" size="lg" />

        {/* Light section */}
        <JobGuarantee />

        {/* Light → Dark transition */}
        <SectionTransition variant="light-to-dark" size="md" />

        {/* Dark section */}
        <Placements />

        {/* Dark → Light transition */}
        <SectionTransition variant="dark-to-light" size="md" />

        {/* Light sections block */}
        <Results />
        <About />
        <SchoolCSAI />
        <WhyASCA />
        <Curriculum />
        <Achievers />
        <CampusCarousel />

        {/* Light → Dark transition */}
        <SectionTransition variant="light-to-dark" size="md" />

        {/* Dark section */}
        <Mentors />

        {/* Dark → Light transition */}
        <SectionTransition variant="dark-to-light" size="md" />

        {/* Light → application CTA */}
        <ASeatCTA />
        <Admissions />

        {/* Light → Dark transition for footer area */}
        <SectionTransition variant="light-to-dark" size="lg" />

        {/* Removed AdmissionsCTA section */}
      </main>

      <Footer />
    </div>
  )
}

export default App
