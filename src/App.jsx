import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import Details from './components/Details'
import Features from './components/Features'
import Help from './components/Help'
import GetCerto from './components/GetCerto'
import LatestInsights from './components/LatestInsights'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className=''>
        <Navbar />
        <Hero />
        <Testimonial />
        <Details />
        <Features />
        <Help />
        <GetCerto />
        <LatestInsights />
        <Footer/>
      </div>
    </>
  )
}

export default App
