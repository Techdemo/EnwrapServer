const express = require('express');
const healthRoutes = require('./health.route');
const organisationRoutes = require('./organisation.route');
const userRoutes = require('./user.route');
const router = express.Router();

//routes
router.use('/health', healthRoutes);
router.use('/organisations', organisationRoutes);
router.use('/user', userRoutes);

module.exports = router;