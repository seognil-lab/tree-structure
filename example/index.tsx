import * as React from 'react';
import ReactDOM from 'react-dom';

import LockTree from '../src/index';
import { treeData } from '../src/mock/tree-data';

ReactDOM.render(<LockTree tree={treeData} />, document.querySelector('#app'));
