import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar'
import './components/responsive.css'
import './components/style.css'
import Footer from './components/footer';
import Routing from './components/Routing';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
      <Navbar/>
          <Routing/>
      <Footer/>
    </>
);

