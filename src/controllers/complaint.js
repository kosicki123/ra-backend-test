const HTTPStatus = require('http-status')
const { appSettings } = require('../config/config')
const GoogleMapsController = require('../services/maps')

class ComplaintController {
  constructor(repository) {
    this.repository = repository
	  this.mapsController = new GoogleMapsController(appSettings.googleSecretKey)
  }

  async save(req, res) {
    try {
      await this.repository.save(req.body)
      return res.sendStatus(HTTPStatus.CREATED)
    } catch (error) {
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }
  }

  async findComplaintsByCity(req, res) {
    try {
      const { address, distance } = req.query
      const coordinates = await this.mapsController.findCoordinatesForAddress(address)
      const complaints = await this.repository.findComplaintsByCoordinates(coordinates, parseFloat(distance))
      res.json(complaints)
    } catch (error) {
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }
  }
}

module.exports = ComplaintController
