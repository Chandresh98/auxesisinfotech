"use strict";

const { default: axios } = require("axios");
const uploader = require("../../../../config/helpers/uploader");

/**
 * A set of functions called "actions" for `fetch-products`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const currentDate = new Date();

      // Calculate the date and time 8 hours ago
      const eightHoursAgo = new Date(
        currentDate.getTime() - 8 * 60 * 60 * 1000
      );

      // Format the date in the required ISO format
      const formattedDate = eightHoursAgo.toISOString();

      const findQueryInDb = await strapi.db
        .query("api::product.product")
        .findMany({
          where: {
            createdat: {
               $gt:formattedDate,
            },
          },
        });

      if (findQueryInDb.length > 0  ) {
        // Documents with missing image found, handle them as needed

        // Example: Update the documents or perform some other action
        for (const doc of findQueryInDb) {
            console.log(doc.ImageUrl)
if(doc.ImageUrl != null){
    
    const img = await uploader.uploadToLibrary(`${doc.ImageUrl}`, doc.Name);
    await strapi
              .service("api::product.product")
              .update(doc.id, { data: { Image: img.id } });
          
    // console.log({img})
}  
        }


      } else {
        // No documents with missing image found
        console.log("No documents with missing image.");
      }

      // ... (Rest of the code)

      ctx.body = "ok"; // Send 'ok' response if everything is successful
    } catch (err) {
      console.error("Error in upload image Product Button:", err.message);
      ctx.body = err; // Send the error as a response
    }
  },
};
