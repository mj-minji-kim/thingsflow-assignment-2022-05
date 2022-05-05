const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes')
const { swaggerUi, specs } = require('./src/swagger');

const app = express()
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(routes)
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

exports.app = app;