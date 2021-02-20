import { Departamento } from '../../../lib/types/poblacion';
import { EnumDepto } from './types';

export const mapEnumToDepartamento = (enumDpto: EnumDepto): Departamento => {
  const map: Record<EnumDepto, Departamento> = {
    Guatemala: 'Guatemala',
    El_Progeso: 'El Progreso',
    Sacatepequez: 'Sacatepéquez',
    Chimaltenango: 'Chimaltenango',
    Escuintla: 'Escuintla',
    Santa_Rosa: 'Santa Rosa',
    Solola: 'Sololá',
    Totonicapan: 'Totonicapán',
    Quetzaltenango: 'Quetzaltenango',
    Suchitepequez: 'Suchitepéquez',
    Retalhuleu: 'Retalhuleu',
    San_Marcos: 'San Marcos',
    Huehuetenango: 'Huehuetenango',
    Quiche: 'Quiché',
    Baja_Verapaz: 'Baja Verapaz',
    Alta_Verapaz: 'Alta Verapaz',
    Peten: 'Petén',
    Izabal: 'Izabal',
    Zacapa: 'Zacapa',
    Chiquimula: 'Chiquimula',
    Jalapa: 'Jalapa',
    Jutiapa: 'Jutiapa',
  };
  return map[enumDpto];
};
