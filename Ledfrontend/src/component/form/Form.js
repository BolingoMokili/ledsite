
import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='form' >
      <form action="">
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Email      address</label>
       <input type="email" class="form-control"      id="exampleFormControlInput1" placeholder="name@example.com"/>
     </div>
     <div class="mb-3">
       <label for="exampleFormControlTextarea1"      class="form-label">Example textarea</label>
       <textarea class="form-control"      id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
        <button type="submit" className='formBtn' >
          share story
        </button>
      </form>
    </div>
  )
}

export default Form