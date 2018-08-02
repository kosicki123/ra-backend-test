const express = require('express')
const router = express.Router()
const db = require('../../config/db')

router.get('/', (req, res) => {
	var collection = db.get().collection('integration_test')

	collection.find({}).toArray(function(err, docs) {
		console.log(docs)
	})
})

module.exports = router
