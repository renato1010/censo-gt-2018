import { config } from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

config();
const port = process.env.PORT;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app, path: '/api' });
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
