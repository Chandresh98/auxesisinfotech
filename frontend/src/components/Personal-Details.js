import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState, useEffect } from "react";

const Personal_details = ({ setActiveStep }) => {

  const formSubmitHandler = () => {

    setActiveStep(4)

  }

  const [Country, setCountry] = useState('us');
  const [Number, setNumber] = useState('initialState');
  useEffect(() => {

  }, [Number]);

  return (

    <>
      <div className="personal-details">
      <h2 className="main-heading2 mb-3">Personal Details</h2>
        <div className="form-box">
          <form className=" address-form" onSubmit={formSubmitHandler}>
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" />
              </div>
              <div className="col-lg-6">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" />
              </div>
              <div className="col-lg-12">
                <PhoneInput
                  country={Country}
                  onChange={(value) => { setNumber(value) }}
                  countryCodeEditable={false}
                />
              </div>
              <div className="col-lg-12">
                <button className="common-button1 mt-4 justify-content-center mx-auto"><span>Next</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Personal_details;