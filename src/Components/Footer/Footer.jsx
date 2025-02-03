import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import profile_img from '../../assets/bug.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>I am a QA Manual Engineer from Romania with 5+ years of experience in national & international companies.</p>
        </div>
       <div id='footerfoto' className='foto'>
             <img src={profile_img} alt="" className='profile-img' />
       </div> 
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Horj Alexandru. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
