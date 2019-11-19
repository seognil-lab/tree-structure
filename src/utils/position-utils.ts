import {
  OverlayData,
  OverlayPosition,
  LeftTopPosition,
  CenterPosition,
  Vector,
} from '../types/tree-data';
import { CornerPoints } from '../types/bounding-rect';

const leftToCenter = (pos: LeftTopPosition): CenterPosition => {
  const { left, top, width, height, rotate } = pos;

  const newPos = {
    center: [left - width / 2, top - height / 2] as Vector,
    size: [width, height] as Vector,
    rotate,
  };

  return newPos;
};
const centerToLeft = (pos: CenterPosition): LeftTopPosition => {
  const {
    center: [x, y],
    size: [w, h],
    rotate,
  } = pos;

  const newPos = {
    left: x + w / 2,
    top: y + h / 2,
    width: w,
    height: h,
    rotate,
  };
  return newPos;
};

const getHorizonPoints = (pos: CenterPosition): CornerPoints => {
  const {
    center: [x, y],
    size: [w, h],
  } = pos;
  const [l, r, t, b] = [x - w / 2, x + w / 2, y - h / 2, y + h / 2];
  const points = [[l, t], [r, t], [r, b], [l, b]] as CornerPoints;
  return points;
};

const getCornerPoints = (pos: CenterPosition) => {};

const getItemBoundingRect = (pos: CenterPosition) => {};

const groupBoundingRect = (overlays: OverlayData[]): OverlayPosition => {
  const posList = overlays.map(e => e.pos).map(e => {});

  return;
};
