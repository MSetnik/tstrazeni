import React from 'react'
import tstrazeni1 from '../../../assets/tstrazeni-home-1.png'

import './index.css'

const HomeLanding = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', zIndex: 1}}>
      <img alt='tstrazeni' className='home-image-1' src={tstrazeni1}/>

      <div className='home-landing-overlay'>
      </div>

      <div className='home-elipse'>
          {/* <svg width="1920" height="1211" viewBox="0 0 1920 1211" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1920" height="1211" fill="url(#paint0_radial_59_142)"/>
            <defs>
            <radialGradient id="paint0_radial_59_142" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1582 476) rotate(-168.515) scale(994.412 1576.61)">
            <stop stop-color="#FFD702" stop-opacity="0.29"/>
            <stop offset="1" stop-opacity="0.21"/>
            </radialGradient>
            </defs>
          </svg> */}


          <div className='home-container-1-text'>
              <h2><p className='yellow-letter-home-container-1'>C</p>uri turi, snaši zapraši</h2>
              <h2>tako rade pravi tamburaši</h2>

            </div>
      </div>

      

      
    </div>

  )
}

export default HomeLanding
