import { write } from './file';

export const exportJsonFile = async (fileName: string, data: unknown): Promise<void> => {
  const json = JSON.stringify(data, null, 4);
  try {
    await write(fileName, json);
  } catch (error) {
    console.error(`Error writing json file: ${error?.message ?? error}`);
  }
};
