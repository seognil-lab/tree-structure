import * as React from 'react';
import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faFolder, faCircle, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faEye, faLock, faUnlock, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { OverlayID, OverlayType } from '../types/tree-data';
import { TreeContext } from './context';

// * ----------------------------------------------------------------

const noop = e => {};

const IconFactory = (className = [], icon?) => ({ onClick = noop }) => (
  <span onClick={onClick} className={['treenode--icon', ...className].join(' ')}>
    {icon && <FontAwesomeIcon icon={icon} />}
  </span>
);

const FaEmptyItem = IconFactory(['fii-type']);
const FaFolderOpen = IconFactory(['fii-type', 'fii-folder-open'], faFolderOpen);
const FaFolder = IconFactory(['fii-type', 'fii-folder'], faFolder);
const FaItem = IconFactory(['fii-type', 'fii-item'], faCircle);

const FaDown = IconFactory(['fii-switcher', 'fii-folder-open'], faChevronDown);
const FaRight = IconFactory(['fii-switcher', 'fii-folder-closed'], faChevronDown);

const FaShown = IconFactory(['fii-eye', 'fii-eye-shown'], faEye);
const FaHidden = IconFactory(['fii-eye', 'fii-eye-hidden'], faSquare);

const FaLock = IconFactory(['fii-locker', 'fii-locked'], faLock);
const FaUnlock = IconFactory(['fii-locker', 'fii-unlocked'], faUnlock);

// * ----------------------------------------------------------------

type TreeItem = React.FC<{ depth: number; id: OverlayID }>;
export const TreeItem: TreeItem = ({ depth, id }) => {
  const { tree } = useContext(TreeContext);
  const currentNode = tree.overlays[id];
  const {
    title,
    type,
    detail: { collapsed, hidden, locked },
  } = currentNode;

  const isGroup = type === OverlayType.GROUP;
  const isShown = !hidden;

  // * --------------------------------

  const Eye = isShown ? FaShown : FaHidden;
  const Locker = locked ? FaLock : FaUnlock;

  // * --------------------------------

  return (
    <li className="treenode--item">
      <Eye
        onClick={e => {
          console.warn('toggle eye');
        }}
      />
      <div
        className="treenode--item-info"
        style={{
          paddingLeft: depth * 12 + 'px',
        }}
      >
        {isGroup ? collapsed ? <FaRight /> : <FaDown /> : <FaEmptyItem />}
        {isGroup ? collapsed ? <FaFolder /> : <FaFolderOpen /> : <FaItem />}
        {type}: {title}, {id}
      </div>
      <Locker
        onClick={e => {
          console.warn('toggle locker');
        }}
      />
    </li>
  );
};
