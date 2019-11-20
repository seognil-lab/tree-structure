import * as React from 'react';
import { useEffect, useLayoutEffect, useMemo, useCallback, useReducer, useRef } from 'react';

import { createDragStreamFactory } from '../actions/rxjs-action';
import { TreeData } from '../types/tree-data';
import { TreeContext } from './context';
import { Group } from './tree-group';

import '../styles/tree.less';

type UpdateNotifier = (tree: TreeData) => any;
type TreeCompProps = { tree: TreeData; onUpdate?: UpdateNotifier };
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

export const TreeContainer: TreeComp = ({ tree, onUpdate }) => {
  console.log('lcdebug 2c2673', 'into', tree);
  const domRef = useRef<HTMLDivElement>(null);

  const [innerTree, dispatch] = useReducer(reducer, tree);

  const createDragStream = useCallback(() => createDragStreamFactory(domRef.current), [domRef]);

  useLayoutEffect(() => {
    const mouseControl$ = createDragStream();

    const sub = mouseControl$.subscribe(e => console.log('drag', e[0], e[1]));

    return () => {
      sub.unsubscribe();
    };
  });

  useEffect(() => {
    // effect;
    console.log('lcdebug c48599', 'eff', undefined);
    return () => {
      // cleanup;
    };
  });

  return (
    <>
      <TreeContext.Provider value={{ tree: innerTree }}>
        <div
          className={'treenode--container'}
          ref={domRef}
          onClick={e => {
            // console.log(e);
            // dispatch({});
          }}
        >
          <Group id={'root'} />
        </div>
      </TreeContext.Provider>
      {Math.random()}
    </>
  );
};

export default TreeContainer;
