import React from 'react';

const Premium_card = (props) => {

    const premium1 = ["Lorem ipsum dolor sit.", "Lorem ipsum dolor sit.", "Lorem ipsum dolor sit."]

   const Resut1 = premium1.map((premium1)=><li className="check"><i className="fa-regular fa-circle-check"></i> {premium1} </li>)


   const premium2 = ["Lorem ipsum dolor sit.", "Lorem ipsum dolor sit.", "Lorem ipsum dolor sit."]

   const Resut2 = premium2.map((premium2)=><li><i className="fa-regular fa-circle-xmark"></i> {premium2} </li>)


    return (
        <>
            <div className="service-card">
                <h2>{props.heading}</h2>
                <h5><i>{props.sub_heading}</i></h5>
                <ul className="pl-0">
                    {Resut1}
                    {Resut2}
                </ul>
                <div className='service-btn'>
                    <button className='common-button1'>
                        <span>{props.button}</span>
                    </button>
                </div>
            </div>
        </>
    )

}

export default Premium_card;