import { mergeTypeDefs } from '@graphql-tools/merge';
import { root } from './root';
import { poblacion } from './poblacion';

const schemaArray = [poblacion, root];
export const mergedTypesDefs = mergeTypeDefs(schemaArray);
