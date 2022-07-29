import {Platform} from 'react-native';

import {IMarginsForIos} from '../types';

import {
  BOTTOMBAR_DEFAULT_HEIGHT,
  BOTTOMBAR_IP11_HEIGHT,
  IP12_HEIGHT,
  IP12_WIDTH,
  IP12MAX_HEIGHT,
  IP12MAX_WIDTH,
  STATUSBAR_DEFAULT_HEIGHT,
  STATUSBAR_IP12_HEIGHT,
  STATUSBAR_IP12MAX_HEIGHT,
  STATUSBAR_X_HEIGHT,
  X_HEIGHT,
  X_WIDTH,
  XSMAX_HEIGHT,
  XSMAX_WIDTH,
} from './constants';

const getIosSafeAreaHeights = (
  width: number,
  height: number,
): IMarginsForIos => {
  let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;
  let bottomBarHeight = BOTTOMBAR_DEFAULT_HEIGHT;
  if (
    Platform.OS === 'android' ||
    (Platform.OS === 'ios' && (Platform.isPad || Platform.isTVOS))
  ) {
    return {topIosMargin: 0, bottomIosMargin: 0};
  }
  if (width === X_WIDTH && height === X_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
    bottomBarHeight = BOTTOMBAR_IP11_HEIGHT;
  } else if (width === XSMAX_WIDTH && height === XSMAX_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
    bottomBarHeight = BOTTOMBAR_IP11_HEIGHT;
  } else if (width === IP12MAX_WIDTH && height === IP12MAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
    bottomBarHeight = BOTTOMBAR_IP11_HEIGHT;
  } else if (width === IP12_WIDTH && height === IP12_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12_HEIGHT;
    bottomBarHeight = BOTTOMBAR_IP11_HEIGHT;
  }

  return {topIosMargin: statusBarHeight, bottomIosMargin: bottomBarHeight};
};

export default getIosSafeAreaHeights;
