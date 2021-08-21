const express = require('express');
const bodyParser = require('body-parser')
const compress = require('compression');
const cors = require('cors');
const routes = require('../api/routes');

const app = express();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(compress())
  .use(cors())
  .use('/v1', routes);

module.exports = app;
