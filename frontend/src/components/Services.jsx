import React from 'react';
import './new-style.css'
import Questions from './Questions';
import Plans1 from "./images/plans.png"
import All_services from './All-service-plans'

const Services = () => {
    return (
          <>
          <div className='body-inner pt'>
            <All_services/>
            <Questions heading={'Still have question?'} button1={'Send us a message'} button2={'Check our FAQ'} image={Plans1} />
            </div>
          </>
    )

 }

 export default Services;