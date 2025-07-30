import React from 'react'
import Navbar from './shared/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import CatagoryCorouscomponent from './CatagoryCorouscomponent.jsx'
import LatestJob from './LatestJob.jsx'
import Footer from './shared/Footer.jsx'
import usegetAllJobs from '@/hooks/usegetAllJobs.jsx'

const Home = () => {
  usegetAllJobs();
  return (
    <div>
      <Navbar />
       <HeroSection />
       <CatagoryCorouscomponent />
       <LatestJob />
       <Footer />
    </div>
  )
}

export default Home
