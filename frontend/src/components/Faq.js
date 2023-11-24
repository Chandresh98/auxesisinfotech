import React from "react";
import faq_data from "./Faq-data";
import Card from "./Faq-card"
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect } from "react";

const Faq = (props) => {

    useEffect( ()=> {
        $(document).ready(function(){
            $("#collapseone").addClass('show');
        });
    }, [] )

    return (
        <>
            <div className="faq section-padding bg-gray">
                <div className="container">
                    <div className="faq-outer">
                        <h2 className="main-heading2">F.A.Q.</h2>
                        <div id="accordion">
                            {
                                faq_data.map((val, ind) => {
                            return <Card key={ind} question={val.question} answer={val.answer} aria_label_id={val.aria_label_id} id={val.id} data_target_id={val.data_target_id} />
                        })
                    }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;