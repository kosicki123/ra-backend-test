const { MongoClient } = require('mongodb')

let db = null

module.exports.connect = async options => {
	try {
		if (db) return

		const client = await MongoClient.connect(options.host, options.options)
		db = client.db(options.dbName)
		await createLocationIndex(db)
	} catch (error) {
		throw error
	}
}

module.exports.db = () => {
	return db
}

module.exports.close = done => {
	if (!db) return
	db.close((err) => {
		db = null
		done(err)
	})
}

const createLocationIndex = async () => {
	try {
		await db
			.collection('complaints')
			.createIndex({
				location: '2dsphere'
			})
	} catch (error) {
		throw error
	}
}
