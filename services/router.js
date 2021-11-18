const express = require('express');
const router = express.Router();

// Registered entity routes
router.use(require('./users/router'));
router.use(require('./organisations/router'));

module.exports = router;
