import { merge } from 'ramda';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { TreeContainer } from '../src/index';
import { treeData } from '../src/mock/tree-data';
import {
  editorReducer,
  EditorState,
  EditorStore,
  emptyEditorState,
} from '../src/store/editor-store';
import './app.less';

const rootStore: EditorStore = createStore(
  editorReducer,
  merge(emptyEditorState, { currentPageOverlays: treeData }) as EditorState,
);

ReactDOM.render(<TreeContainer rootStore={rootStore} />, document.querySelector('#app'));

// setTimeout(() => {
//   ReactDOM.render(<TreeContainer treeStore={treeStore} />, document.querySelector('#app'));
// }, 3000);

// document.addEventListener('dblclick', (e: MouseEvent) => {
//   if ((e.target as HTMLElement).matches('body')) {
//     treeStore.dispatch({ type: TreeActionType.mockPop });
//   }
// });

// ReactDOM.render(
//   <>
//     <br />
//     <TreeContainer globalStore={globalStore} />
//   </>,
//   document.body.appendChild(document.createElement('div')),
// );
