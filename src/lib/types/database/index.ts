import { Collection } from 'mongodb';

import { DeptoPoblacion } from '../poblacion';

export interface Database {
  poblacion: Collection<DeptoPoblacion>;
}
