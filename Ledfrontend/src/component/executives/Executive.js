
// import { data } from 'cypress/types/jquery'
import React from 'react'
// import {executives} from '../../constant/data'
import data from '../../constant/data'

const Executive = () => {
  return (
    <div className='executives' >
       {
         data.executives.map((exe, index)=>{
           <div className="executive"  key={exe.id} >
             <div className="pic">
               <img src={exe.img} alt={exe.lastName} />
             </div>
             <div className="text">
               <h5>
                 <span className="fName">{exe.firstName}</span>
                 <span className="lName">{exe.lastName}</span>
               </h5>
               <h6>
                 {exe.post}
               </h6>
             </div>
           </div>
         })
       }
    </div>
  )
}

export default Executive