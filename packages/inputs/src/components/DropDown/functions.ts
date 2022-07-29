import {Platform} from 'react-native';
import {getModel} from 'react-native-device-info';

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
import {IMarginsForIos} from './types';

const statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;
const bottomBarHeight = BOTTOMBAR_DEFAULT_HEIGHT;

const getIosSafeAreaHeights = (): IMarginsForIos => {
  console.log(getModel());
  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    // if (width === X_WIDTH && height === X_HEIGHT) {
    //   statusBarHeight = STATUSBAR_X_HEIGHT;
    //   bottomBarHeight = BOTTOMBAR_IP11_HEIGHT;
    // } else if (width === XSMAX_WIDTH && height === XSMAX_HEIGHT) {
    //   statusBarHeight = STATUSBAR_X_HEIGHT;
    //   bottomBarHeight = BOTTOMBAR_IP11_HEIGHT;
    // } else if (width === IP12_WIDTH && height === IP12_HEIGHT) {
    //   statusBarHeight = STATUSBAR_IP12_HEIGHT;
    //   bottomBarHeight = BOTTOMBAR_IP11_HEIGHT;
    // } else if (width === IP12MAX_WIDTH && height === IP12MAX_HEIGHT) {
    //   statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
    //   bottomBarHeight = BOTTOMBAR_IP11_HEIGHT;
    // }
  }

  return {topIosMargin: statusBarHeight, bottomIosMargin: bottomBarHeight};
};

export default getIosSafeAreaHeights;
