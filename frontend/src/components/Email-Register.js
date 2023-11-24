import React, { useState } from "react";
import Show from "./images/show.png"
import Hide from "./images/hide.png"

const Email_Register = ({ setActiveStep }) => {

  const [show1, setShow1] = useState(false);

  const handleShow1 = () => {
    setShow1(!show1)
  }

  const formSubmitHandler = () => {

    setActiveStep(2)

  }


  return (

    <>
      <div className="email-register" >
        <h2 className="main-heading2 mb-3">Login Details</h2>
        <div className="form-box">
          <form onSubmit={formSubmitHandler} className="address-form">
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="email-address">Email Address</label>
                <input type="mail" id="email-address" name="email-address" placeholder="Email@gmail.com"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="password">Password</label>
                <div className="password-outer">
                  <input type={show1 ? "text" : "password"} id="confirm-password" name="confirm-password"  />
                  <div className="show-hide">
                    <span onClick={handleShow1} >
                      {show1 ? (
                        <img src={Hide} alt=""></img>
                      ) : (
                        <img src={Show} alt=""></img>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 text-right">
                <a href="#">Forgot Password</a>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="common-button1 mt-4 justify-content-center mx-auto"><span>Next</span></button>
              </div>
            </div>
          </form>
        </div>
      </div >
    </>

  )
}

export default Email_Register;