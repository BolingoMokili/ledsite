
import React from 'react'
import data from '../../constant/data'
import './what.css'

const What = () => {
  return (
    <div className='what' >
    <h6>our programs</h6>
    <div className="container">

      {
        data.programs.map((pro)=>{
          return (
            <div className="program" key={pro.id} >
              <img src={pro.img} alt={pro.title} className="img" />
              <div className="text">
                <h6>{pro.title}</h6>
                <p>{pro.desc}</p>
              </div>
            </div>
          )
        })
      }
    </div>

    </div>
  )
}

export default What