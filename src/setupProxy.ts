// // src/setupProxy.js
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://13.201.208.89:8443', // Replace with your backend server URL
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '', // Remove /api prefix when forwarding to the target
//       },
//     })
//   );
// };

// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app:any) {
  app.use(
    '/realms',
    createProxyMiddleware({
      target: 'https://kb.etvbharat.com/keycloak',
      changeOrigin: true,
      pathRewrite: {
        '^/realms': '', // remove '/realms' from the beginning of the request URL
      },
    })
  );
};
