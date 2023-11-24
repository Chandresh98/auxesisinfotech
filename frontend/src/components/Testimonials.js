import React from "react";
import Testimonial from "./images/testimonial-left.jpg"
import Slider_data from "./Slider-data";
import Testimonial_slider from "../components/Slider";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };


    return (
        <>
            <div className="testimonials-section">
                <div className="testimonials-inner row mx-0">
                    <div className="col-lg-6 pl-0">
                        <div className="h-100 testimonial-img w-100">
                            <img src={Testimonial} alt=""></img>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-slider section-padding">
                            <h2 className="main-heading w-100">Hear it from our customers!</h2>
                            <Slider {...settings}>
                            {
                                Slider_data.map((val, ind) => {
                                    return <Testimonial_slider key={ind} image={val.image} testimonial={val.testimonial} name={val.name} Id={val.Id} />
                                })
                            }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Testimonials;