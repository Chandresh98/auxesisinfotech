import React from "react";

const Billing = ({ setActiveStep }) => {

    const formSubmitHandler = () => {

        setActiveStep(9)

    }

    return (

        <>
            <div className="step-3">
                <h2 className="main-heading2 mb-2">Payment</h2>
                <div className="form-box">
                    <form onSubmit={formSubmitHandler} className="p-0">
                        <div className="payment p-0">
                            <div className="payment-top">
                                <h5 className="mb-0">Deposite</h5>
                            </div>
                            <div className="payment-detail">
                                <ul className="pl-0 mb-0">
                                    <li><strong>Subtotal</strong> <span><strong>€ 72</strong></span></li>
                                    <li><strong>Delivery fee</strong> <span><strong>€ 10</strong></span></li>
                                    <li><strong> Total</strong> <span><strong>€ 82</strong></span></li>
                                </ul>
                                <div>
                                    <button className="common-button1 mt-5 mx-auto justify-content-center"><span>Subscribe</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="mt-5">
                            <div className="payment">
                                <h5>Terms & Conditions</h5>
                                <ul className="pl-4 mb-0 mt-4">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </>

    )
}

export default Billing;