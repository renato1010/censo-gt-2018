import { join as pathJoin } from 'path';
import { exportJsonFile } from './exportJsonFile';
import poblacion from './output/poblacion.json';

const processJasonFile = () => {
  const polishedJson = poblacion.map((item) => {
    return item.departamento;
  });
  const deptosObj = { departamentos: polishedJson };
  exportJsonFile(pathJoin(__dirname, './output/departamentos.json'), deptosObj);
};

processJasonFile();
