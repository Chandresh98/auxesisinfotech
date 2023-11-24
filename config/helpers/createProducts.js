const axios = require('axios');
const uploader = require('./uploader'); // Replace with the actual path to your uploader library
const FormData = require("form-data");

module.exports = {
    async functfetchProduct() {
        try {
          const filteredItemIds = [];
      
          // First Axios POST request to get the access token
          const responseLogin = await axios.post(
            'https://api.wifly.app/api/auth/login',
            {
              email: 'shivania@auxesisinfotech.com',
              password: 'Ambujacement@123',
            }
          );
      
          const accessToken = responseLogin.data.items[0].access_token;
          console.log('Access Token:', accessToken);
      
          // Ask for this access token should be updated every second
          const responseCategory = await axios.get(
            'https://api.wifly.app/api/category?limit=1000&page=0 ',
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
      
          // Array of names to filter
          const namesToFilter = ['eBike', 'eMoto', 'Bike', 'eScooter'];
      
          // Filter the items based on the names
          responseCategory.data.items.forEach((item) => {
            if (
              namesToFilter.some((filterString) =>
                item.name.toLowerCase().includes(filterString.toLowerCase())
              )
            ) {
              filteredItemIds.push(item.id);
            }
          });
      
          filteredItemIds.forEach(async (item) => {
            const responseProduct = await axios.get(
              `https://api.wifly.app/api/product?limit=1000&category_id=${item}`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
      
            const productsToCheck = responseProduct.data.items.filter(
              (product) =>
                product.public === true && product._status === 'Activo'
            );
      
            if (productsToCheck.length >= 1) {
              for (const product of productsToCheck) {
                const findQueryInDb = await strapi.db
                  .query('api::product.product')
                  .findOne({
                    where: { productId: product.id },
                  });
      
                if (!findQueryInDb) {
                  // Product not found in the database, create it
      
                  // Image is downloading from
                  const img = await uploader.uploadToLibrary(
                    `${product.image}`,
                    product.name
                  );
      
                  const createProductInDb = await strapi.db
                    .query('api::product.product')
                    .create({
                      data: {
                        productId: product.id,
                        productName: product.name,
                        image: img, // Replace with the actual property name for image
                        price: product.price_public,
                        publish_at: new Date(),
                        // Add other properties as needed
                      },
                    });
      
                  // Publish the created product
                  await strapi.db
                    .query('api::product.product')
                    .update({
                      where: { id: createProductInDb.id },
                      data: { publishedAt: new Date() },
                    });
                }
              }
            }
          });
      
          const productPublished = await strapi.db
            .query('api::product.product')
            .findMany({
              where: {
                publishedAt: {
                  $null: true,
                },
                publish_at: {
                  $lt: new Date(),
                },
              },
            });
      
          await (
            await Promise.all(productPublished)
          ).map(async (product) => {
            await strapi
              .service('api::product.product')
              .update(product.id, { data: { publishedAt: new Date() } });
          });
      
          // Alert for successful completion
          alert('Products fetched and published successfully!');
        } catch (error) {
          console.error('Error making API request:', error.message);
        }
      }
}


// Call the fetchProduct function

