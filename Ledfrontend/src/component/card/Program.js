
import React from 'react'
import './card.css'

const Program = (props) => {
  const {pic,text,title} = props
  return (
     <div className="program">
       <div className="img">
         <img src={pic} alt="" />
       </div>
       <div className="desc">
         <h2>{title}</h2>
         <p>{text}</p>
       </div>
     </div>
  )
}

export default Program