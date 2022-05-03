const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes')

const app = express()
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(routes)

exports.app = app;