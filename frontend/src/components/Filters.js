import React from "react";
import F_Img1 from "./images/type.png"
import F_Img2 from "./images/price-tag.png"
import F_Img3 from "./images/fast.png"
import F_Img4 from "./images/arrows.png"

const Filters = () => {
    return (
        <>
            <div className="Filters">
                <h4>Filters</h4>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                            <img src={F_Img1} alt=""></img> Types of bike <i className="fa fa-minus"></i>
                            </a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body FiltersInner">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>City
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>All terrain
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>Mountain
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                            <img src={F_Img2} alt=""></img> Price/Month <i className="fa fa-minus"></i>
                            </a>
                        </div>
                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                            <div className="card-body FiltersInner">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>City
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>All terrain
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>Mountain
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree"><img src={F_Img3} alt=""></img>
                            Range <i className="fa fa-minus"></i>
                            </a>
                        </div>
                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                        <div className="card-body FiltersInner">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>City
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>All terrain
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>Mountain
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour"><img src={F_Img4} alt=""></img>
                            Foldable <i className="fa fa-minus"></i>
                            </a>
                        </div>
                        <div id="collapseFour" className="collapse" data-parent="#accordion">
                        <div className="card-body FiltersInner">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>City
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>All terrain
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value=""/>Mountain
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="reset-btn">Reset</button>
                </div>
            </div>
        </>
    )
}


export default Filters;