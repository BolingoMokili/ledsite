
import React from 'react'
import images from '../../constant/images'
import Program from '../card/Program'
import './program.css'

const Programs = () => {
  return (
    <div className='programs' >
      <Program title="education for all" pic={images.education} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia libero omnis consequatur numquam ab in at eos, minima ducimus adipisci accusantium. Ipsam, blanditiis incidunt nulla dignissimos reiciendis libero laborum commodi dolore dolores sit quidem quis facere explicabo tempore adipisci nemo. Dignissimos odio minus laudantium corporis doloremque quam voluptates quod." />
      <Program title="women economic empowerment" pic={images.economic} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia libero omnis consequatur numquam ab in at eos, minima ducimus adipisci accusantium. Ipsam, blanditiis incidunt nulla dignissimos reiciendis libero laborum commodi dolore dolores sit quidem quis facere explicabo tempore adipisci nemo. Dignissimos odio minus laudantium corporis doloremque quam voluptates quod." />
      <Program title="capacity building  training" pic={images.training} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia libero omnis consequatur numquam ab in at eos, minima ducimus adipisci accusantium. Ipsam, blanditiis incidunt nulla dignissimos reiciendis libero laborum commodi dolore dolores sit quidem quis facere explicabo tempore adipisci nemo. Dignissimos odio minus laudantium corporis doloremque quam voluptates quod." />
      
    </div>
  )
}

export default Programs