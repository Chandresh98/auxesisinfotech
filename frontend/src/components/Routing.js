import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Product_Detail from './Product_Detail';
import Timeline from './Timeline'
import Home from './New-Home'
import Services from './Services';
import Shop from './Shop'
import Delivery from './Delivery'

const Routing = () => {
    return (
        <BrowserRouter>
           <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/service-plans" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product-page/:id" element={<Product_Detail />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
        </BrowserRouter>
     )
}

export default Routing;