import React from 'react'
import './about.css'
import ME from '../../assets/avatar2.jpg'
import {BsAwardFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Education</h5>
              <small>Bachelor's Degree in Finance and Economics</small>
            </article>

            <article className='about__card'>
              <BsAwardFill className='about__icon'/>
              <h5>Skills</h5>
              <small>Web Development and Python</small>
            </article>

          </div>

        <p>
          Hi!! I'm Jimmy, but feel free to call me Butters.
          I've been studying software development since mid-2022.
          My highest level of education was a Bachelor's Degree at Monash University where I majored in Finance and Economics.
          After I graduated, I worked in the bank (CBA and ANZ) for around 3 years.
          Although I am still interested in the economics and finance field, I fell in love with computer science/programming.
          I'm currently still working on improving my skills in this field so please feel free to follow my growth as a programmer.
          My hobbies include playing video games, watching Netflix/Anime (I'm a HUGE weeb) and sports.
          Please don't hesitate to reach out to me regarding any of my work... or if you're also a weeb and want to discuss anime!!
        </p>

        <div className='btn__container'>
          <a href='#contact' className='btn btn-primary'>Let's Talk!!</a>
        </div>

        </div>
      </div>
    </section>
  )
}

export default About