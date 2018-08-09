const express = require('express')
const complaintRouter = require('../../routes/v1/complaint')
const router = express.Router()

router.use('/complaint', complaintRouter)

module.exports = router
