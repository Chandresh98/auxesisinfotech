import React from "react";
import logoimg from "./images/logo.png"
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect } from "react";

const Navbar = () => {


    useEffect(() => {

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 10) {
                $(".main-header").addClass("sticky-header");
            }
            else {
                $(".main-header").removeClass("sticky-header");
            }
        });

    }, [])

    return (
        <>
            <header className="main-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg px-0">
                        <a className="navbar-brand p-0" href="#">
                            <img src={logoimg} alt=""></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/shop">Vehicles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/service-plans">Plans</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/timeline">How It Works</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <a href="#" className="common-button1"><span>Login</span></a>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}


export default Navbar;