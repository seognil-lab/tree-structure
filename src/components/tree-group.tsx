import * as React from 'react';
import { connect } from 'react-redux';

import { TreeCellComp, TreeRenderState, ConnectedTreeCellComp } from './comp-type';
import { OverlayType } from '../types/overlay';
import { ConnectedTreeItem as TreeItem } from './tree-item';

const TreeGroup: TreeCellComp = props => {
  const { currentPageOverlays, editorStatus, treeRenderState } = props;
  const { relations, overlays } = currentPageOverlays;
  const { selectedOverlays, copiedOverlays } = editorStatus;
  const { id, depth = -1, insertIndicator } = treeRenderState;

  const isRoot = id === 'root';
  const groupOverlay = overlays[id];

  const childrenOverlays = relations[id].map(id => overlays[id]);

  const collapsed = isRoot ? false : groupOverlay.detail.collapsed;
  const folderClassName = ['tree-folder', collapsed ? 'collapsed' : ''].join(' ');

  return (
    <>
      {/* root-self doesnt render to an item */}
      {!isRoot && <TreeItem key={id} treeRenderState={treeRenderState} />}

      {childrenOverlays && childrenOverlays.length !== 0 && (
        <ul className={folderClassName}>
          {childrenOverlays.map(overlay => {
            const { id, type } = overlay;

            const TreeChild = type === OverlayType.GROUP ? ConnectedTreeGroup : TreeItem;
            const childRenderProps = { id, depth: depth + 1 } as TreeRenderState;

            return <TreeChild key={id} treeRenderState={childRenderProps} />;
          })}
        </ul>
      )}
    </>
  );
};

export const ConnectedTreeGroup = connect(s => s)(TreeGroup) as ConnectedTreeCellComp;
