const express = require('express')
const router = express.Router()
const db = require('../../config/db')

router.get('/', (req, res) => {
	res.end()
})

module.exports = router
