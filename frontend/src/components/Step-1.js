import React from "react";
import Email from "./Email-Step";
import Email_Register from "./Email-Register";
import Unregister_User from "./Unregister-User";
import Personal_details from "./Personal-Details";
import DNI from "./DNI-Instruction";
import { useState } from "react";

const Step_1 = () => {
    const[activeStep,setActiveStep]= useState(0)


  return (

    <>
      {activeStep == 0 && <Email  setActiveStep={setActiveStep}/>}
      {activeStep == 1 && <Email_Register setActiveStep={setActiveStep}/>}
      {activeStep == 2 && <Unregister_User setActiveStep={setActiveStep}/>}
      {activeStep == 3 && <Personal_details setActiveStep={setActiveStep}/>}
      {activeStep == 4 && <DNI setActiveStep={setActiveStep}/>}
    </>

  )
}

export default Step_1;