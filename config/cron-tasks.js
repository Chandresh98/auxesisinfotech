const axios = require("axios");
const FormData = require("form-data");
const uploader = require("./helpers/uploader");

module.exports = {
  "0 */8 * * *": async ({ strapi }) => {
    console.log("Running Fetch Product cron-job ");
    // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
    try {
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
      //   console.log(responseCategory.data.items);

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
        // console.log(productsToCheck)
        if (productsToCheck.length >= 1) {
          for (const product of productsToCheck) {
            console.log("Product", product.id);
            const findQueryInDb = await strapi.db
              .query("api::product.product")
              .findMany({
                where: { product_Id: product.id }, // Assuming the product ID field is 'id'
                populate: { product_Id: true, Name: true },
              });

            //   console.log(findQueryInDb.length)
            if (findQueryInDb.length === 0) {
              // Product not found in the database, create it
              if(product.ImageUrl != null){
    
                const img = await uploader.uploadToLibrary(`${product.ImageUrl}`, product.Name);
                await strapi
                          .service("api::product.product")
                          .update(product.id, { data: { Image: img.id } });
                      
                // console.log({img})
                const createProductInDb = await strapi.db
                .query("api::product.product")
                .create({
                  data: {
                    Product_ID: product.id,
                    Name: product.name,
                    ImageUrl:product.image,
                    Image: img.id,
                     // Replace with the actual property name for image
                    Price: product.price_public,
                    Category: product.category.name,
                    publishedAt: new Date(),
                    // Replace with the actual property name for category
                    // Add other properties as needed
                  },
                });
                
            } else{
              const createProductInDb = await strapi.db
              .query("api::product.product")
              .create({
                data: {
                  Product_ID: product.id,
                  Name: product.name,
                  ImageUrl:product.image,
                   // Replace with the actual property name for image
                  Price: product.price_public,
                  Category: product.category.name,
                  publishedAt: new Date(),
                  // Replace with the actual property name for category
                  // Add other properties as needed
                },
              });
            } 
                    }

          }
        }
      });

      //   const productPublished = await strapi.db
      //     .query("api::product.product")
      //     .findMany({
      //       where: {
      //         publishedAt: {
      //           $null: true,
      //         },
      //         publish_at: {
      //           $lt: new Date(),
      //         },
      //       },
      //     });

      //     console.log(productPublished === null)

      //   await (
      //     await Promise.all(productPublished)
      //   ).map(async (product) => {
      //     await strapi
      //       .service("api::product.product")
      //       .update(product.id, { data: { publishedAt: new Date() } });
      //   });

      // console.log({productPublished})
    } catch (error) {
      console.error("Error making API request:", error.message);
    }
  },
};
