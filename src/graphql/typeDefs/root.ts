import { gql } from 'apollo-server-express';

export const root = gql`
  type Query {
    poblacion: Poblacion!
    poblacionPorDepto(input: DeptoInput!): PoblacionByDepto!
  }
  type Mutation {
    root: String!
  }
`;
