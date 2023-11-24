import React, { Component } from "react";
import Slider from "react-slick";
import P_Img from "./images/plan-1.png"

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className="p-slide">
            <img src={P_Img} alt=""></img>
          </div>
          <div className="p-slide">
            <img src={P_Img} alt=""></img>
          </div>
          <div className="p-slide">
            <img src={P_Img} alt=""></img>
          </div>
          <div className="p-slide">
            <img src={P_Img} alt=""></img>
          </div>
          <div className="p-slide">
            <img src={P_Img} alt=""></img>
          </div>
          <div className="p-slide">
            <img src={P_Img} alt=""></img>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="thumbnail">
            <div className="thumbnail-img">
              <img src={P_Img} alt=""></img>
            </div>
          </div>
          <div className="thumbnail">
            <div className="thumbnail-img">
              <img src={P_Img} alt=""></img>
            </div>
          </div>
          <div className="thumbnail">
            <div className="thumbnail-img">
              <img src={P_Img} alt=""></img>
            </div>
          </div>
          <div className="thumbnail">
            <div className="thumbnail-img">
              <img src={P_Img} alt=""></img>
            </div>
          </div>
          <div className="thumbnail">
            <div className="thumbnail-img">
              <img src={P_Img} alt=""></img>
            </div>
          </div>
          <div className="thumbnail">
            <div className="thumbnail-img">
              <img src={P_Img} alt=""></img>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}