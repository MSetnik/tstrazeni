import React from 'react'
import tstrazeni1 from '../../../assets/tstrazeni-home-1.png'

import './index.css'

const HomeLanding = () => {
  return (
    <div style={{display: 'flex', width: '100%', height: '100%'}}>
      <img alt='tstrazeni' className='home-image-1' src={tstrazeni1}/>

      <div className='home-elipse'>
        <svg width="941" height="853" viewBox="0 0 941 853" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="741.5" cy="358.5" rx="741.5" ry="494.5" fill="url(#paint0_linear_22_334)"/>
          <defs>
          <linearGradient id="paint0_linear_22_334" x1="40" y1="157.5" x2="743.747" y2="957.396" gradientUnits="userSpaceOnUse">
          <stop stop-opacity="0"/>
          <stop offset="1" stop-color="rgba(255,215,2,0.77)" stop-opacity="0.58"/>
          </linearGradient>
          </defs>
        </svg>

        <div className='home-container-1-text'>
            <h2><p className='yellow-letter-home-container-1'>C</p>uri turi, snaši zapraši</h2>
            <h2>tako rade pravi tamburaši</h2>

          </div>
      </div>

      
    </div>

  )
}

export default HomeLanding