import API from 'api';
const data = require("./data" )

exports.handler = async event => {

  const subject = event.queryStringParameters.name || 'World'

  return {
    statusCode: 200,
    headers: API.defaultHeaders,
    body: API.serializer( data ),

  }

}