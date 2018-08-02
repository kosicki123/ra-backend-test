const { db } = require('../config/db')

class ComplaintRepository {
	async save(body) {
		return await db()
			.collection('complaints')
			.save(body)
	}

	async findComplaintsByCity() {

	}
}

module.exports = ComplaintRepository
