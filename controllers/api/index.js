const router = require('express').Router();

const userRoutes = require('./userRoutes');
const favTrailsRoutes = require('./favTrailsRoutes');

router.use('/users', userRoutes);
router.use('/favTrails', favTrailsRoutes);

module.exports = router;
