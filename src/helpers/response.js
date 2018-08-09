const HTTPStatus = require('http-status')

exports.defaultResponse = (response, statusCode = HTTPStatus.OK) => {
	const data = (response === null ? {} : response)
	return ({
		data,
		statusCode
	})
}

exports.errorResponse = (message, statusCode = HTTPStatus.BAD_REQUEST) => ({
	error: message,
	statusCode
})

exports.createdResponse = (statusCode = HTTPStatus.CREATED) => {
	exports.defaultResponse({}, statusCode)
}
