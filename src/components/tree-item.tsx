import * as React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquare, faStickyNote } from '@fortawesome/free-regular-svg-icons';
import {
  faEye,
  faLock,
  faUnlock,
  faChevronDown,
  faFolderOpen,
  faFolder,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

import { OverlayID, OverlayType, TreeData } from '../types/tree-data';
import { TreeActionType, TreeStore } from '../types/tree-ops';

// * ----------------------------------------------------------------

const noop = e => {};

const IconFactory = (className = [], icon?) => ({ onClick = noop }) => (
  <span onClick={onClick} className={['tree-icon', ...className].join(' ')}>
    {icon && <FontAwesomeIcon icon={icon} />}
  </span>
);

const FaFolderOpen = IconFactory(['fii-type', 'fii-folder-open'], faFolderOpen);
const FaFolder = IconFactory(['fii-type', 'fii-folder'], faFolder);
const FaItem = IconFactory(['fii-type', 'fii-item'], faStickyNote);

// TODO merge Comp, class change only
const FaDown = IconFactory(['fii-switcher'], faCaretDown);
const FaRight = IconFactory(['fii-switcher', 'fii-collapsed'], faCaretDown);

const FaShown = IconFactory(['fii-eye', 'fii-eye-shown'], faEye);
const FaHidden = IconFactory(['fii-eye', 'fii-eye-hidden'], faSquare);

const FaLock = IconFactory(['fii-locker', 'fii-locked'], faLock);
const FaUnlock = IconFactory(['fii-locker', 'fii-unlocked'], faUnlock);

// * ----------------------------------------------------------------

type TreeProps = { depth: number; id: OverlayID };
type TreeItemComp = React.FC<TreeProps & TreeData & TreeStore>;

const TreeItemRaw: TreeItemComp = ({ id, depth, relations, overlays, dispatch }) => {
  const currentNode = overlays[id];
  const {
    title,
    type,
    detail: { collapsed, hidden, locked },
  } = currentNode;

  const isGroup = type === OverlayType.GROUP;
  const isShown = !hidden;

  console.log(isGroup);

  // * --------------------------------

  const CollapseIcon = collapsed ? FaRight : FaDown;
  const TypeIcon = isGroup ? (collapsed ? FaFolder : FaFolderOpen) : FaItem;
  const EyeIcon = isShown ? FaShown : FaHidden;
  const LockerIcon = locked ? FaLock : FaUnlock;

  // * --------------------------------

  return (
    <li
      className="tree-item"
      onClick={() => {
        console.log('click item');
      }}
    >
      <div
        className="tree-item-info"
        style={{
          paddingLeft: `${depth * 8}px`,
        }}
      >
        {isGroup && (
          <CollapseIcon
            onClick={() => dispatch({ type: TreeActionType.toggleCollapseSelected, payload: id })}
          />
        )}
        <TypeIcon />
        <span className="tree-item-title">{`${title} [${id}]`}</span>
      </div>
      <EyeIcon
        onClick={() => dispatch({ type: TreeActionType.toggleDisplaySelected, payload: id })}
      />
      <LockerIcon
        onClick={() => dispatch({ type: TreeActionType.toggleLockSelected, payload: id })}
      />
    </li>
  );
};

export const TreeItem = connect(s => s)(TreeItemRaw);
