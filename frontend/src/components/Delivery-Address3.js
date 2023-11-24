import React from "react";
import CountryDropdown from 'country-dropdown-with-flags-for-react';

const Delivery_Address3 = ({setActiveStep}) => {

    const formSubmitHandler=()=>{

        setActiveStep(8)
    
      }

    return (

        <>
            <div className="delivery-address" >
            <h2 className="main-heading2 mb-2">Delivery Address</h2>
                <div className="del-form3 form-box">
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
                                <div className="form-check radio-input">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label className="form-check-label" for="exampleRadios2">
                                        Pickup
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-12 choose-address">
                                <div className="all-address">
                                    <div className="single-address">
                                        <div className="form-check radio-input">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                            <label className="form-check-label" for="exampleRadios3">
                                                <h6>Store name</h6>
                                                <p>Crta. Cádiz-Málaga 39 Torralba del Pinar, Castellón(CS), 12225 684 956 932</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="single-address">
                                        <div className="form-check radio-input">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
                                            <label className="form-check-label" for="exampleRadios4">
                                                <h6>Store name</h6>
                                                <p>C/ Manuel Iradier 78 Adsubia, Alicante(A), 03786 656 004 772</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="single-address">
                                        <div className="form-check radio-input">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option5" />
                                            <label className="form-check-label" for="exampleRadios5">
                                                <h6>Store name</h6>
                                                <p>C/ Manuel Iradier 78 Adsubia, Alicante(A), 03786 656 004 772</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="single-address">
                                        <div className="form-check radio-input">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="option6" />
                                            <label className="form-check-label" for="exampleRadios6">
                                                <h6>Store name</h6>
                                                <p>C/ Manuel Iradier 78 Adsubia, Alicante(A), 03786 656 004 772</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="number">Choose pickup date</label>
                                <input type="date" id="number" name="number" />
                            </div>
                            <div className="col-lg-12">
                                <div className="terms my-0">
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

export default Delivery_Address3;