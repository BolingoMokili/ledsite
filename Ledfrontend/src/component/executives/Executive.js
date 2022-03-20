
// import { data } from 'cypress/types/jquery'
import React from 'react'
// import {executives} from '../../constant/data'
import data from '../../constant/data'
import './executive.css'

const Executive = () => {
  return (
    <div className='executives' >
       {
         data.executives.map((exe, index)=>{
           return(
          <div className="main">
           <div className="executive"  key={exe.id} >
             <div className="pic">
              <div className="rect"></div>
               <img src={exe.img} alt={exe.lastName} />
             </div>
             <div className="text">
               <h6 className='names' >
                 <span className="fName">{exe.firstName}</span>
                 <span className="lName">{exe.lastName}</span>
               </h6>
               <h6 className='pos' >
                 {exe.post}
               </h6>
             </div>
             
           </div>
          </div>
         )})
       }
       {/* <h1>Hello world</h1> */}
       {/* <div className="pic">
         <img src={img} alt="" />
       </div>
       <div className="text">
         <h6 className='names' >
           <span className="fn">{firstName}</span>
           <span className="ln">{lastName}</span>
         </h6>
       </div> */}
    </div>
  )
}

export default Executive