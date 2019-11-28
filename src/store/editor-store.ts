import { Reducer, Store, Action } from 'redux';
import * as EditorActionPool from '../utils/editor-reducer';
import * as OverlayActionPool from '../utils/overlay-reducer';
import { ReducerAutoload, AdvanceCombineReducers } from '../utils/reducer-autoload';
import { OverlayID, OverlayInfoPool } from '../types/overlay';

// * ---------------- empty state

export const emptyTree: OverlayInfoPool = {
  relations: { root: [] },
  overlays: {},
};

export const emptyEditorStatus = {
  selectedOverlays: [] as OverlayID[],
  copiedOverlays: [] as OverlayID[],
};

export const emptyEditorState = {
  currentPageOverlays: emptyTree,
  editorStatus: emptyEditorStatus,
};

// * ---------------- state

export type EditorState = typeof emptyEditorState;

// * ---------------- action

type ActionByType<T> = {
  type: T;
  payload?: any;
};

export type EditorActionType = keyof typeof EditorActionPool;
export type OverlayActionType = keyof typeof OverlayActionPool;

export type EditorAction = ActionByType<EditorActionType>;

export type OverlayAction = ActionByType<OverlayActionType>;

// * ---------------- reducer

export type EditorReducer = Reducer<EditorState, EditorAction>;
export type OverlayReducer = Reducer<OverlayInfoPool, OverlayAction>;

export const rootReducer: EditorReducer = ReducerAutoload(EditorActionPool, emptyEditorState);

export const overlayReducer: OverlayReducer = ReducerAutoload(OverlayActionPool, emptyTree);

export const editorReducer = AdvanceCombineReducers(
  {
    root: rootReducer,
    currentPageOverlays: overlayReducer,
  },
  emptyEditorState,
);

export type CombineReducers = {
  [key in keyof EditorState]: Reducer;
};

// * ---------------- store

export type EditorStore = Store<EditorState, EditorAction & OverlayAction>;
