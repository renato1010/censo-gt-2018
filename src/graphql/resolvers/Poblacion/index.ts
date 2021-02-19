import { IResolvers } from 'apollo-server-express';
import { Database } from '../../../lib';
import { Poblacion } from './types';

type PoblacionAggRead = { [key: string]: number | number };
export const PoblacionResolvers: IResolvers = {
  Query: {
    poblacion: async (
      _parent: undefined,
      {}: Record<string, unknown>,
      { db }: { db: Database }
    ): Promise<Poblacion> => {
      const result = (
        await db.poblacion
          .aggregate([
            {
              $group: {
                _id: null,
                total: { $sum: '$poblacion_total' },
                hombres: { $sum: '$hombres' },
                mujeres: { $sum: '$mujeres' },
                urbana: { $sum: '$urbana' },
                rural: { $sum: '$rural' },
              },
            },
          ])
          .toArray()
      )[0] as unknown;
      const { total, hombres, mujeres, urbana, rural } = result as PoblacionAggRead;
      return {
        total,
        porGenero: { mujeres, hombres },
        urbana,
        rural,
      };
    },
  },
  Mutation: {
    root: () => 'Mutation.root',
  },
};
