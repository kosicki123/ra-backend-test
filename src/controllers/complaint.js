const HTTPStatus = require('http-status')
const responseHelper = require('../helpers/response')

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
			// TODO: use Google's geocoding service to get coordinates based on the address
			await this.repository.findComplaintsByCity(req.body)
			return res.sendStatus(HTTPStatus.OK)
		} catch (error) {
			console.log(error)
			res.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR)
		}
	}
}

module.exports = ComplaintController
