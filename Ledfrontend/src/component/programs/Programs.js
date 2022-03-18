
import React from 'react'
import images from '../../constant/images'
import Program from '../card/Program'
import './program.css'

const Programs = () => {
  return (
    <div className='programs' >
      <Program title="education for all" pic={images.education} text="We organise campaigns aimed at
keeping girls in school. We also
organise training courses with
women. The course areas of focus
include communication, leadership
skills, finance management,
negotiation skills, use of social media,
branding and networking." />
      <Program title="women economic empowerment" pic={images.economic} text="Created in 2019, LED is a non-profit, nongovernmental organization in Cameroon that is
aimed at empowering women and girls to
become active players in nation building
through innovative capacity building strategies.
We believe that when you empower a woman,
you empower a nation." />
      <Program title="capacity building  training" pic={images.training} text="LED objective is building capacity for
women and girls creating a ripple effect
of women empowering others to
become economically independent.
Helping women overcome financial
dependency helps curb gender based
violence, poverty, encourage education
and good health." />
      
    </div>
  )
}

export default Programs