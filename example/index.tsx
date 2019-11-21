import * as React from 'react';
import ReactDOM from 'react-dom';

import { TreeContainer } from '../src/index';
import { treeData } from '../src/mock/tree-data';

import './app.less';
import { createTreeStore } from '../src/operations/tree-redux';
import { TreeActionType } from '../src/types/tree-ops';

const treeStore = createTreeStore(treeData);

ReactDOM.render(<TreeContainer treeStore={treeStore} />, document.querySelector('#app'));

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
//     <TreeContainer treeStore={treeStore} />
//   </>,
//   document.body.appendChild(document.createElement('div')),
// );
