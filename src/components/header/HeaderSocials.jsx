import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='www.linkedin.com/in/jimmitran3' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/butterstran3' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/jimmitran3/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials