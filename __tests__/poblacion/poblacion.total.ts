import { config } from 'dotenv';
config();
import { ApolloServer } from 'apollo-server-express';
import gql from 'graphql-tag';
import { createTestClient } from 'apollo-server-testing';
import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { resolvers } from '../../src/graphql';
import { mergedTypesDefs as typeDefs } from '../../src/graphql/typeDefs';
import { Database, DeptoPoblacion } from '../../src/lib';

const user = process.env.DB_USER;
const password = process.env.DB_USER_PASSWORD;
const dbName = process.env.DB_NAME;
const clusterName = process.env.CLUSTER_NAME;
let client: MongoClient;

afterEach(() => client.close());

it('Cuadro A1 - Población total por sexo y área', async () => {
  const dbConnectionURL = `mongodb+srv://${user}:${password}@${clusterName}.h8rwn.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  client = await MongoClient.connect(dbConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const dbRef = client.db(dbName);
  const db: Database = { poblacion: dbRef.collection<DeptoPoblacion>('poblacion') };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }: { req: Request; res: Response }) => ({ db, req, res }),
  });
  const POBLACION_TOTAL = gql`
    query poblacionTotal {
      poblacion {
        total
        porGenero {
          hombres
          mujeres
        }
        urbana
        rural
      }
    }
  `;
  // use test server to create query function
  const { query } = createTestClient(server);
  // exec query against server
  const {
    data: {
      poblacion: { total, porGenero, urbana, rural },
    },
  } = await query({ query: POBLACION_TOTAL });
  expect(total).toEqual(14901286);
  expect(porGenero.hombres).toEqual(7223096);
  expect(porGenero.mujeres).toEqual(7678190);
  expect(rural).toEqual(6876778);
  expect(urbana).toEqual(8024508);
}, 10000);
