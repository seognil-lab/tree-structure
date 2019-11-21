import { TreeReducer } from '../types/tree-ops';
import { TreeData, OverlayID, OverlayData, OverlayDetail } from '../types/tree-data';

import pickAll from 'ramda/es/pickAll';
import map from 'ramda/es/map';
import mergeDeepRight from 'ramda/es/mergeDeepRight';

type OverlayDataDetailOnly = {
  detail: OverlayDetail;
};

export const mockPop: TreeReducer = (tree, { payload }) => {
  return {
    ...tree,
    relations: {
      ...tree.relations,
      root: tree.relations.root.slice(0, -1),
    },
  } as TreeData;
};

// * ================================================================================

// * 新建一个组 没有PS层的概念 所以只能新建组
export const createEmptyGroup: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * 删除 选中的任意东西
export const deleteSelected: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * 复制 选中的任意东西（的 id）
export const copySelected: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * 粘贴 选中的任意东西（克隆 data）
export const pasteLastCopied: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * 激活 选中的任意东西
export const activeSelected: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * --------------------------------

// * 移动位置
export const moveSelected: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * animation
export const renderSelectedFloater: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * --------------------------------

// * 加组 选中的任意东西 （移动）
export const groupSelected: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * 解散当前组
export const ungroupByGroupId: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * --------------------------------

// TODO (detailKeyName: key in OverlayDetail) in typescript way, dont know how yet
const DetailChangerFactory = (detailKeyName: string): TreeReducer => (tree, { payload }) => {
  // * single to array
  const ids: OverlayID[] = Array.isArray(payload) ? payload : [payload];

  if (ids.length === 0) return tree;

  // * ----------------

  const { overlays } = tree;

  // * if multi Selected, next state by first one, photoshop logic
  const nextValue = !overlays[ids[0]].detail[detailKeyName];

  const patch = {
    overlays: map(
      (): OverlayDataDetailOnly => ({ detail: { [detailKeyName]: nextValue } }),
      pickAll(ids, overlays),
    ),
  };

  const nextTree = mergeDeepRight(tree, patch) as TreeData;
  return nextTree;
};

// * 锁定元素
export const toggleLockSelected = DetailChangerFactory('locked');

// * 显示隐藏
export const toggleDisplaySelected = DetailChangerFactory('hidden');

// * 折叠面板
export const toggleCollapseSelected = DetailChangerFactory('collapsed');

// * --------------------------------

// * 撤销功能
export const undoAction: TreeReducer = (tree, { payload }) => {
  return tree;
};

// * 取消撤销功能
export const redoAction: TreeReducer = (tree, { payload }) => {
  return tree;
};
