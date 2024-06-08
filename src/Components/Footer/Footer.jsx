import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'




const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, mollitia dolor? Officiis repellat magni, non voluptates officia deserunt. Error quia necessitatibus tenetur nostrum qui repellat vero soluta. Itaque, soluta ducimus.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>9037383903</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copy rights 2024 Tomato.com -All rights Reservesd</p>
    </div>
  )
}

export default Footer
