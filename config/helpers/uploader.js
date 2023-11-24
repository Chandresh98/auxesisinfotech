const _ = require('lodash');
const axios = require('axios').default;
const fs = require('fs');
const stream = require('stream');
const util = require('util'); // Import the util module for promisify
const path = require('path');
const mime = require('mime-types');

const pipeline = util.promisify(stream.pipeline); // Use util.promisify on stream.pipeline

module.exports = {
  getFileDetails(filePath) {
    return new Promise((resolve, reject) => {
      fs.stat(filePath, (err, stats) => {
        if (err) reject(err.message);
        resolve(stats);
      });
    });
  },

  deleteFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (err) => {
        if (err) reject(err.message);
        resolve('deleted');
      });
    });
  },

  async uploadToLibrary(imageByteStreamURL, name) {
    console.log("uploader to media by URL");
    const filePath = `./tmp/product.jpeg`;

    const { data } = await axios.get(imageByteStreamURL, {
      responseType: 'stream',
    });
    
    const file = fs.createWriteStream(filePath);
    // console.log({ file });

    // Use pipeline to copy data from stream to file
    await pipeline(data, file);
    const image = await this.upload(filePath, 'uploads');

    

    return image;
  },

  async upload(filePath, saveAs) {
    const stats = await this.getFileDetails(filePath);
    const fileName = path.parse(filePath).base;

    const res = await strapi.plugins.upload.services.upload.upload({
      data: { path: saveAs },
      files: {
        path: filePath,
        name: fileName,
        type: mime.lookup(filePath),
        size: stats.size,
      },
    });

    await this.deleteFile(filePath);
    return _.first(res);
  },
};
