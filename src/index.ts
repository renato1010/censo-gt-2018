import { config } from 'dotenv';
config();
import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './graphql';
import { schemaArray as typeDefs } from './graphql/typeDefs';
import { connectDatabase } from './database';

const port = process.env.PORT;
const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ db, req, res }),
  });

  server.applyMiddleware({ app, path: '/api' });
  app.listen(port);
  console.log(`[app]: http://localhost:${port}`);
};

mount(express());
