import React from "react";
import Plans1 from "./images/plans.png"
import Vector from "./images/vector2.png"

const Service_Plans = () => {

   const Basic = ["Quarterly checks", "Theft coverage", "Parts warranty", "Purchase option", "Minimum stay: 6 months", "Max. km: 400 km / month"]

   const Resut1 = Basic.map((basic)=><li><i className="fa-solid fa-check"></i> {basic} </li>)

   const Premium = ["Basic +", "2 quarterly breadown fixings", "Roadside assistance", "Spare parts", "Substitution vehicle", "Minimum stay: 3 months", "Max. km: 600 km / month"]

   const Resut2 = Premium.map((premium)=><li><i className="fa-solid fa-check"></i> {premium} </li>)

   const Professional = ["Premium +", "Monthly checks", "Unlimited km", "No minimum stay", "Workshop priority", "Improved purchase option"]

   const Resut3 = Professional.map((professional)=><li><i className="fa-solid fa-check"></i> {professional} </li>)

    return (
        <>
            <div className="service-plans-section section-padding">
                <div className="container">
                    <div className="service-plans-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 pl-0">
                                <div className="plans-left">
                                    <h2 className="main-heading text-left w-100">Service plans</h2>
                                    <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#basic" role="tab" aria-controls="basic" aria-selected="true">Basic</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="premium-tab" data-toggle="tab" href="#premium" role="tab" aria-controls="premium" aria-selected="false">Premium</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="professional-tab" data-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">Professional</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content mt-5" id="myTabContent">
                                        <div className="tab-pane fade show active" id="basic" role="tabpanel" aria-labelledby="basic-tab">
                                            <ul className="pl-0">
                                                {Resut1}
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="premium" role="tabpanel" aria-labelledby="premium-tab">
                                            <ul className="pl-0">
                                                 {Resut2}
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                            <ul className="pl-0">
                                                 {Resut3}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <a href="#" className="common-button1"><span>See plans & pricing</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 pr-0">
                                <div className="plans-right text-right">
                                    <img src={Plans1} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="vector-img">
                    <img src={Vector} alt="" className=""></img>
                </div> */}
            </div>
        </>
    )
}


export default Service_Plans;