import { createContext } from 'react';
import { TreeData } from '../types/tree-data';

export const TreeContext = createContext<{ tree: TreeData }>(null);
