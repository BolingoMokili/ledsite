

import React from 'react'
// import {FaBar, FaCross} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
  return (
    <div className='navbar' >
     <div className="logo">
        <div className="logo-icon">
          <GoThreeBars/>
           
        </div>
       <h1 >leteh</h1>
       
     </div>
     <div className="nav-links">
       <ul className="links-container">
         <li className="links-home">
         <a href='#home' >
           home 

         </a>
           <ul className="home-links show ">
             <li className="home-link">mission</li>
             <li className="home-link">programs</li>
             <li className="home-link">donate</li>
             <li className="home-link">numbers</li>
             <li className="home-link">contacts</li>
             <li className="home-link">call to engage</li>
             <li className="home-link">news</li>
             <li className="home-link"> <span>sdg</span> tackling </li>
           </ul>
         </li>
         <div  />
         <li className="links-what">
           <a href="#who">
           who we are
           </a>
            
           <ul className="who-links show ">
             <li className="who-link">history</li>
             <li className="who-link">mission</li>
             <li className="who-link">vision</li>
             <li className="who-link">values</li>
             <li className="who-link">team</li>
             <li className="who-link">partners</li>
           </ul>
         </li>
         <div  />
         <li className="links-what">
          <a href="#what">what we do  </a>
           
           <ul className="what-links show ">
             <li className="what-link">programs</li>
             <li className="what-link">be a community leader</li>
             
           </ul>
         </li>
         <div/>
         <li className="links-how">
         <a href="#how">how can we engage</a>
            
           <ul className="how-links show ">
             <li className="how-link">donate</li>
             <li className="how-link">leader in community</li>
             <li className="how-link">jobs</li>
             <li className="how-link">vonlunteers</li>
             <li className="how-link">internship</li>
           </ul>
         </li>
         <div  />
         <li className="links-what">
           updates   
           <ul className="updates-links show ">
             <li className="updates-link">programs</li>
             <li className="updates-link">be a community leader</li>
             <li className="updates-link">be a community leader</li>
           </ul>
         </li>
         <div className='line' />
       </ul>
     </div>
     <div className="">
       <button className="donate-btn">
         donate
       </button>
       {/* <div className="nav-icons">
          <FaBar className='toggle' />
          <FaCross className='close' />
       </div> */}
       
     </div>
    </div>
  )
}

export default Navbar