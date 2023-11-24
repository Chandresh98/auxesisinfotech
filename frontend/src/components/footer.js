import React from "react";
import flogo from "./images/flogo.png"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="row">
                            <div className="col-lg-5 pl-0">
                                <div className="footer-left">
                                    <div className="footer-logo">
                                       <img src={flogo} alt=""></img>
                                    </div>
                                    {/* <p>Wifly is an e-bike subscription for carefree e-bikers: Insured, with maintenance services and reparations, all 100% online and delivered at home.</p> */}
                                    <ul className="pl-0 mb-0 d-flex">
                                        <li>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 pr-0">
                                <div className="footer-right row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                       <div className="footer-col">
                                            <h3>Contact Us</h3>
                                            <ul className="pl-0">
                                                <li><a href="tell:+34 911 98 98 73"><i className="fa-solid fa-phone"></i>+34 911 98 98 73</a></li>
                                                <li><a href="#"><i className="fa-brands fa-whatsapp"></i>Whatsapp</a></li>
                                                <li><a href="mail to:contacto@
        wiflymobility.com"><i className="fa-solid fa-at"></i> contacto@
                                                    wiflymobility.com</a></li>
                                            </ul>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                       <div className="footer-col">
                                            <h3>Company</h3>
                                            <ul className="pl-0">
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Careers</a></li>
                                                {/* <li><a href="#">eBike + Coche</a></li> */}
                                            </ul>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                       <div className="footer-col">
                                           <h3>Support</h3>
                                            <ul className="pl-0">
                                                <li><a href="#">Customer Service</a></li>
                                                <li><a href="#">Privacy & Cookies</a></li>
                                                <li><a href="#">Terms & Conditions</a></li>
                                                <li><a href="#">FAQ</a></li>
                                            </ul>
                                       </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="copyright">
                                            <p className="mb-0">© 2022 Wifly Mobility. All rights reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;