import React from 'react'
import "./Header.css"
import CTA from './CTA';

const Header = () => {
  return (
    <div>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Steve - Mentor</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
    </div>
  )
}

export default Header
