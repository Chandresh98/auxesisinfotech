import React from "react";
import Bicycle from "./images/step-1.png"
import Ellipse from "./images/ellipse.png"
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

const Progress_Bar = ({activeStep}) => {


     $(document).ready(function(){
        if(($('.progress-bar ul li').hasClass('active'))){
            $('.progress-bar ul li.active .active-bicycle').show();
            $('.progress-bar ul li.active .ellipse').hide();
         } else{
            $('.active-bicycle').hide();
         }
     });


    return (

        <>
            <div className="progress-bar">
                <h3>Personal Details</h3>
                
                <ul>

                    <li className={activeStep>0?"active":""}>

                        <div className="progress-img">

                            <img src={Bicycle} alt="" className="active-bicycle"></img>
                            <img src={Ellipse} alt="" className="ellipse"></img>
                        </div>

                        <span>Personal Details</span>

                    </li>

                    <li className={activeStep>4?"active":""}>

                        <div className="progress-img">

                        <img src={Bicycle} alt="" className="active-bicycle"></img>
                            <img src={Ellipse} alt="" className="ellipse"></img>

                        </div>

                        <span>Address</span>

                    </li>

                    <li className={activeStep>7?"active":""}>

                        <div className="progress-img">

                        <img src={Bicycle} alt="" className="active-bicycle"></img>
                            <img src={Ellipse} alt="" className="ellipse"></img>

                        </div>

                        <span>Billing</span>

                    </li>

                    <li className={activeStep>8?"active":""}>

                        <div className="progress-img">

                            <img src={Bicycle} alt="" className="active-bicycle"></img>
                            <img src={Ellipse} alt="" className="ellipse"></img>

                        </div>

                        <span>Confirmation</span>

                    </li>

                </ul>
            </div>
        </>

    )
}

export default Progress_Bar;