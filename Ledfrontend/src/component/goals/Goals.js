
import React from 'react'
import images from '../../constant/images'
import './goals.css'

const Goals = () => {
  return (
    <div className='goals' >
      <div className="header">
        <img src={images.logo1} alt="" />
      </div>
      
        <h1>
          goals we are tackling
        </h1>
        <div className="goals-list">
          <img src={images.goal1} className='goal' alt="" />
          <img src={images.goal2} className='goal' alt="" />
          <img src={images.goal3} className='goal' alt="" />
          <img src={images.goal4} className='goal' alt="" />
          <img src={images.goal5} className='goal' alt="" />
        </div>
    </div>
  )
}

export default Goals