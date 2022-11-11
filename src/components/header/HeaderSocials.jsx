import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub, FaMedium } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sezer-%C3%B6kmen/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/szrokmn" target="_blank"><FaGithub/></a>
        <a href="https://medium.com/@szrokmn34/about" target="_blank"><FaMedium/></a>
    </div>
  )
}

export default HeaderSocials