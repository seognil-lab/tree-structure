import map from 'ramda/es/map';
import mergeDeepRight from 'ramda/es/mergeDeepRight';
import pickAll from 'ramda/es/pickAll';

import { OverlayReducer } from '../store/editor-store';
import { OverlayDetail, OverlayID, OverlayInfoPool } from '../types/overlay';

// * ================================================================================

const DetailChangerFactory = (detailKeyName: keyof OverlayDetail): OverlayReducer => (
  tree,
  { payload },
) => {
  // * single to array
  const ids: OverlayID[] = Array.isArray(payload) ? payload : [payload];

  if (ids.length === 0) return tree;

  // * ----------------

  const { overlays } = tree;

  // * if multi Selected, next state by first one, photoshop logic
  const nextValue = !overlays[ids[0]].detail[detailKeyName];

  const patch = {
    overlays: map(
      (): { detail: OverlayDetail } => ({ detail: { [detailKeyName]: nextValue } }),
      pickAll(ids, overlays),
    ),
  };

  const nextTree = mergeDeepRight(tree, patch) as OverlayInfoPool;
  return nextTree;
};

// * ------------------------------------------------

// * 锁定元素
export const toggleOverlaysLock = DetailChangerFactory('locked');

// * 显示隐藏
export const toggleOverlaysDisplay = DetailChangerFactory('hidden');

// * 折叠面板
export const toggleOverlaysCollapse = DetailChangerFactory('collapsed');
