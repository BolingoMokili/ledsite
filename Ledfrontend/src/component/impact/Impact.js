
import React from 'react'
import './impact.css'

const Impact = () => {
  return (
    <div className='impact' >
      <div className="text">
        <h2>our impact reach in cameroon</h2>
        <div className="main">

          <div className="impacts">
            <div className="circle">
              <h3>5</h3>
              <h5>regions</h5>
            </div>
            
            <ul className="links">
              <li>bafoussam ,west region</li>
              <li>yaounde, center region</li>
              <li>douala , littoral reigion</li>
              <li>bamenda , north west region</li>
              <li>Mmuock leteh , south west region</li>
            </ul>
          </div>
          <div className="impacts">
            <div className="circle">
               <h3>25</h3>
              <h5>people impacted directly</h5>
            </div>
            <ul className="links">
              <li>20 women capicity building</li>
              <li>20 men/women on covid</li>
            </ul>
          </div>
          <div className="impacts">
            <div className="circle">
               <h3>2</h3>
              <h5 className='' >programs</h5>
            </div>
            <ul className="links">
              <li>women training</li>
              <li>covid prevention and care sensitisation</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Impact