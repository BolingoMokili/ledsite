
import React from 'react'
import data from '../../constant/data'
import './what.css'

const What = () => {
  return (
    <div className='what' >
      {
        data.programs.map((pro)=>{
          return (
            <div className="program" key={pro.id} >
              <img src={pro.img} alt={pro.title} className="img" />
              <div className="text">
                <h5>{pro.title}</h5>
                <p>{pro.desc}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default What