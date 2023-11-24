import React from "react";
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import Card from "./Timeline-cards";
import Tdata from "./Tdata"

const Timeline_plans = () => {

    useEffect( () => {
        AOS.init({duration:2000});
    }, []);

    useEffect( () => {
    
        $(window).scroll(function() { 
            $('.timeline-step').removeClass("active");
            var scroll = $(window).scrollTop();
            if(scroll>=550){
                $('#act1').addClass("active");
                // $('#act1 .dataos').attr({
                //     'data-aos': 'fade-right'
                //   });
            }
             if(scroll>=650){
                $('#act2').addClass("active");
                // $('#act2 .dataos').attr({
                //     'data-aos': 'fade-left'
                //   });
            }
            if(scroll>=800){
                $('#act3').addClass("active");
                // $('#act3 .dataos').attr({
                //     'data-aos': 'fade-right'
                //   });
            }
            if(scroll>=950){
                $('#act4').addClass("active");
                // $('#act4 .dataos').attr({
                //     'data-aos': 'fade-left'
                //   });
            }
            if(scroll>=1150){
                $('#act5').addClass("active");
                // $('#act5 .dataos').attr({
                //     'data-aos': 'fade-right'
                //   });
            }
        }); 
    
      }, [])

    return (
        <>
          <div className="timeline_plans section-padding">
             <div className="container">
                <div className="timeline_plans-outer">
                    {
                        Tdata.map((val, ind) => {
                            return <Card key={ind} image={val.image} title={val.title} paragraph={val.paragraph} Id={val.Id} />
                        })
                    }
                    <div className="mt-5">
                        <a href="#" className="common-button1 mx-auto "><span>See the bikes</span></a>
                    </div>
                </div>
             </div>
          </div>
        </>
     )
}

export default Timeline_plans;