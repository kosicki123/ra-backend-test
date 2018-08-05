const { MongoClient, Logger } = require('mongodb')

let db = null

module.exports.connect = async options => {
	try {
		if (db) return

		const client = await MongoClient.connect(options.host, options.options)

		if (process.env.NODE_ENV === 'test') {
			Logger.setLevel('debug')
			Logger.filter('class', ['Cursor'])
		}

		db = client.db(options.dbName)
	} catch (error) {
		throw error
	}
}

module.exports.db = () => {
	return db
}

module.exports.close = done => {
	if (db) {
		db.close((err) => {
			db = null
			done(err)
		})
	}
}
