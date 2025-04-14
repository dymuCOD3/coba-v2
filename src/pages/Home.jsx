import React from 'react'
import LoaderHome from '../components/LoaderHome'
import Hero from '../components/Hero'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import Service from '../components/Service'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <LoaderHome/>
        <Navbar/>
        <Hero/>
        <About/>
        <Work/>
        <Service/>
        <Footer/>
    </>
  )
}

export default Home