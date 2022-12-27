import React from 'react'
import './testimonials.css'
import JIX from '../../assets/jix.jpeg'
import GADI from '../../assets/gadi.jpeg'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: JIX,
    name: "Jackson Zhang",
    review: "He's a lil sizzler"
  },
  {
    id: 2,
    avatar: GADI,
    name: "Adithya Gadiraju",
    review: "An expert at DCing"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, avatar, name, review}) => {
            return (
              <SwiperSlide className='testimonial' key={id}>
                <div className='client__image'>
                  <img src={avatar} alt={name}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials