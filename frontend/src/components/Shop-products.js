import React from "react";
import Product1 from "./images/product1.png"
import p_1 from "./images/read.png"
import p_2 from "./images/bolt.png"
import p_3 from "./images/speedometer.png"
import p_4 from "./images/hypoallergenic.png"
import Product_Detail from './Product_Detail';
import axios from "./strapi"
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Shop_products = () => {


    const [error, setError] = useState(null);
    const [Products, setProducts] = useState([]);
    const navigate =useNavigate()    


    useEffect(() => {
        axios
            .get("/api/products?populate=*")
            .then(({ data }) => setProducts(data.data))
            .catch((error) => setError(error));
    }, []);

    if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
    }



    return (
        <>
            <div className="shop-products">
                <div className="row">


                {Products.map((product) => { 
                    const imageUrl = `http://localhost:1337/${Image.data.url}`;
                        <div className="col-lg-4">
                            <div className="single-product" key={product.id}>
                                <div className="single-product-top">
                                    <span>{product.attributes.Type}</span>
                                </div>
                                <div className="single-product-bottom">
                                    <div className="single-product-img">
                                        {/* {product.attributes.Image.data.attributes}
                                        <img src={product.attributes.Image} alt=""></img> */}
                                        <img src={imageUrl} alt=""></img>
                                    </div>
                                    <div className="qualites">
                                        <div className="qualities-img">
                                            <img src={p_1} alt=""></img>
                                            <span>Foldable</span>
                                        </div>
                                        <div className="qualities-img">
                                            <img src={p_2} alt=""></img>
                                            <span>Fast Charging</span>
                                        </div>
                                        <div className="qualities-img">
                                            <img src={p_3} alt=""></img>
                                            <span>LED display</span>
                                        </div>
                                        <div className="qualities-img">
                                            <img src={p_4} alt=""></img>
                                            <span>Lightweight</span>
                                        </div>
                                    </div>
                                    {/* <div className="qualites">
                                    {Products.map((product, Feature_Name) => ( 
                                           
                                        <div className="qualities-img">
                                            <img src={p_1} alt=""></img>
                                            <span>{Feature_Name}</span>
                                        </div>
                                    ))}
                                    </div> */}
                                    
                                    <div className="product-btn">
                                        <a href="#" className="common-button1">
                                            <span>Subcribe now</span>
                                        </a>
                                        <h4 onClick={()=>navigate(`/product-page/${product.id}`,{state:{id:product.id}})}  className="mb-0 common-button2">
                                            <span>Get more info</span>
                                        </h4>
                                    </div>
                                    <h5>{product.attributes.Name}</h5>
                                    <p>Starting at <strong>${product.attributes.Price}/mo</strong>.</p>
                                    {product.attributes.Color}
                                    <div className="change-color mt-4">
                                        <div className="form-check pl-0 white">
                                            <input type="radio" id="white" />
                                        </div>
                                        <div className="form-check pl-0 black">
                                            <input type="radio" id="black" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Routes>
                                <Route
                                    path="/product-page/:id"
                                    render={({ match }) => (
                                        <Product_Detail
                                            product={Products.find(
                                                (product) => String(product.id) === match.params.id
                                            )}
                                        />
                                    )}
                                />
                            </Routes>
                        </div>
                    })}


                </div>
            </div>
        </>
    )
}


export default Shop_products;