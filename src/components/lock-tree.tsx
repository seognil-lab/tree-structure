import * as React from 'react';

import { TreeData } from '../types/tree-data';

export type UpdateNotifier = (tree: TreeData) => any;
export type TreeCompProps = { tree: TreeData; onUpdate?: UpdateNotifier };
export type TreeComp = React.FC<TreeCompProps>;

export const LockTree: TreeComp = ({ tree, onUpdate }) => {
  const { relations, overlays } = tree;
  return (
    <>
      {relations.root
        .map(id => overlays[id])
        .map(overlay => {
          const { id, type, title } = overlay;
        })}
    </>
  );
};

export default LockTree;
