import { OverlayDataPool, OverlayType } from '../types/tree-data';

/**
 *  root
 *    group1 1fb7fb
 *      item_A cfee83
 *      group2 05d02d
 *        item_B df54e3
 *        item_C 6f0aab
 *    group3 7d18a4
 *      item_D f9e084
 *    item_E a42baf
 *    group4 ca86e9
 */

export const relations = {
  'root': ['1fb7fb', '7d18a4', 'a42baf', 'ca86e9'],
  '1fb7fb': ['cfee83', '05d02d'],
  '05d02d': ['df54e3', '6f0aab'],
  '7d18a4': ['f9e084'],
  'ca86e9': [],
};

export const overlays: OverlayDataPool = {
  '1fb7fb': {
    id: '1fb7fb',
    type: OverlayType.GROUP,
    title: 'group1',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
  'cfee83': {
    id: 'cfee83',
    type: OverlayType.OVERLAY,
    title: 'item_A',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
  '05d02d': {
    id: '05d02d',
    type: OverlayType.GROUP,
    title: 'group2',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
  'df54e3': {
    id: 'df54e3',
    type: OverlayType.OVERLAY,
    title: 'item_B',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
  '6f0aab': {
    id: '6f0aab',
    type: OverlayType.OVERLAY,
    title: 'item_C',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
  '7d18a4': {
    id: '7d18a4',
    type: OverlayType.GROUP,
    title: 'group3',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
  'f9e084': {
    id: 'f9e084',
    type: OverlayType.OVERLAY,
    title: 'item_D',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
  'a42baf': {
    id: 'a42baf',
    type: OverlayType.OVERLAY,
    title: 'item_E',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
  'ca86e9': {
    id: 'ca86e9',
    type: OverlayType.OVERLAY,
    title: 'group4',
    pos: { center: [0, 0], size: [100, 100] },
    detail: {},
  },
};

export const treeData = {
  relations,
  overlays,
};
