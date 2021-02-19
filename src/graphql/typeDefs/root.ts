import { gql } from 'apollo-server-express';

export const root = gql`
  type Query {
    poblacion: Poblacion!
  }
  type Mutation {
    root: String!
  }
`;
