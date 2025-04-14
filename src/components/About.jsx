import React from 'react'
import "../styles/about.css"

function About() {
  return (
    <section className='about' id='about'>
      <div className="aboutTypo">
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
      </div>
      <div className="aboutContent">
        <h1 className='aboutInfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate.</h1>
        <a className='aboutButton' href='#'>Read More About Me <i class="uil uil-arrow-up-right"></i></a>
      </div>
    </section>
  )
}

export default About