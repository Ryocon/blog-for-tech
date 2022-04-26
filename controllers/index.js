const express = require('express')
const router = express.Router()

// const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')
// const dashRoutes=require('./dashRoutes')

// router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/dashboard', dashRoutes);

module.exports = router