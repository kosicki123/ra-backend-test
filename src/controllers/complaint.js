const HTTPStatus = require('http-status')
const { appSettings } = require('../config/config')

class ComplaintController {
	constructor(repository) {
		this.repository = repository
	}

	async save(req, res) {
		try {
			await this.repository.save(req.body)
			return res.sendStatus(HTTPStatus.CREATED)
		} catch (error) {
			console.log(error)
			res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR)
		}
	}

	async findComplaintsByCity(req, res) {
		try {
			// Instantiate Maps Client
			const googleMapsClient = require('@google/maps').createClient({
				key: appSettings.googleSecretKey
			})

			// Geocode an address.
			googleMapsClient.geocode({
				address: req.query.address
			}, async (error, response) => {
				if (error)
					return res.json({ error: error.message })

				if (response.json.results.length === 0)
					return res.json({ message: 'address not found.' })
				response.json.results[0].geometry = undefined
				let coordinates = response.json.results[0].geometry.location
				if (coordinates) {
					const result = await this.repository.findComplaintsByCity(coordinates)
					res.json(result)
				}
			})
		} catch
			(error) {
			console.log(error)
			res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR)
		}
	}
}

module.exports = ComplaintController
