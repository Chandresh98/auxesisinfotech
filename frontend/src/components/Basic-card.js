import React from 'react';

const Basic_card = (props) => {

    const basic1 = ["Lorem ipsum dolor sit.", "Lorem ipsum dolor sit.", "Lorem ipsum dolor sit."]

   const Resut1 = basic1.map((basic1)=><li className="check"><i className="fa-regular fa-circle-check"></i> {basic1} </li>)


   const basic2 = ["Lorem ipsum dolor sit.", "Lorem ipsum dolor sit.", "Lorem ipsum dolor sit."]

   const Resut2 = basic2.map((basic2)=><li><i className="fa-regular fa-circle-xmark"></i> {basic2} </li>)


    return (
        <>
            <div className="service-card">
                <h2>{props.heading}</h2>
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

export default Basic_card;