import React from "react";
import product1 from "./images/plan-1.png"

const Product_data = () => {
    return (

        <>
            <div className="form-right-middle bg-gray">
            <h3 className="text-center mb-4">Monthly Charge</h3>
                <div className="top">
                    <div className="top-img">
                        <img src={product1} alt=""></img>
                    </div>
                    <div>
                        <h4><strong>Littium | </strong>Ibiza</h4>
                        <div className="color mt-4">
                            <div className="change-color">
                                <div className="form-check pl-0 white">
                                     <input type="radio" id="white"/>
                                     <label>Color</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <ul className="pl-0 mb-0">
                        <li>
                            <div>
                                <h4 className="mb-0"><strong>Wifly |</strong> Premium service</h4>
                                <p>Copy per month</p>
                            </div>
                                <span><strong>72 €</strong></span>
                        </li>
                        <li>
                            <div>
                                <h4 className="mb-0">Helmet</h4>
                                <p>Copy per month</p>
                            </div>
                                <span><strong>72 €</strong></span>
                        </li>
                        <li className="top-line">
                            <div>
                                <h4 className="mb-0"><strong>Total</strong></h4>
                                <p>Copy per month</p>
                            </div>
                                <span><strong>82 €</strong></span>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Product_data;