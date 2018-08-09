const { db } = require('../config/db')

class ComplaintRepository {
	static async save(body) {
		return await db()
			.collection('complaints')
			.save(body)
	}

	static async findComplaintsByCoordinates(coordinates, distanceInMeters) {
		return await db()
			.collection('complaints')
			.find({
				location: {
					$nearSphere: {
						$geometry: {
							type: 'Point',
							coordinates: [coordinates.lat, coordinates.lng]
						},
						$maxDistance: distanceInMeters
					}
				}
			})
			.toArray()
	}
}

module.exports = ComplaintRepository
