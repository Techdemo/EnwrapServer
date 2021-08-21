const express = require('express');
const controller = require('../controllers/organisation.controller');

const router = express.Router();

router
  .route('/')
  .get(controller.list);

// CREATE SINGLE ORGANISATION
// localhost:5000/v1/organisations/create
router
  .route('/create')
  .post(controller.create)
  
module.exports = router;