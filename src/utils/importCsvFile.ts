import { dirname } from 'path';
import { join as pathJoin } from 'path';
import papa from 'papaparse';
import { read } from './file';
import { exportJsonFile } from './exportJsonFile';

// Helper function to import CSV file.

export const importCsvFile = async (filePath: string): Promise<unknown[]> => {
  try {
    const textFileData = await read(pathJoin(__dirname, filePath));
    const result = papa.parse(textFileData, { header: true, dynamicTyping: true });
    return result.data;
  } catch (error) {
    throw new Error(`Error parsing csv file: ${error?.message ?? error}`);
  }
};

importCsvFile('../../data_ine/poblacion_test.csv')
  .then((data) => {
    exportJsonFile(pathJoin(__dirname, './output/poblacion.json'), data);
  })
  .catch((error) => console.error(JSON.stringify(error)));
