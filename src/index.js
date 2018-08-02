const server = require('./server/server')
const db = require('../src/config/db')
const { serverSettings, dbSettings } = require('./config/config')

const init = async () => {
	try {
		await db.connect(dbSettings)
		console.log(`Server started succesfully, running on port: ${serverSettings.port}.`)

		const app = await server.init({
			port: serverSettings.port
		})

		app.on('close', async () => {
			try {
				await db.close()
				console.log('Shutted down gracefully')
			} catch (error) {
				console.error('Error trying to shut down gracefully', error.message)
			}
		})
	} catch (error) {
		console.error('Unable to connect to the database:', error.message)
	}
}

return init()
