const data = require("./data" )

exports.handler = async event => {

  const subject = event.queryStringParameters.name || 'World'

  return {

    statusCode: 200,
    contentType: 'application/json',
    body: data,

  }

}