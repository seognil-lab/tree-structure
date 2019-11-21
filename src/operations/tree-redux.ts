import { createStore } from 'redux';
import { TreeReducer } from '../types/tree-ops';
import { TreeData } from '../types/tree-data';
import * as ActionPool from '../utils/tree-action-funcs';

export const treeReducer: TreeReducer = (tree, action) => {
  if (ActionPool[action.type]) {
    return ActionPool[action.type](tree, action);
  } else {
    return tree;
  }
};

export const createTreeStore = (treeData: TreeData) => createStore(treeReducer, treeData);
