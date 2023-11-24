import React from "react";
import { useState } from "react";

const Email = ({ setActiveStep }) => {

  const formSubmitHandler = () => {

    setActiveStep(1)

  }


  return (

    <>
      <div className="email-step" >
        <h2 className="main-heading2 mb-3">Login Details</h2>
        <div className="form-box">
          <form onSubmit={formSubmitHandler} className="address-form">
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="email-address">Email Address</label>
                <input type="text"
                       id="email-address"
                       name="email-address"
                       placeholder="Email@gmail.com"
                    />
              </div>
              <div className="col-lg-12">
                <button className="common-button1 mt-4 justify-content-center mx-auto"><span>Continue</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Email;