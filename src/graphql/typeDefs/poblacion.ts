import { gql } from 'apollo-server-express';

export const poblacion = gql`
  type Genero {
    hombres: Int!
    mujeres: Int!
  }
  type Poblacion {
    total: Int!
    porGenero: Genero!
    urbana: Int!
    rural: Int!
  }
`;
