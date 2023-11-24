import React from "react";
import P_Img from "./images/speedometer.png"
import P_Img2 from "./images/read.png"
import P_Img3 from "./images/hypoallergenic.png"
import P_Img4 from "./images/bolt.png"

const Features = () => {
    return (
        <>
            <div className="features section-padding">
                <div className="container">
                <h2 className="main-heading2">Features</h2>
                    <div className="features-outer">
                        <div className="row">
                           <div className="col-lg-3">
                              <div className="features-single">
                                  <div className="icon-img">
                                     <img src={P_Img} alt=""></img>
                                  </div>
                                  <h5>LED display</h5>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="features-single">
                                  <div className="icon-img">
                                     <img src={P_Img2} alt=""></img>
                                  </div>
                                  <h5>Foldable</h5>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="features-single">
                                  <div className="icon-img">
                                     <img src={P_Img3} alt=""></img>
                                  </div>
                                  <h5>Lightweight</h5>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="features-single">
                                  <div className="icon-img">
                                     <img src={P_Img4} alt=""></img>
                                  </div>
                                  <h5>Fast Charging</h5>
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
}

export default Features;