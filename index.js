const express = require('express');
const app = express();
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs');
const PORT = process.env.PORT || 8080;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const { dbConnection } = require('./config/config');
const routes = require('./routes');
app.use(express.json());

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));