import React from "react";

const Confirmation = () => {

    return (

        <>
            <div className="step-4 form-box">
                <div className="confirmation-div">
                    <h3>Thank you for joining Wifly</h3>
                    <ul className="pl-3 mb-0">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti .</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti .</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti .</li>
                    </ul>
                </div>
                <button className="common-button1 mt-5 mx-auto justify-content-center"><span>Continue shopping</span></button>
            </div>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Success Popup
            </button>


            <div className="modal fade success-popup" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <i class="fa-regular fa-circle-check"></i>
                            <h2>Successful</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc s aptent taciti .</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Confirmation;