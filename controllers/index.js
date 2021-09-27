const router = require('express').Router();

// Dashboard routes
const dashboardRoutes = require('./dashboard-routes.js');

// Dashboard
router.use('/dashboard', dashboardRoutes);

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;