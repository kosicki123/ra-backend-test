const express = require('express')
const ComplaintController = require('../../controllers/complaint')
const ComplaintRepository = require('../../repositories/complaint')
const complaintRepository = new ComplaintRepository()
const complaintController = new ComplaintController(complaintRepository)

const router = express.Router()

router.route('/')
	.post(complaintController.save.bind(complaintController))

module.exports = router
