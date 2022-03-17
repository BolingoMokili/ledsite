
import React from 'react'

const People = (props) => {
  const {image,text,title} = props
  return (
    <div className='people' >
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default People