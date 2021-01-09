const express = require('express')
const router = express.Router()

router.use('/parameters',require('./routes/ParamRoute'));

module.exports = router