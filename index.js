const { ApolloServer } = require("apollo-server");

const gql = require("graphql-tag");

//mongoose is a orm library used to map object relation
const mongoose = require("mongoose");

const { MONGODB } = require("./config.js");

const resolvers = require("./graphql/resolvers/index.js");

const typeDefs = require("./graphql/typeDefs.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database connection successful");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
