
import React from 'react'
import images from '../../constant/images'
// import './banner.css'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner' >
       <div className="noto-all">
         <img src={images.banner} alt="" />
         <div className="banner-text">
           <h1> <span className="no">no </span> to economic dependence </h1>
           <h1> <span className="no">no </span> to gender based violence </h1>
           <h1> <span className="no">no </span> to teenage pregnancy </h1>
           <h1> <span className="no">no </span> to truncated education </h1>
           <h1> <span className="no">no </span> girl left behind  </h1>
         </div>
       </div>
       <div className="banner-footer">
         <h1>
           transforming the world
         </h1>
         <h4>one woman , one girl at a time </h4>
       </div>
    </div>
  )
}

export default Banner