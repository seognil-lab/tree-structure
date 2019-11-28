import { EditorReducer, EditorState, editorReducer } from '../store/editor-store';
import mergeDeepRight from 'ramda/es/mergeDeepRight';
import { OverlayID } from '../types/overlay';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

// * ================================================================================

export const mockPop: EditorReducer = (state, { payload }) =>
  mergeDeepRight(state, {
    currentPageOverlays: {
      relations: { root: state.currentPageOverlays.relations.root.slice(0, -1) },
    },
  }) as EditorState;

// * ================================================================================

// * 新建一个组 没有PS层的概念 所以只能新建组
export const createEmptyGroup: EditorReducer = (state, { payload }) => {
  return state;
};

// * 删除 选中的任意东西
export const deleteOverlays: EditorReducer = (state, { payload }) => {
  return state;
};

// * 复制 选中的任意东西（的 id）
export const copyOverlays: EditorReducer = (state, { payload }) => {
  const ids: OverlayID[] = payload;
  const patch: DeepPartial<EditorState> = { editorStatus: { copiedOverlays: ids } };
  return mergeDeepRight(state, patch) as EditorState;
};

// * 粘贴 选中的任意东西（克隆 data）
export const pasteOverlays: EditorReducer = (state, { payload }) => {
  return state;
};

// * 激活 选中的任意东西
export const activeOverlays: EditorReducer = (state, { payload }) => {
  const ids: OverlayID[] = payload;
  const patch: DeepPartial<EditorState> = { editorStatus: { selectedOverlays: ids } };
  return mergeDeepRight(state, patch) as EditorState;
};

// * --------------------------------

// * 移动位置
export const moveOverlays: EditorReducer = (state, { payload }) => {
  return state;
};

// * animation
export const renderSelectedFloater: EditorReducer = (state, { payload }) => {
  return state;
};

// * --------------------------------

// * 加组 选中的任意东西 （移动）
export const groupOverlays: EditorReducer = (state, { payload }) => {
  return state;
};

// * 解散当前组
export const ungroupByGroupId: EditorReducer = (state, { payload }) => {
  return state;
};

// * --------------------------------

// * 撤销功能
export const undoAction: EditorReducer = (state, { payload }) => {
  return state;
};

// * 取消撤销功能
export const redoAction: EditorReducer = (state, { payload }) => {
  return state;
};
