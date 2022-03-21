
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' >
      <div className="left">
        <div className="top">
          <h6>address</h6>
          <p>ndobo bonaberi</p>
          <p>douala , cameroon</p>
        </div>
        <div className="bottom">
          <h6>contact us</h6>
          <p>telephone number +237 671 106 368</p>  
          <p><span className="email">email</span> <a href="" className="link">hello@led.mmuock.org</a> </p>
        </div>
      </div>
      <div className="middle">
        <div className="who">
          <h6>who we are</h6>
          <ul>
            <li><a href="#">history</a></li>
            <li><a href="#">mission</a></li>
            <li><a href="#">team</a></li>
            <li><a href="#">partners</a></li>
          </ul>
        </div>
        <div className="what">
          <h6>what we do</h6>
          <ul>
            <li><a href="#">programs</a></li>
            <li><a href="#">be a community leader</a></li>
            {/* <li><a href="#">team</a></li>
            <li><a href="#">partners</a></li> */}
          </ul>
        </div>
        <div className="how">
          <h6>who we are</h6>
          <ul>
            <li><a href="#">donate</a></li>
            <li><a href="#">jobs</a></li>
            <li><a href="#">leader in community</a></li>
            <li><a href="#">internship</a></li>
            <li><a href="#">volunteer</a></li>
          </ul>
        </div>
        <div className="who">
          <h6>who we are</h6>
          <ul>
            <li><a href="#">on the news</a></li>
            <li><a href="#">reports</a></li>
            <li><a href="#">event gattheries</a></li>
            {/* <li><a href="#">partners</a></li> */}
          </ul>
        </div>
      </div>
      <div className="right">
        <button className="donate">
          donate
        </button>
        <div className="inner">
          
        </div>
      </div>
    </div>
  )
}

export default Footer