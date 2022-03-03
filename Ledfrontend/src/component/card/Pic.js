
import React from 'react'

const Pic = (props) => {
  const {logo,text,number} = props
  return (
    <div className='goal' >
      <div className="head">

      </div>
      <img src={logo} alt="" />
    </div>
  )
}

export default Pic