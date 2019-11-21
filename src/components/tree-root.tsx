import * as React from 'react';
import { useEffect, useLayoutEffect, useMemo, useCallback, useReducer, useRef } from 'react';

import { createDragStreamFactory } from '../operations/rxjs-action';
import { TreeData } from '../types/tree-data';
// import { TreeContext } from './context';
import { Group } from './tree-group';

import { Provider } from 'react-redux';

import '../styles/tree.less';

import '../operations/tree-redux';
import { TreeStore, TreeActionType } from '../types/tree-ops';

type UpdateNotifier = (tree: TreeData) => any;
type TreeCompProps = { treeStore: TreeStore; onUpdate?: UpdateNotifier };
type TreeComp = React.FC<TreeCompProps>;

const reducer = (tree: TreeData, action) => {
  return {
    ...tree,
    relations: {
      ...tree.relations,
      root: tree.relations.root.slice(0, -1),
    },
  } as TreeData;
};

export const TreeContainer = ({ treeStore }) => {
  console.log(treeStore);
  const domRef = useRef<HTMLDivElement>(null);

  {
    // const createDragStream = useCallback(() => createDragStreamFactory(domRef.current), [domRef]);

    useLayoutEffect(() => {
      //   const mouseControl$ = createDragStream();
      //   const sub = mouseControl$.subscribe(e => console.log('drag', e[0], e[1]));
      //   return () => {
      //     sub.unsubscribe();
      //   };
    });
  }

  return (
    <>
      <Provider store={treeStore}>
        <div
          className="tree-container"
          ref={domRef}
          onClick={e => {
            // treeStore.dispatch({ type: TreeActionType.mockPop });
            // treeStore.dispatch({ type: '' });
          }}
        >
          <Group id={'root'} />
        </div>
      </Provider>
      {/* {Math.random()} */}
    </>
  );
};

export default TreeContainer;
