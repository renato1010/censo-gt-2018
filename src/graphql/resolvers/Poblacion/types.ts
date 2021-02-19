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
