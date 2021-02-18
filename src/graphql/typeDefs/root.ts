import { gql } from 'apollo-server-express';

export const root = gql`
  type Query {
    poblacion: String!
  }
  type Mutation {
    root: String!
  }
`;
