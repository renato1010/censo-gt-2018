import { gql } from 'apollo-server-express';

export const poblacion = gql`
  enum DepartamentoEnum {
    Guatemala
    El_Progeso
    Sacatepequez
    Chimaltenango
    Escuintla
    Santa_Rosa
    Solola
    Totonicapan
    Quetzaltenango
    Suchitepequez
    Retalhuleu
    San_Marcos
    Huehuetenango
    Quiche
    Baja_Verapaz
    Alta_Verapaz
    Peten
    Izabal
    Zacapa
    Chiquimula
    Jalapa
    Jutiapa
  }
  input DeptoInput {
    departamento: DepartamentoEnum
  }
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
  type PoblacionByDepto {
    codigo: Int!
    departamento: String!
    poblacion_total: Int!
    hombres: Int!
    mujeres: Int!
    urbana: Int!
    rural: Int!
    edad_0_4: Int!
    edad_5_9: Int!
    edad_10_14: Int!
    edad_15_19: Int!
    edad_20_24: Int!
    edad_25_29: Int!
    edad_30_34: Int!
    edad_35_39: Int!
    edad_40_44: Int!
    edad_45_49: Int!
    edad_50_54: Int!
    edad_55_59: Int!
    edad_60_64: Int!
    edad_65_69: Int!
    edad_70_74: Int!
    edad_75_79: Int!
    edad_80_84: Int!
    edad_85_89: Int!
    edad_90_94: Int!
    edad_95_99: Int!
    edad_100_mas: Int!
  }
`;
