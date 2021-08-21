const express = require('express');
const controller = require('../controllers/health.controller');

const router = express.Router();
require('dotenv').config();

router
  .route('/')
  .get(controller.get);

module.exports = router;