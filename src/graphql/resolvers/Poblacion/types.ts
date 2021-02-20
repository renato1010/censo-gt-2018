const enumDeptos = [
  'Guatemala',
  'El_Progeso',
  'Sacatepequez',
  'Chimaltenango',
  'Escuintla',
  'Santa_Rosa',
  'Solola',
  'Totonicapan',
  'Quetzaltenango',
  'Suchitepequez',
  'Retalhuleu',
  'San_Marcos',
  'Huehuetenango',
  'Quiche',
  'Baja_Verapaz',
  'Alta_Verapaz',
  'Peten',
  'Izabal',
  'Zacapa',
  'Chiquimula',
  'Jalapa',
  'Jutiapa',
] as const;

export type EnumDepto = typeof enumDeptos[number];
export interface Genero {
  hombres: number;
  mujeres: number;
}
export interface Poblacion {
  total: number;
  porGenero: Genero;
  urbana: number;
  rural: number;
}
