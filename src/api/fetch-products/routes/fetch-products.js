module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/fetch-products',
     handler: 'fetch-products.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'GET',
      path: '/uploadimages',
      handler: 'upload-image.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
