import * as React from 'react';
import ReactDOM from 'react-dom';

import TreeContainer from '../src/index';
import { treeData } from '../src/mock/tree-data';

import './app.less';

ReactDOM.render(<TreeContainer tree={treeData} />, document.querySelector('#app'));

setTimeout(() => {
  ReactDOM.render(<TreeContainer tree={treeData} />, document.querySelector('#app'));
}, 3000);

// ReactDOM.render(
//   <>
//     <br/>
//     <TreeContainer tree={treeData} />
//   </>
//   document.body.appendChild(document.createElement('div')),
// );
