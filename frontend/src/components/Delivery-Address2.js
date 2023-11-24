import React from "react";

const Delivery_Address2 = ({ setActiveStep }) => {

    const formSubmitHandler = () => {

        setActiveStep(7)

    }

    return (

        <>
            <div className="delivery-address d-2">
                <h2 className="main-heading2 mb-2">Delivery Address</h2>
                <div className="del-form2 form-box">
                    <form className=" p-0" onSubmit={formSubmitHandler}>
                        <div className="address-form address mb-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <label>Address</label>
                                    <div className="form-check radio-input">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                        <label className="form-check-label" for="exampleRadios1">
                                            Crta. Cádiz-Málaga 39
                                            Torralba del Pinar, Castellón(CS), 12225
                                            684 956 932
                                        </label>
                                    </div>
                                    <div className="form-check radio-input">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2">
                                            C/ Manuel Iradier 78
                                            Adsubia, Alicante(A), 03786
                                            656 004 772
                                        </label>
                                    </div>
                                    <button className="common-button2 mt-3 mx-auto justify-content-center"><span>Add new address</span></button>
                                </div>
                            </div>
                        </div>
                        <div className=" address-form">
                            <div className="row">
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
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Delivery_Address2;