import { TreeData } from './tree-data';
import { Reducer, Store } from 'redux';

import * as TreeActionPool from '../utils/tree-action-funcs';

// export const TreeActionType = Object.keys(TreeActionPool);

// ! declare for type autocomplete, could be done automaticly? don;t know how yet
export enum TreeActionType {
  createEmptyGroup = 'createEmptyGroup',
  deleteSelected = 'deleteSelected',
  copySelected = 'copySelected',
  pasteLastCopied = 'pasteLastCopied',
  activeSelected = 'activeSelected',
  // * ----------------
  moveSelected = 'moveSelected',
  renderSelectedFloater = 'renderSelectedFloater',
  // * ----------------
  groupSelected = 'groupSelected',
  ungroupByGroupId = 'ungroupByGroupId',
  // * ----------------
  toggleLockSelected = 'toggleLockSelected',
  toggleDisplaySelected = 'toggleDisplaySelected',
  toggleCollapseSelected = 'toggleCollapseSelected',
  // * ----------------
  undoAction = 'undoAction',
  redoAction = 'redoAction',
  mockPop = 'mockPop',
}

export type TreeAction = {
  type: TreeActionType;
  payload?: any;
};

export type TreeReducer = Reducer<TreeData, TreeAction>;

export type TreeStore = Store<TreeData, TreeAction>;
