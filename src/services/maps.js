const GoogleMaps = require('@google/maps')

class GoogleMapsController {
  constructor(secretKey) {
    this.secretKey = secretKey
  }

  async findCoordinatesForAddress(address) {
    // Instantiate Maps Client
    const googleMapsClient = GoogleMaps.createClient({
      key: this.secretKey
    })

    // Geocode an address.
    return new Promise((resolve, reject) => {
        googleMapsClient.geocode({
          address
        }, async (error, response) => {
          if (error) {
            return reject(error)
          }

          if (response.json.results.length === 0) {
            return reject(new Error('address not found.'))
          }

          let geometry = response.json.results[0].geometry

          if (geometry) {
            return resolve(geometry.location)
          }

          reject(new Error('coordinates not found'))
        })
      }
    )
  }
}

module.exports = GoogleMapsController
