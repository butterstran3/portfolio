import React from 'react'
import './portfolio.css'
import TINDOG from '../../assets/tindog.png'
import CV from '../../assets/CV.png'
import SIMON from '../../assets/simon.png'

const data = [
  {
    id: 1,
    image: CV,
    title: "My First CV Website",
    github: "https://github.com/butterstran3",
    demo: "https://butterstran3.github.io/cv/"
  },
  {
    id: 2,
    image: SIMON,
    title: "Simon Says Game",
    github: "https://github.com/butterstran3",
    demo: "https://butterstran3.github.io/simon/"
  },
  {
    id: 3,
    image: TINDOG,
    title: "Tindog",
    github: "https://github.com/butterstran3",
    demo: "https://butterstran3.github.io/tindog/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>View My Growth As A Developer</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio