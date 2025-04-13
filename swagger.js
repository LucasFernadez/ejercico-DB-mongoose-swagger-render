const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('./docs');

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
};
