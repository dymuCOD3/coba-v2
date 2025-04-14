import React from 'react'
import "../styles/footer.css"
import Picture from "../assets/poster.jpg"
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section id='footer'>   
        <div className="footerText">
            <img src={Picture}></img>
            <span>Come join us!</span>
        </div>
        <div className="footerLink">
            <a href=''>Email Me</a>
            <a href=''>Whatsapp Me</a>
            <Link to="/more-info">More Contact</Link>
        </div>
        <div className="footerSosmed">
            <a href='#'>Instagram</a>
            <a href='#'>YouTube</a>
            <a href='#'>LnkedIn</a>
            <a href='#'>Facebook</a>
        </div>
    </section>
  )
}

export default Footer