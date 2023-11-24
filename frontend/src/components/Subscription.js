import React from "react";
import Sdata from "./Sdata"
import Card from "./Subscription-cards";
const Subscription = () => {
  return (
    <>
      <div className="subscription-section section-padding">
        <div className="container">
            <h2 className="main-heading">A very wide range of electric vehicles</h2>
            <div className="subscription-inner pt-5">
                <div className="row">
                   {
                        Sdata.map((val, ind) => {
                            return <Card key={ind} image={val.image} title_front={val.title_front} title_back={val.title_back} span={val.span} Id={val.Id} />
                        })
                    }
                </div>
                <div>
                    <a href="#" className="common-button1"><span>See all vehicles</span></a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}


export default Subscription;