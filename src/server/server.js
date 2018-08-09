const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')()
const cors = require('cors')()
const pino = require('express-pino-logger')()
const compression = require('compression')()

const routes = require('../routes/v1')

process.on('uncaughtException', (error) => {
	//Automatically sends error information to Stackdriver
	console.error('Unhandled Exception', error.message)
})

process.on('unhandledRejection', (error) => {
	//Automatically sends error information to Stackdriver
	console.error('Unhandled Rejection', error.message)
})

const init = options => new Promise((resolve, reject) => {

	if (!options.port) {
		reject(new Error('The server must be started with an available port'))
	}

	const app = express()

	app.use(cors)
	app.use(helmet)
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))

	// fastest logger
	app.use(pino)

	// gzip compression
	app.use(compression)

	// Routes
	app.use('/health', (req, res) => res.end())
	app.use('/api/v1', routes)

	const server = app.listen(options.port, () => resolve(server))
})

module.exports = Object.assign({}, { init })
