import { MongoClient } from 'mongodb';
import { Database, DeptoPoblacion } from '../lib/types';

const user = process.env.DB_USER;
const password = process.env.DB_USER_PASSWORD;
const dbName = process.env.DB_NAME;
const clusterName = process.env.CLUSTER_NAME;

const dbConnectionURL = `mongodb+srv://${user}:${password}@${clusterName}.h8rwn.mongodb.net/${dbName}?retryWrites=true&w=majority`;
export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(dbConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  return {
    poblacion: db.collection<DeptoPoblacion>('poblacion'),
  };
};
