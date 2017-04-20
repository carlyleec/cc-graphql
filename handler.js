const { graphql } = require('graphql');
const Schema = require('./schema');

const createResponse = (statusCode, body) => (
  {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS
    },
    body: JSON.stringify(body),
  }
);

module.exports.graphql = (event, context, callback) => {
  console.log(event); //eslint-disable-line
  if (event.body) {
    const body = JSON.parse(event.body);
    graphql(Schema, body.query, null, {}, body.variables)
      .then(response => callback(null, createResponse(200, response)))
      .catch(error => callback(null, createResponse(error.responseStatusCode || 500, { message: error.message || 'Internal foo error' })));
  } else {
    callback(null, createResponse(200, { data: {} }));
  }
};
