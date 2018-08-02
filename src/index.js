const server = require('./server/server')
const { serverSettings } = require('./config/config')

async function start() {
	try {
		console.log(`Server started succesfully, running on port: ${serverSettings.port}.`)

		const app = await server.start({
			port: serverSettings.port
		})
		app.on('close', async () => {
			try {
				console.log('Shutted down gracefully')
			} catch (error) {
				console.error('Error trying to shut down gracefully', error.message)
			}
		})
	} catch (error) {
		console.error('Unable to connect to the database:', error.message)
	}
}

start()
