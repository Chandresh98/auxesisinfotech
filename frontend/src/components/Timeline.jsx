import React from 'react';
import Timeline_banner from './Timeline-banner'
import './new-style.css'
import Questions from './Questions';
import Timeline_plans from './Timeline-plan';
import Cycle from "./images/timeline-banner.png"
import Plans1 from "./images/plans.png"



const Home = () => {
    return (
          <>
          <div className='body-inner'>
            <Timeline_banner heading={'As easy as a TV subscription'}  paragraph={'Register online in less than 2 minutes and choose if you want to test the vehicles in our stores or receive it at home.'} image={Cycle} />
            <Timeline_plans/>
            <Questions heading={'Still have question?'} button1={'Send us a message'} button2={'Check our FAQ'} image={Plans1} />
            </div>
          </>
    )

 }

 export default Home;