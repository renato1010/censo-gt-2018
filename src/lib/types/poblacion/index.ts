const departamentos = [
  'Guatemala',
  'El Progreso',
  'Sacatepéquez',
  'Chimaltenango',
  'Escuintla',
  'Santa Rosa',
  'Sololá',
  'Totonicapán',
  'Quetzaltenango',
  'Suchitepéquez',
  'Retalhuleu',
  'San Marcos',
  'Huehuetenango',
  'Quiché',
  'Baja Verapaz',
  'Alta Verapaz',
  'Petén',
  'Izabal',
  'Zacapa',
  'Chiquimula',
  'Jalapa',
  'Jutiapa',
] as const;

type Departamento = typeof departamentos[number];

export interface DeptoPoblacion {
  codigo: number;
  departamento: Departamento;
  poblacion_total: number;
  hombres: number;
  mujeres: number;
  '0 - 4': number;
  '5 - 9': number;
  '10 - 14': number;
  '15 - 19': number;
  '20 - 24': number;
  '25 - 29': number;
  '30 - 34': number;
  '35 - 39': number;
  '40 - 44': number;
  '45 - 49': number;
  '50 - 54': number;
  '55 - 59': number;
  '60 - 64': number;
  '65 - 69': number;
  '70 - 74': number;
  '75 - 79': number;
  '80 - 84': number;
  '85 - 89': number;
  '90 - 94': number;
  '95 - 99': number;
  '100 o más': number;
  urbana: number;
  rural: number;
}
