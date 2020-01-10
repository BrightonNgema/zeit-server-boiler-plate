const { ApolloServer, gql } = require("apollo-server");
const { makeExecutableSchema } = require("graphql-tools");
const jwt = require("jsonwebtoken");
const { utils } = require("./utils");
const cors = require("cors");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
require("now-env");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log("DB Err", err));

const schema = makeExecutableSchema({
  resolvers: utils.resolvers,
  typeDefs: utils.typeDefs
});

const server = new ApolloServer({
  schema,
  introspection: true, // enables introspection of the schema
  playground: true, // enables the actual playground
  context: ({ req }) => {
    const token = req.headers.authorization;
    if (token !== null) {
      try {
        const currentUser = jwt.verify(token, process.env.JWT_SECRET);
        req.currentUser = currentUser;
        return { Blog, currentUser };
      } catch (error) {
        return { Blog };
      }
    }
  }
});

// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
