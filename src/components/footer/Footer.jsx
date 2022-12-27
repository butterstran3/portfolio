import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>BUTTERS</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='www.linkedin.com/in/jimmitran3' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/butterstran3' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/jimmitran3/' target="_blank"><BsInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>@Butters</small>
      </div>
    </footer>
  )
}

export default Footer