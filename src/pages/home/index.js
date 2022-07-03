import React from 'react'
import './index.css'
import HomeLanding from '../../components/molecules/homeLanding'
import NextPerformances from '../../components/organisms/nextPerformances'
import homeContent3Img from '../../assets/home-content3.png'
import Songs from '../../components/organisms/songs'
import HomeReserveUs from '../../components/organisms/homeReserveUs'
import Footer from '../../components/organisms/footer'

const Home = () => {
  return (
    <div className='home-container' >
      <HomeLanding />
      <NextPerformances />
      
      <div className='home-content3'>
        <img alt='bg' className='home-content3-image' src={homeContent3Img}/>
        <div className='home-content3-image-overlay'>
          <div className='home-content3-text'>
            <h2><p>“</p>Ajoj mala ti u plavoj bluzi,</h2>
            <h2>pridi bliže pa mi se nag...<p>”</p></h2>
            <h4>Lipanj 2015.</h4>
            <h4>B. Č.</h4>

          </div>
        </div>
      </div>
      
      <Songs />

      <HomeReserveUs />

      <Footer />
    </div>

  )
}

export default Home
