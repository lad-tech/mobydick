import {Platform} from 'react-native';

import {IIPhoneModel, IMarginsForIos} from '../types';

import {
  BOTTOMBAR_DEFAULT_HEIGHT,
  BOTTOMBAR_IP_X_AND_AFTER_HEIGHT,
  STATUSBAR_DEFAULT_HEIGHT,
  STATUSBAR_IP12_13_HEIGHT,
  STATUSBAR_IP12M_13_MINI_HEIGHT,
  STATUSBAR_X_XS_11PRO_HEIGHT,
} from './constants';

const getIosSafeAreaHeights = (model: string): IMarginsForIos => {
  if (
    Platform.OS === 'android' ||
    (Platform.OS === 'ios' && (Platform.isPad || Platform.isTVOS))
  ) {
    return {topIosMargin: 0, bottomIosMargin: 0};
  }
  switch (model) {
    case IIPhoneModel.iPhoneX:
    case IIPhoneModel.iPhoneXS:
    case IIPhoneModel.iPhone11Pro:
    case IIPhoneModel.iPhoneXSMAX:
    case IIPhoneModel.iPhoneXR:
    case IIPhoneModel.iPhone11:
    case IIPhoneModel.iPhone11ProMax:
      return {
        topIosMargin: STATUSBAR_X_XS_11PRO_HEIGHT,
        bottomIosMargin: BOTTOMBAR_IP_X_AND_AFTER_HEIGHT,
      };
    case IIPhoneModel.iPhone12Pro:
    case IIPhoneModel.iPhone12:
    case IIPhoneModel.iPhone13:
    case IIPhoneModel.iPhone13Pro:
    case IIPhoneModel.iPhone12ProMax:
    case IIPhoneModel.iPhone13ProMax:
    case IIPhoneModel.iPhone14:
    case IIPhoneModel.iPhone14Pro:
    case IIPhoneModel.iPhone14ProMax:
    case IIPhoneModel.iPhone15:
    case IIPhoneModel.iPhone15Pro:
    case IIPhoneModel.iPhone15ProMax:
      return {
        topIosMargin: STATUSBAR_IP12_13_HEIGHT,
        bottomIosMargin: BOTTOMBAR_IP_X_AND_AFTER_HEIGHT,
      };
    case IIPhoneModel.iPhone12Mini:
    case IIPhoneModel.iPhone13Mini:
    case IIPhoneModel.iPhone14Mini:
    case IIPhoneModel.iPhone15Mini:
      return {
        topIosMargin: STATUSBAR_IP12M_13_MINI_HEIGHT,
        bottomIosMargin: BOTTOMBAR_IP_X_AND_AFTER_HEIGHT,
      };
    default:
      return {
        topIosMargin: STATUSBAR_DEFAULT_HEIGHT,
        bottomIosMargin: BOTTOMBAR_DEFAULT_HEIGHT,
      };
  }
};

export default getIosSafeAreaHeights;
