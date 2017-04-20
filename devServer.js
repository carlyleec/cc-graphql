const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const PORT = process.env.port || 3000;

const server = express();

server.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`); //eslint-disable-line
});
