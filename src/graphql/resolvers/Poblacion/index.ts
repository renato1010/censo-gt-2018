import { IResolvers } from 'apollo-server-express';

export const PoblacionResolvers: IResolvers = {
  Query: {
    poblacion: () => 'Query.poblacion',
  },
};
