const { db } = require('../config/db')

class ComplaintRepository {
	async save(body) {
		return await db()
			.collection('complaints')
			.save(body)
	}

	async findComplaintsByCity(coordinates) {
		return await db()
			.collection('complaints')
			.find({ locale: coordinates})
			.toArray()
	}
}

module.exports = ComplaintRepository
