import * as React from 'react';
import { ConnectedComponent } from 'react-redux';
import { EditorState } from '../store/editor-store';
import { OverlayID } from '../types/overlay';

export type TreeRenderState = {
  id: OverlayID;
  depth: number;
  insertIndicator?: any;
};

// * for comp declaration
export type TreeCellComp = React.FC<
  EditorState & { treeRenderState: TreeRenderState } & { dispatch }
>;

// * for comp usage
export type ConnectedTreeCellComp = ConnectedComponent<
  React.FC<{ treeRenderState: TreeRenderState; key? }>,
  Pick<any, any>
>;
