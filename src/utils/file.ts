/**
 * utility function for reading and writing files
 */
import { readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';

// Read a textfile from file system

export const read = async (fileName: string): Promise<string | void> => {
  try {
    const textFileData = await readFile(fileName, { encoding: 'utf-8' });
    return textFileData;
  } catch (error) {
    // throw new Error(`Error reading file: ${error?.message ?? error}`);
    console.error(JSON.stringify(error.stack, null, 4));
  }
};

// Write a text file to the file system

export const write = async (fileName: string, textFileData: string): Promise<void> => {
  // console.log({ fileName, textFileData: JSON.stringify(textFileData, null, 4) });
  try {
    const resolved = await writeFile(fileName, textFileData);
    return resolved;
  } catch (error) {
    throw new Error(`Error writing file: ${error?.message ?? error}`);
  }
};
