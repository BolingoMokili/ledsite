
import React from 'react'
import Banner from '../../component/banner/Banner'
import Impact from '../../component/impact/Impact'
import Mission from '../../component/mission/Mission'
import Programs from '../../component/programs/Programs'


const Home = () => {
  return (
    <div className='home' >
      <Banner/>
      <Mission/>
      <Programs/>
      <Impact/>
      
    </div>
  )
}

export default Home