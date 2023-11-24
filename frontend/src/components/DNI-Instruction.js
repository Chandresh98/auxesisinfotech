import React from "react";
import CountryDropdown from 'country-dropdown-with-flags-for-react';

const DNI = ({ setActiveStep }) => {
    const formSubmitHandler = () => {

        setActiveStep(5)

    }

    return (

        <>
            <div className="dni-instructions">
                <h2 className="main-heading2 mb-2">DNI Instructions</h2>
                <div className="form-box">
                    <form className="address-form" onSubmit={formSubmitHandler}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. </p>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="number">ID</label>
                                <input type="number" id="number" name="number" placeholder="Enter your ID details" />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="number">Date of Birth</label>
                                <input type="date" id="number" name="number" />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="Nationality">Nationality</label>
                                <CountryDropdown id="country-select" className='country-dropdown' preferredCountries={['gb', 'us']} value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="firstname">ID Photo 1</label>
                                <div className="file-field">
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="lastname">ID Photo 2</label>
                                <div className="file-field">
                                    <input type="file" className="form-control-file" id="exampleFormControlFile2" placeholder="Upload Image" />
                                </div>
                            </div>
                        </div>
                        <button className="common-button1 mt-5 mx-auto justify-content-center"><span>Next</span></button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default DNI;