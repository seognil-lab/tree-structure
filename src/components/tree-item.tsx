import { faSquare, faStickyNote } from '@fortawesome/free-regular-svg-icons';
import {
  faCaretDown,
  faEye,
  faFolder,
  faFolderOpen,
  faLock,
  faUnlock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EditorActionType, OverlayActionType } from '../store/editor-store';
import { OverlayType } from '../types/overlay';
import { ConnectedTreeCellComp, TreeCellComp } from './comp-type';

// * ================================================================================ IconFactory

const noop = e => {};

const IconFactory = (basicClass = [], icon) => ({ onClick = noop, statusClass = [] }) => (
  <span onClick={onClick} className={['tree-icon', ...basicClass, ...statusClass].join(' ')}>
    {icon && <FontAwesomeIcon icon={icon} />}
  </span>
);

const IconFolderOpen = IconFactory(['fii-type', 'fii-folder-open'], faFolderOpen);
const IconFolder = IconFactory(['fii-type', 'fii-folder'], faFolder);
const IconItem = IconFactory(['fii-type', 'fii-item'], faStickyNote);

// TODO merge Comp, class change only
const IconCollapse = IconFactory(['fii-switcher'], faCaretDown);

const IconShown = IconFactory(['fii-eye', 'fii-eye-shown'], faEye);
const IconHidden = IconFactory(['fii-eye', 'fii-eye-hidden'], faSquare);

const IconLock = IconFactory(['fii-locker', 'fii-locked'], faLock);
const IconUnlock = IconFactory(['fii-locker', 'fii-unlocked'], faUnlock);

// * ================================================================================ TreeItem

type EditorDispatch = Dispatch<{ type: OverlayActionType | EditorActionType }>;

const TreeItem: TreeCellComp = props => {
  const { currentPageOverlays, editorStatus, treeRenderState } = props;
  const { relations, overlays } = currentPageOverlays;
  const { selectedOverlays, copiedOverlays } = editorStatus;
  const { id, depth, insertIndicator } = treeRenderState;

  const dispatch = props.dispatch as EditorDispatch;

  const currentOverlayData = overlays[id];

  const {
    title,
    type,
    detail: { collapsed, hidden, locked },
  } = currentOverlayData;

  const isGroup = type === OverlayType.GROUP;
  const isShown = !hidden;

  // * --------------------------------

  const activeClass = selectedOverlays.includes(id) ? 'actived' : '';
  const collapseClass = collapsed ? ['fii-collapsed'] : [];
  const IconType = isGroup ? (collapsed ? IconFolder : IconFolderOpen) : IconItem;
  const IconEye = isShown ? IconShown : IconHidden;
  const IconLocker = locked ? IconLock : IconUnlock;

  // * ------------------------------------------------ render

  return (
    <li
      className={'tree-item ' + activeClass}
      onClick={() => dispatch({ type: 'activeOverlays', payload: [id] })}
    >
      <div className="tree-item-info" style={{ paddingLeft: `${depth * 8}px` }}>
        {isGroup && (
          <IconCollapse
            statusClass={collapseClass}
            onClick={() => dispatch({ type: 'toggleOverlaysCollapse', payload: id })}
          />
        )}
        <IconType />
        <span className="tree-item-title">{`${title} [${id}]`}</span>
      </div>
      <IconEye onClick={() => dispatch({ type: 'toggleOverlaysDisplay', payload: id })} />
      <IconLocker onClick={() => dispatch({ type: 'toggleOverlaysLock', payload: id })} />
    </li>
  );
};

// * ================================================================================

export const ConnectedTreeItem = connect(s => s)(TreeItem) as ConnectedTreeCellComp;
