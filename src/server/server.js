const express = require('express')
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()
const routesV1 = require('../../routes/v1')

require('dotenv').config()

process.on('uncaughtException', (error) => {
	console.error('Unhandled Exception', error)
})

process.on('unhandledRejection', (error) => {
	console.error('Unhandled Rejection', error.message)
})

const start = options => new Promise((resolve, reject) => {

	if (!options.port) {
		reject(new Error('The server must be started with an available port'))
	}

	const app = express()

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(pino)

	// Routes
	app.use('/health', (req, res) => res.end())
	app.use('/api/v1', routesV1)

	const server = app.listen(options.port, () => resolve(server))
})

module.exports = Object.assign({}, { start })
