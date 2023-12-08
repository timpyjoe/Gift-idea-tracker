const router = require('express').Router();

const sampleRoutes = require('./sample.routes');
const userRoutes = require('./user.routes');
const gifteeRoutes = require('./giftee.routes')

router.use('/sample', sampleRoutes);
router.use('/user', userRoutes);
router.use('/giftee', gifteeRoutes);

module.exports = router;
