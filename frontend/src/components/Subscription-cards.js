import React from "react";
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect } from "react";

const Card = (props) => {

    useEffect(() => {

        $(function() {
            $(".single-subscription").addClass("active")
            $(".single-subscription").mouseenter(function() {
              $(".col-lg-4:nth-child(2) .single-subscription").removeClass("active");
            });
            $(".single-subscription").mouseover(function() {
                $(".col-lg-4:nth-child(2) .single-subscription").removeClass("active");
              });
        });

        $(window).scroll(function(){
            $('.col-lg-4:nth-child(2) .single-subscription').addClass('active');
        });

    }, [])
    return (
        <>
            <div className="col-lg-4">
                <div className="single-subscription active">
                    <div className="subscription-img">
                        <img src={props.image} alt=""></img>
                    </div>
                    <div>
                        <h5><strong>{props.title_front} |</strong> {props.title_back}</h5>
                        <span>{props.span}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;