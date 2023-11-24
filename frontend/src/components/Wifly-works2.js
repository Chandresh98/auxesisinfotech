import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Card from "./Wifly-works-cards";
import Wdata from "./Wdata"
import Bicycle from "./images/bicycle-white.png"
import Account from "./images/account.png"
import Home from "./images/home.png"
import Stationary from "./images/stationary.png"
import Money from "./images/money.png"

const Works = () => {

   useEffect( () => {
      AOS.init({duration:2000});
  }, []);

  return (
    <>
      <div className="how-wifly-section section-padding">
        <div className="container">
           <h2 className="main-heading">How Wifly works</h2>
           <div className="row justify-content-center">
              {
                        Wdata.map((val, ind) => {
                            return <Card key={ind} image={val.image} title={val.title} paragraph={val.paragraph} number={val.number} />
                        })
                    }
           </div>
           <div>
              <a href="#" className="common-button1">Choose a vehicle</a>
           </div>
        </div>
      </div>
    </>
  )
}


export default Works;