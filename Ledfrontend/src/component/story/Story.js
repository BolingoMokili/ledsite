

import React, { useState } from 'react'
import images from '../../constant/images'
import Form from '../form/Form'
import './story.css'

const Story = () => {

  const [form,setForm] = useState(false)

  const popUp = ()=>{
    const tell = document.querySelector('.tell')
    // console.log('story');
    setForm(!form)
  }
  return (
    <div className='story' >
      <h6 className="help">need help</h6>
      <h6 onClick={()=> popUp()} className="tell">tell us your story</h6>
      <div className="bottom">
        <div className="img">
        <img src={images.logo} alt=""   />
         
        </div>
        <p className="note">Note: This is the bottom of the site</p>
      </div>

      {form  && <Form/> }
    </div>
  )
}

export default Story