import React from "react";
import CountryDropdown from 'country-dropdown-with-flags-for-react';

const Delivery_Address1 = ({setActiveStep}) => {

    const formSubmitHandler=()=>{

        setActiveStep(6)
    
      }

    return (

        <>
            <div className="delivery-address">
                <h2 className="main-heading2 mb-2">Delivery Address</h2>
                <div className="del-form1 form-box">
                    <form className=" address-form" onSubmit={formSubmitHandler}>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="number">Country</label>
                                <CountryDropdown id="country-select" className='country-dropdown' preferredCountries={['gb', 'us']} value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="number">Address</label>
                                <input type="text" id="number" name="number" />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="number">Zip Code</label>
                                <input type="date" id="number" name="number" />
                            </div>
                            <div className="col-lg-12">
                                <label>Shipping Method</label>
                                <div className="form-check radio-input">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" for="exampleRadios1">
                                        Delivered
                                    </label>
                                </div>
                                <div className="delivery-fee">
                                    <span>Delivery fee </span>
                                    <span>€ 10 </span>
                                </div>
                                <div className="form-check radio-input">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label className="form-check-label" for="exampleRadios2">
                                        Pickup
                                    </label>
                                </div>
                                <div className="terms">
                                    <div className="form-check checkinput">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Accept Terms & Conditions
                                        </label>
                                    </div>
                                    <div className="form-check checkinput">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Accept to receive marketing communications
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="common-button1 mt-3 mx-auto justify-content-center"><span>Next</span></button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Delivery_Address1;