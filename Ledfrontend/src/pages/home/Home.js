
import React from 'react'
import Banner from '../../component/banner/Banner'
import Engage from '../../component/engage/Engage'
import Goals from '../../component/goals/Goals'
import Impact from '../../component/impact/Impact'
import Mission from '../../component/mission/Mission'
import News from '../../component/news/News'
import Programs from '../../component/programs/Programs'


const Home = () => {
  return (
    <div className='home' >
      <Banner/>
      <hr />
      <Mission/>
      <hr />
      <Programs/>
      <hr />
      <Impact/>
      <hr />
      <Engage/>
      <hr />
      {/* <News/> */}
      <hr />
      <Goals/>
      
    </div>
  )
}

export default Home