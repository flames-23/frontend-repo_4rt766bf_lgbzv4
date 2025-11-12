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
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <AdmissionsBanner />

      <main>
        <Hero />
        <About />
        <WhyASCA />
        <Curriculum />
        <Achievers />
        <CampusCarousel />
        <Placements />
        <SchoolCSAI />
        <Mentors />
        <Admissions />
        <AdmissionsCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
