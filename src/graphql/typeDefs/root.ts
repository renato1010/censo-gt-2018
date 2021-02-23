export const root = `
  type Query {
    poblacion: Poblacion!
    poblacionPorDepto(input: DeptoInput!): PoblacionByDepto!
  }
  type Mutation {
    root: String!
  }
`;
