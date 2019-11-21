import * as React from 'react';
import { connect } from 'react-redux';

import { TreeItem } from './tree-item';
import { TreeData, OverlayID, OverlayType } from '../types/tree-data';
import { TreeStore } from '../types/tree-ops';

type GroupProps = { depth?: number; id?: OverlayID };
type GroupComp = React.FC<GroupProps & TreeData & TreeStore>;

const GroupRaw: GroupComp = ({ id, relations, overlays, depth = -1 }) => {
  const isRoot = id === 'root';
  const groupOverlay = overlays[id];

  const children = relations[id];
  const childDepth = depth + 1;

  const collapsed = isRoot ? false : groupOverlay.detail.collapsed;
  const folderClassName = ['tree-folder', collapsed ? 'collapsed' : ''].join(' ');

  return (
    <>
      {groupOverlay && <TreeItem key={id} id={id} depth={depth} />}

      {children && children.length !== 0 && (
        <ul className={folderClassName}>
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

export const Group = connect(s => s)(GroupRaw);
