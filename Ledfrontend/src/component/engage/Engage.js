

import React from 'react'
import { Link } from 'react-router-dom'
import './engage.css'

const Engage = () => {
  return (
    <div className='engage' id='how' >
      <h1 className='text1' >Engage with us</h1>
      <div className="text2">
        <h2 color='#672085' >Do you want to join us in this journey  to empower women and girls?</h2>
      </div>
      

      <div className="link">
        <Link to='' className='links a' >
        • Become a community leader
        </Link>
        <Link to='' className='links a' >
        • Donate to our cause
        </Link>
      </div>
    </div>
  )
}

export default Engage