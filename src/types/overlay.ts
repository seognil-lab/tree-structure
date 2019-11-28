export type OverlayInfoPool = {
  relations: RelationPool;
  overlays: OverlayModelPool;
};

export type RelationPool = {
  root: OverlayID[];
  [groupId: string]: OverlayID[];
};

export type OverlayModelPool = {
  [overlayId: string]: OverlayModel;
};

// * --------------------------------

export type OverlayModel = {
  id: OverlayID;
  type: OverlayType | string;

  title: string;
  pos?: CenterPosition;
  detail?: OverlayDetail;
};

// * --------------------------------

export type OverlayID = string;

export enum OverlayType {
  'GROUP' = 'group',
  'OVERLAY' = 'overlay',
}

export type OverlayDetail = {
  hidden?: boolean;
  locked?: boolean;
  collapsed?: boolean;
  [attr: string]: any;
};

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
