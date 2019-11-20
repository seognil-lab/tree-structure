export type EpubOverlayData = {
  id: string;
  iType: string;
  iCommon: {
    landscape: {
      iWidth: number;
      iHeight: number;
      iStartx: number;
      iStarty: number;
    };
    portait?: any;
  };
  iDetail: {
    rotate: number;
    [keys: string]: any;
  };
  iHidden?: boolean;
  iLock?: boolean;
  suboverlays?: any[];
};

// * ----------------------------------------------------------------

// const demoJSON = {
//   id: '1344231290611',
//   iType: '5',
//   iCommon: {
//     landscape: {
//       iWidth: 600,
//       iHeight: 600,
//       iStartx: 339,
//       iStarty: 38,
//     },
//     portait: {
//       iWidth: 600,
//       iHeight: 800,
//       iStartx: 100,
//       iStarty: 100,
//     },
//   },
//   iDetail: {
//     iSwapdirection: 'vertical',
//     iRowspace: 5,
//     iColspace: 5,
//     iName: '3x3-black',
//     iBgcolor: '000000',
//     iImg: '',
//     iRows: '3',
//     iCols: 3,
//   },
//   iHidden: true,
//   iLock: true,
//   suboverlays: [],
// };
