const data = require("./data" )

exports.handler = async event => {

  const when = event.queryStringParameters.when || 'today'

  return {
    statusCode: 200,
    body: JSON.stringify( data ),
  }

}