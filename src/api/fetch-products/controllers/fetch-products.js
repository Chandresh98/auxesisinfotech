'use strict';

const { default: axios } = require("axios");
const uploader = require("../../../../config/helpers/uploader");

/**
 * A set of functions called "actions" for `fetch-products`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      console.log("Running Fetch Product api ");
      // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
      const filteredItemIds = [];
      
      // First Axios POST request to get the access token
      const responseLogin = await axios.post(
        "https://api.wifly.app/api/auth/login",
        {
          email: "shivania@auxesisinfotech.com",
          password: "Ambujacement@123",
        }
      );
  
      const accessToken = responseLogin.data.items[0].access_token;
      console.log("Access Token:", accessToken);
      // ask for this access token should be update every second
      const responseCategory = await axios.get(
        "https://api.wifly.app/api/category?limit=1000&page=0 ",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      // Array of names to filter
      const namesToFilter = ["eBike", "eMoto", "eScooter"];
  
      // Filter the items based on the names
      responseCategory.data.items.forEach((item) => {
        if (namesToFilter.includes(item.name)) {
          filteredItemIds.push(item.id);
        }
      });
  
      // Console log the filtered items in an array
      //   console.log("Filtered Items:", filteredItemIds);
  
      filteredItemIds.forEach(async (item) => {
        try {
          const responseProduct = await axios.get(
            `https://api.wifly.app/api/product?limit=1000&category_id=${item}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const productsToCheck = responseProduct.data.items.filter(
            (product) => product.public === true && product._status === "Activo"
          );
  
          if (productsToCheck.length >= 1) {
            // console.log({productsToCheck})
            for (const product of productsToCheck) {
              // console.log("Product", product.id);
              const findQueryInDb = await strapi.db
                .query("api::product.product")
                .findMany({
                  where: { Product_Id: product.id }, // Assuming the product ID field is 'id'
                  populate: { Product_Id: true, Name: true },
                });
  
              // console.log(findQueryInDb.length);
              if (findQueryInDb.length === 0) {
                // Product not found in the database, create it
                // image is downloading from
                // console.log({ findQueryInDb });
  
                //   if(product.image != null){const img = await uploader.uploadToLibrary(`${product.image}`, product.name);
                // console.log(img)
                // console.log("img")}
                const createProductInDb = await strapi.db
                  .query("api::product.product")
                  .create({
                    data: {
                      Product_ID: product.id,
                      Name: product.name,
                      ImageUrl: product.image,
                  // Replace with the actual property name for image
                      Price: product.price_public,
                      Category: product.category.name,
                      publishedAt: new Date(),
                      createdat: new Date()
                      // Replace with the actual property name for category
                      // Add other properties as needed
                    },
                  });
                // console.log({createProductInDb})
              }
            }
          }
        } catch (error) {
          console.error("Error creating product in the database:", error.message);
        }
      });
  
      // ... (Rest of the code)
  
      ctx.body = 'ok'; // Send 'ok' response if everything is successful
    } catch (err) {
      console.error("Error in Fetch Product cron-job:", err.message);
      ctx.body = err; // Send the error as a response
    }
  }
  
};
