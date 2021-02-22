import { IResolvers } from 'apollo-server-express';
import { Database, DeptoPoblacion } from '../../../lib';
import { EnumDepto, Poblacion } from './types';
import { mapEnumToDepartamento } from './utils';

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
    poblacionPorDepto: async (
      _parent: undefined,
      { input: { departamento } }: { input: { departamento: EnumDepto } },
      { db }: { db: Database }
    ): Promise<DeptoPoblacion> => {
      const searchDepto = mapEnumToDepartamento(departamento);
      const poblacionByDep = await db.poblacion.findOne({ departamento: searchDepto });
      if (!poblacionByDep) {
        throw new Error(`Couldn't find the searched data for ${searchDepto}`);
      }
      return poblacionByDep;
    },
  },
  PoblacionByDepto: {
    edad_0_4: (parent: DeptoPoblacion) => parent['0 - 4'],
    edad_5_9: (parent: DeptoPoblacion) => parent['5 - 9'],
    edad_10_14: (parent: DeptoPoblacion) => parent['10 - 14'],
    edad_15_19: (parent: DeptoPoblacion) => parent['15 - 19'],
    edad_20_24: (parent: DeptoPoblacion) => parent['20 - 24'],
    edad_25_29: (parent: DeptoPoblacion) => parent['25 - 29'],
    edad_30_34: (parent: DeptoPoblacion) => parent['30 - 34'],
    edad_35_39: (parent: DeptoPoblacion) => parent['35 - 39'],
    edad_40_44: (parent: DeptoPoblacion) => parent['40 - 44'],
    edad_45_49: (parent: DeptoPoblacion) => parent['45 - 49'],
    edad_50_54: (parent: DeptoPoblacion) => parent['50 - 54'],
    edad_55_59: (parent: DeptoPoblacion) => parent['55 - 59'],
    edad_60_64: (parent: DeptoPoblacion) => parent['60 - 64'],
    edad_65_69: (parent: DeptoPoblacion) => parent['65 - 69'],
    edad_70_74: (parent: DeptoPoblacion) => parent['70 - 74'],
    edad_75_79: (parent: DeptoPoblacion) => parent['75 - 79'],
    edad_80_84: (parent: DeptoPoblacion) => parent['80 - 84'],
    edad_85_89: (parent: DeptoPoblacion) => parent['85 - 89'],
    edad_90_94: (parent: DeptoPoblacion) => parent['90 - 94'],
    edad_95_99: (parent: DeptoPoblacion) => parent['95 - 99'],
    edad_100_mas: (parent: DeptoPoblacion) => parent['100 o más'],
  },
  Mutation: {
    root: () => 'Mutation.root',
  },
};
