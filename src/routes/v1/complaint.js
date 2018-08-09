const express = require('express')
const ComplaintController = require('../../controllers/complaint')
const ComplaintRepository = require('../../repositories/complaint')
const complaintController = new ComplaintController(ComplaintRepository)

const router = express.Router()

router.route('/')
  .get(complaintController.findComplaintsByCity.bind(complaintController))
  .post(complaintController.save.bind(complaintController))

module.exports = router
