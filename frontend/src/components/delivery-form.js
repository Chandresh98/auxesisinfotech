import React, { useState } from "react";
import Delivery_Address2 from "./Delivery-Address2";
import DNI from "./DNI-Instruction";
import Confirmation from "./Confirmation";
import Progress_Bar from "./Progress-Bar";
import Summary from "./Summary";
import Product_data from "./Product-Data";
import Email from "./Email-Step";
import Email_Register from "./Email-Register";
import Unregister_User from "./Unregister-User";
import Personal_details from "./Personal-Details";
import Delivery_Address1 from "./Delivery-Address";
import Delivery_Address3 from "./Delivery-Address3";
import Billing from "./Payment"

const Form = () => {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <>
            <div className="form-section">
                <div className="container">
                    <div>
                        {activeStep>0  && <a onClick={()=>setActiveStep(count=>count-1)} href="#" className="back-btn"><i className="fa-solid fa-chevron-left"></i>back</a>}
                    </div>
                    <div className="form-outer">
                        <div className="row">
                            <div className="col-lg-6 pl-0">
                                <div className="form-left">
                                    <div>
                                        {activeStep == 0 && <Email setActiveStep={setActiveStep} />}
                                        {activeStep == 1 && <Email_Register setActiveStep={setActiveStep} />}
                                        {activeStep == 2 && <Unregister_User setActiveStep={setActiveStep} />}
                                        {activeStep == 3 && <Personal_details setActiveStep={setActiveStep} />}
                                        {activeStep == 4 && <DNI setActiveStep={setActiveStep} />}
                                        {activeStep == 5 && <Delivery_Address1 setActiveStep={setActiveStep} />}
                                        {activeStep == 6 && <Delivery_Address2 setActiveStep={setActiveStep} />}
                                        {activeStep == 7 && <Delivery_Address3 setActiveStep={setActiveStep} />}
                                        {activeStep == 8 && <Billing setActiveStep={setActiveStep} />}
                                        {activeStep == 9 && <Confirmation setActiveStep={setActiveStep} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pr-0">
                                <div className="form-right">
                                    <Progress_Bar activeStep={activeStep} />
                                    <Product_data/>
                                    <Summary activeStep={activeStep}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;