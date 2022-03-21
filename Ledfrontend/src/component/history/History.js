

import React from 'react'
import images from '../../constant/images'
import './history.css'

const History = () => {
  return (
    <div className='history' >
      <div className="left">
        <h4> history</h4>
        <p className="one">
        Created in 2019, LED is a non-profit, non-governmental organization in Cameroon that is aimed at empowering women and girls to become active players in nation building through innovative capacity building strategies. We believe that when you empower a woman, you empower a nation
        </p>
        <p className="two">
        LED objective is building capacity for women and girls creating a ripple effect of women empowering others to become economically independent. Helping women overcome financial dependency helps curb gender based violence, poverty, encourage education and good health.
        </p>
      </div>
      <div className="right">
       <img src={images.history} alt="" />
      </div>
    </div>
  )
}

export default History