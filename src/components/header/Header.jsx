import React from 'react'
import "./Header.css"
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Steve - Mentor</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="contact" className='scroll__down'>Scroll Down</a>
      </div>
    
  )
}

export default Header
