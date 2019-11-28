import * as React from 'react';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import '../styles/tree.less';
import { EditorStore } from '../store/editor-store';
// import { TreeContext } from './context';
import { ConnectedTreeGroup as TreeGroup } from './tree-group';

// type UpdateNotifier = (tree: TreeData) => any;
type TreeComp = React.FC<{
  rootStore: EditorStore;
  // onUpdate?: UpdateNotifier;
}>;

export const TreeContainer: TreeComp = ({ rootStore }) => {
  console.log('rerender');
  // TODO
  // * for rxjs
  const domRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Provider store={rootStore}>
        <div
          className="tree-container"
          ref={domRef}
          onClick={e => {
            //   console.log(e);
            //   treeStore.dispatch({ type: TreeActionType.mockPop });
            //   rootStore.dispatch({ type: '' });
            // rootStore.dispatch({ type: 'mockPop' });
          }}
        >
          <TreeGroup
            treeRenderState={{
              id: 'root',
              depth: -1,
            }}
          />
        </div>
      </Provider>
      {/* {Math.random()} */}
    </>
  );
};

export default TreeContainer;
