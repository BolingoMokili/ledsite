
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
        <div className="whowe">
          <h6>who we are</h6>
          <ul>
            <li><a href="#">history</a></li>
            <li><a href="#">mission</a></li>
            <li><a href="#">team</a></li>
            <li><a href="#">partners</a></li>
          </ul>
        </div>
        <div className="whatwe">
          <h6>what we do</h6>
          <ul>
            <li><a href="#">programs</a></li>
            <li><a href="#">be a community leader</a></li>
            {/* <li><a href="#">team</a></li>
            <li><a href="#">partners</a></li> */}
          </ul>
        </div>
        <div className="howwe">
          <h6>who we are</h6>
          <ul>
            <li><a href="#">donate</a></li>
            <li><a href="#">jobs</a></li>
            <li><a href="#">leader in community</a></li>
            <li><a href="#">internship</a></li>
            <li><a href="#">volunteer</a></li>
          </ul>
        </div>
        <div className="whowe">
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
          <ul className="list">
            <li>momo</li>
            <li>$20</li>
            <li><span className="xaf" >xaf</span>10000</li>
          </ul>
          <ul className="list">
            <li>orange money</li>
            <li>$50</li>
            <li><span className="xaf">xaf</span>25000</li>
          </ul>
          <ul className="list">
            <li>world remit</li>
            <li>$100</li>
            <li><span className="xaf">xaf</span>50000</li>
          </ul>
          <ul className="list">
            <li>paypal</li>
            <li>$500</li>
            <li><span className="xaf">xaf</span>10000</li>
          </ul>
          <ul className="list last">
            <li>my $amount</li>
            <li>my <span className="xaf">xaf</span>amout </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer