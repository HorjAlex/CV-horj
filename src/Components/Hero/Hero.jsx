import React from 'react'
import './Hero.css'
import profile_img from '../../assets/IMG_2495.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Alexandru Horj,</span> Quality Assurance Manual Engineer</h1>
      <div className="hero-action">
      </div>
    </div>
  )
}

export default Hero
