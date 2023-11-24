import React from "react";

const Summary = ({activeStep}) => {
    return (

        <>
          {
            activeStep < 9 &&
            <div className="form-right-bottom">
                <h3 className="text-center">Initial Payment</h3>
                <ul className="pl-0 mb-0">
                     <li><strong>Helmet</strong> <span>€10</span></li>
                    <li><strong>Gloves</strong> <span>€72</span></li>
                    <li><strong>Delivery fee</strong> <span><strong>€10</strong></span></li>
                    <li className="top-line"><strong>Sub Total</strong> <span><strong>€72</strong></span></li>
                    <li>One time deposit (Lithium)  <span><strong>€100</strong></span></li>
                    <li><strong>Total</strong> <span><strong>€82</strong></span></li>
                </ul>
            </div>
          }

          {
            activeStep == 9 && 
            <div className="form-right-bottom">
                <h3 className="text-center mb-4">Delivery Address</h3>
                <p>
                Iker Casillas
                </p>
                <p>123 Gran Villa</p>
                <p>
                28013 Madrid ESP
                </p>
            </div>
            }
        </>

    )
}

export default Summary;