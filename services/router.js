const express = require('express');
const router = express.Router();

// Registered entity routes
router.use(require('./users/router'));
router.use(require('./games/router'));

module.exports = router;
