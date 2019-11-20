import * as React from 'react';
import { useContext } from 'react';
import { TreeData, OverlayID, OverlayType } from '../types/tree-data';
import { TreeItem } from './tree-item';
import { TreeContext } from './context';

type GroupComp = React.FC<{
  depth?: number;
  id?: OverlayID;
}>;
export const Group: GroupComp = ({ id = 'root', depth = -1 }) => {
  const { tree } = useContext(TreeContext);
  const { relations, overlays } = tree;

  const currentNode = overlays[id];
  const cur = currentNode;

  const children = relations[id];
  const childDepth = depth + 1;

  return (
    <>
      {cur && <TreeItem key={id} id={cur.id} depth={depth} />}

      {children && children.length !== 0 && (
        <ul className="treenode--folder">
          {children
            .map(id => overlays[id])
            .map(overlay => {
              const { id, type } = overlay;
              const ChildNode = type === OverlayType.GROUP ? Group : TreeItem;
              return <ChildNode key={id} id={id} depth={childDepth} />;
            })}
        </ul>
      )}
    </>
  );
};
