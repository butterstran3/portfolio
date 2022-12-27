import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avatar1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hi I'm</h5>
            <h1>Jimmy Tran (Butters)</h1>
            <h5 className='text-light'>Software Developer Student</h5>
            <CTA />
            <HeaderSocials />

            <div className='profile__pic'>
                <img className='me' src={ME} alt='me' />
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header