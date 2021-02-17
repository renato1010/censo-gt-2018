import { config } from 'dotenv';
config();
import { DeptoPoblacion } from '../lib';
import { connectDatabase } from '../database';
import poblacion from '../utils/output/poblacion.json';

const seed = async () => {
  try {
    console.log('[seed start]: running...');
    const db = await connectDatabase();
    const result = await db.poblacion.insertMany(poblacion as DeptoPoblacion[]);
    console.log('[seeding poblacion]: successful');
    console.log(`[insert count]: ${result.insertedCount}`);
  } catch (error) {
    throw new Error(`Error seeding poblacion: ${error?.message ?? error}`);
  }
};

seed().catch((err) => console.error(err));
