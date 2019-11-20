import { createContext } from 'react';
import { TreeData } from '../types/tree-data';

export type TreeContext = React.Context<{ tree: TreeData }>;
export const createTreeContext = (): TreeContext => createContext(null);
