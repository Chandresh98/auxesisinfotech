import React from 'react';
import './new-style.css'
import Subscription from "./images/double-pony.png"
import Service_card from "./Service-plans-card"
import Basic_card from './Basic-card';
import Professional_card from './Professional-card';
import Premium_card from './Premium-card';


const All_services = () => {
    return (
        <>
            <div className='all-services section-padding'>
                <div className='container'>
                    <div className='all-services-inner'>
                        <div className='row'>
                            <div className="col-lg-3">
                                <Service_card heading={'Service Plans'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} image={Subscription} />
                            </div>
                            <div className="col-lg-3">
                                <Basic_card heading={'Basic'} button={'Starting from 45 €'} />
                            </div>
                            <div className="col-lg-3">
                                <Premium_card heading={'Premium'} sub_heading={'Basic +'} button={'Starting from 45 €'} />
                            </div>
                            <div className="col-lg-3">
                                <Professional_card heading={'Professional'} sub_heading={'Premium +'} button={'Starting from 45 €'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default All_services;