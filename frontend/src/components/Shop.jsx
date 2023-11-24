import React from "react";
import Filters from "./Filters";
import Shop_products from "./Shop-products";

const Shop = () => {
    return (
        <>
            <div className='body-inner pt'>
                <div className="shop-page section-padding">
                    <div className="container-fluid px-3">
                        <div className="shop-page-inner">
                            <h2 className="main-heading">Your own eBike in exchange for a monthly subscription</h2>
                            <div className="row mt-5 pt-5">
                                <div className="col-lg-3 pl-0">
                                    <Filters/>
                                </div>
                                <div className="col-lg-9 pr-0">
                                    <Shop_products/>
                                </div>
                                <div className="col-lg-12">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className="pre"><i className="fa-solid fa-chevron-left"></i></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true" className="next-page"><i className="fa-solid fa-chevron-right"></i></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                        </li>
                                    </ul>
                                </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Shop;