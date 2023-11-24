import React from "react";
import Banner1 from "./images/banner1.png"
import Banner2 from "./images/banner2.png"
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import Vector from "./images/banner-vector.jpg"
import { useEffect } from "react";


const HeroSection = (props) => {

  useEffect( () => {
    
    $(document).ready(function(){
      var banner = $('.banner-loading');
      setTimeout(function() {
      banner.css({"filter": "blur(0px)", "transition": ".5s all"});
      }, 1000);
    })

  }, [])

  return (
    <>
      {/* <div className="home-banner-section2">
        <div className="container">
          <div className="home-banner-inner2">
            <div className="row">
              <div className="col-lg-6 pl-0">
                <div className="text-center home-banner-left">
                  <h1>Your own light electric vehicle for a monthly subscription!</h1>
                  <p>Move free, we take care of all the hassle. <br/>
Starting at 45€/month</p>
                  <div className="banner-btns2">
                    <a href="#" className="common-button1"><span>Try it free</span></a>
                    <a href="#" className="common-button2"><span>How does it work?</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-banner-right banner-loading">
              <img src={Banner1} alt="" className="banner1"></img>
              <img src={Banner2} alt="" className="banner2"></img>
            </div>
          </div>
        </div>
        <div className="vector-img">
          <img src={Vector} alt="" className=""></img>
        </div>
        <div className="loading-text">
          0%
        </div>
      </div> */}

<div className="home-banner-section2">
        <div className="container">
          <div className="home-banner-inner2">
            <div className="row">
              <div className="col-lg-6 pl-0">
                <div className="text-center home-banner-left">
                  <h1>{props.heading}</h1>
                  <p>{props.paragraph1} <br/> {props.paragraph2} </p>
                  <div className="banner-btns2">
                    <a href="#" className="common-button1"><span> {props.button1} </span></a>
                    <a href="#" className="common-button2"><span> {props.button2} </span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-banner-right banner-loading">
              <img src={Banner1} alt="" className="banner1"></img>
              <img src={Banner2} alt="" className="banner2"></img>
            </div>
          </div>
        </div>
        <div className="vector-img">
          <img src={Vector} alt="" className=""></img>
        </div>
        <div className="loading-text">
          0%
        </div>
      </div>
    </>
  )
}


export default HeroSection;