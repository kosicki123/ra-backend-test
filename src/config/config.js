const serverSettings = {
  port: process.env.PORT
}

const dbSettings = {
  host: process.env.MONGO_DB_HOST,
	dbName: process.env.MONGO_DB_NAME,
  options: {
	  useNewUrlParser: true
  }
}

module.exports = Object.assign({}, { serverSettings, dbSettings })
