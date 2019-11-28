import { EpubOverlayModel } from '../types/epub-overlay';
import { OverlayModel, Vector } from '../types/overlay';

export const transferToV2 = (overlay: EpubOverlayModel): OverlayModel => {
  const {
    id,
    iType,
    iCommon: {
      landscape: { iWidth, iHeight, iStartx, iStarty },
    },
    iDetail,
    iDetail: { title, rotate },
  } = overlay;

  const newForm = {
    id,
    type: iType,
    title,
    pos: {
      center: [iStartx + iWidth / 2, iStarty + iHeight / 2] as Vector,
      size: [iWidth, iHeight] as Vector,
      rotate,
    },
    detail: iDetail,
  };
  return newForm;
};

export const transferToLegacy = (overlay: OverlayModel): EpubOverlayModel => {
  const {
    id,
    type: iType,
    title,
    pos: {
      center: [x, y],
      size: [w, h],
      rotate,
    },
    detail: iDetail,
  } = overlay;

  const newForm = {
    id,
    iType,
    iCommon: {
      landscape: {
        iStartx: x - w / 2,
        iStarty: y - h / 2,
        iWidth: w,
        iHeight: h,
      },
    },
    iDetail: {
      ...iDetail,
      title,
      rotate,
    },
  };

  return newForm;
};
