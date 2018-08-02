const { MongoClient } = require('mongodb')

const state = {
	db: null
}

exports.connect = (options, done) => {
	if (state.db) return

	return MongoClient.connect(options.host, options.options, (err, client) => {
		if (err) throw err
		state.db = client.db(options.dbName)
	})
}

exports.get = () => {
	return state.db
}

exports.close = (done) => {
	if (state.db) {
		state.db.close((err) => {
			state.db = null
			state.mode = null
			done(err)
		})
	}
}
