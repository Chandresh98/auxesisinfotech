import React, { useState } from "react";
import Show from "./images/show.png"
import Hide from "./images/hide.png"
import {useFormik} from "formik";
import { unregisterUser } from "../schemas";

const Unregister_User = ({ setActiveStep }) => {

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show)
  }

  const [show1, setShow1] = useState(false);

  const handleShow1 = () => {
    setShow1(!show1)
  }
  const formHandler = () => {

    setActiveStep(3)

  }


  // const initialValues = {
  //   email: "",
  //   password: "",
  //   confirm_password: "",
  // }

  //  const {values, errors, handleBlur, handleChange, touched, handleSubmit} =   useFormik({
  //   initialValues: initialValues,
  //   validationSchema: unregisterUser,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   }
  // })

  return (

    <>
      <div className="" >
        <h2 className="main-heading2 mb-3">Login Details</h2>
        <div className="form-box">
          <form onSubmit={formHandler} className="address-form">
            <div className="error-div">
            <i class="fa-solid fa-circle-xmark"></i><p className="mb-0">Upload and verification failed please try again.</p>
            </div>
            <div className="warning-div">
            <i class="fa-solid fa-triangle-exclamation"></i><p className="mb-0">Upload and verification failed please try again.</p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" name="email" placeholder="Email@gmail.com" className="error-box"/>
                <p className="error"> Email can’t be blank </p>
                
                {/* {errors.email && touched.email ? (
                    <p className="error"> {errors.email} </p>
                ) : null} */}
              </div>
              <div className="col-lg-12">
                <label htmlFor="password">Create Password</label>
                <div className="password-outer">
                  <input type={show1 ? "text" : "password"} id="password" name="password"/>
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
                {/* {errors.password && touched.password ? (
                    <p className="error"> {errors.password} </p>
                ) : null} */}
              </div>
              <div className="col-lg-12">
                <label htmlFor="confirm_password">Confirm Password</label>
                <div className="password-outer">
                  <input type={show ? "text" : "password"} id="confirm_password" name="confirm_password"/>
                  <div className="show-hide">
                    <span onClick={handleShow} >
                      {show ? (
                        <img src={Hide} alt=""></img>
                      ) : (
                        <img src={Show} alt=""></img>
                      )}
                    </span>
                  </div>
                </div>
                {/* {errors.confirm_password && touched.confirm_password ? (
                    <p className="error"> {errors.confirm_password} </p>
                ) : null} */}
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

export default Unregister_User;