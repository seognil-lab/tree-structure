export type TreeData = {
  relations: RelationPool;
  overlays: OverlayDataPool;
};

export type RelationPool = {
  root: OverlayID[];
  [groupId: string]: OverlayID[];
};

export type OverlayDataPool = {
  [overlayId: string]: OverlayData;
};

export type OverlayData = {
  id: OverlayID;
  type: OverlayType | string;

  title: string;
  pos?: CenterPosition;
  detail?: {
    hidden?: boolean;
    locked?: boolean;
    collapsed?: boolean;
    [attr: string]: any;
  };
};

// * --------------------------------

export type OverlayID = string;

export enum OverlayType {
  'GROUP' = 'group',
  'OVERLAY' = 'overlay',
}

export type OverlayPosition = {
  center: Vector;
  size: Vector;
  rotate?: Degree;
};

export type CenterPosition = OverlayPosition;

export type LeftTopPosition = {
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: Degree;
};

export type Vector = [number, number];
export type Degree = number;
