const express = require('express');
const path = require('path');
const sequelize = require('./settings/database');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./gql/schema');
const resolver = require('./gql/resolver');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true,
}));

app.use((_, res) => {
  res.sendFile('/index.html');
});


async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT)
  } catch (err) {
    console.log(err);
  }
}

start();