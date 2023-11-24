import React from 'react';

const Professional_card = (props) => {

    const professional1 = ["Lorem ipsum dolor sit.", "Lorem ipsum dolor sit.", "Lorem ipsum dolor sit."]

   const Resut1 = professional1.map((professional1)=><li className="check"><i className="fa-regular fa-circle-check"></i> {professional1} </li>)


   const professional2 = ["Lorem ipsum dolor sit.", "Lorem ipsum dolor sit.", "Lorem ipsum dolor sit."]

   const Resut2 = professional2.map((professional2)=><li><i className="fa-regular fa-circle-xmark"></i> {professional2} </li>)


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

export default Professional_card;