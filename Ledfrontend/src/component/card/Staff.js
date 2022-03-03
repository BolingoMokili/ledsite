
import React from 'react'

const Staff = ( props ) => {
  const {image,post,firstName, lastName}
  return (
    <div className='staff' >
      <img src={image} alt="" />
      <h2>{firstName}
        <span>{lastName}</span>
      </h2>
      <h4>{lastName}</h4>
    </div>
  )
}

export default Staff