import { Vector } from './tree-data';

export type Point = [number, number];

export type CornerPoints = [Point, Point, Point, Point];

export type BoundingRect = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  size: Vector;
};
