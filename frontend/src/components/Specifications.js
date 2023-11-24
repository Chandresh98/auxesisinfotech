import React from "react";
import axios from "./strapi"
import { useEffect, useState } from "react";

const Specifications = ({product}) => {

    return (
        <>
            <div className="specifications section-padding bg-gray">
                <div className="container">
                    <div className="specifications-outer">
                        <h2 className="main-heading2 text-left">Specifications</h2>
                        <div>
                            <div className="single-specification">
                                <span><strong>Size</strong></span>
                                <div className="specification-right">
                                    <p>{product?.attributes?.Size}</p>
                                </div>
                            </div>
                            <div className="single-specification">
                                <span><strong>Weight</strong></span>
                                <div className="specification-right">
                                    <p>{product?.attributes?.Weight}</p>
                                </div>
                            </div>
                            <div className="single-specification">
                                <span><strong>Power</strong></span>
                                <div className="specification-right">
                                    <p>{product?.attributes?.Power}</p>
                                </div>
                            </div>
                            <div className="single-specification">
                                <span><strong>Battery Life</strong></span>
                                <div className="specification-right">
                                    <p>{product?.attributes?.Battery_Life}</p>
                                </div>
                            </div>
                            <div className="single-specification">
                                <span><strong>Components</strong></span>
                                <div className="specification-right">
                                    {product?.attributes?.Components}
                                </div>
                            </div>
                            <div className="single-specification">
                                <span><strong>Tire Size</strong></span>
                                <div className="specification-right">
                                    <p>{product?.attributes?.Tire_Size}</p>
                                </div>
                            </div>
                            <div className="single-specification">
                                <span><strong>Additional Features</strong></span>
                                <div className="specification-right">
                                    {product?.attributes?.Additional_Features}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specifications;