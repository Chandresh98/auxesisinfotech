/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Button } from '@strapi/design-system';
import axios from 'axios';
// import {fetchProduct } from '../../../../../../../config/helpers/createProducts'

const HomePage = () => {
  const handleButtonClick = async () => {
    const responseCategory = await axios.get(
      `https://wiflyadmin.auxesisdevelopment.com/api/fetch-products`,
    );

    return console.log(responseCategory.data)
  };

  const handleButtonClick2 = async () => {
    const responseCategory = await axios.get(
      "https://wiflyadmin.auxesisdevelopment.com/api/uploadimages",
    );

    return console.log(responseCategory.data)
  };
  
  return (
    <div>
      <h1>{pluginId}&apos;s Handler</h1>
      <p>click to run strapi back office</p>
      <Button onClick={handleButtonClick}>Click Me</Button>
      <Button onClick={handleButtonClick2}>upload-Image</Button>
    </div>
  );
};

export default HomePage;