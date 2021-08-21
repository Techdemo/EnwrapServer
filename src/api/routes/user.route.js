const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();

// LIST ALL USERS
router
  .route('/')
  .get(controller.list);

// CREATE SINGLE USER
router
  .route('/create')
  .post(controller.create);

// AUTHENTICATE SINGLE USER
router
  .route('/login')
  .post(controller.login)

module.exports = router;