import React from 'react'

import './index.css'
import HomeLanding from '../../components/molecules/homeLanding'
import NextPerformances from '../../components/organisms/nextPerformances'

const Home = () => {
  return (
    <div className='home-container' >
      <HomeLanding />

      <NextPerformances />

      
    </div>

  )
}

export default Home
