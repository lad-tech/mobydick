import {Platform} from 'react-native';

import {IPhoneModelEnum, IMarginsForIos} from '../types';

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
    case IPhoneModelEnum.iPhoneX:
    case IPhoneModelEnum.iPhoneXS:
    case IPhoneModelEnum.iPhone11Pro:
    case IPhoneModelEnum.iPhoneXSMAX:
    case IPhoneModelEnum.iPhoneXR:
    case IPhoneModelEnum.iPhone11:
    case IPhoneModelEnum.iPhone11ProMax:
      return {
        topIosMargin: STATUSBAR_X_XS_11PRO_HEIGHT,
        bottomIosMargin: BOTTOMBAR_IP_X_AND_AFTER_HEIGHT,
      };
    case IPhoneModelEnum.iPhone12Pro:
    case IPhoneModelEnum.iPhone12:
    case IPhoneModelEnum.iPhone13:
    case IPhoneModelEnum.iPhone13Pro:
    case IPhoneModelEnum.iPhone12ProMax:
    case IPhoneModelEnum.iPhone13ProMax:
    case IPhoneModelEnum.iPhone14:
    case IPhoneModelEnum.iPhone14Pro:
    case IPhoneModelEnum.iPhone14ProMax:
    case IPhoneModelEnum.iPhone15:
    case IPhoneModelEnum.iPhone15Pro:
    case IPhoneModelEnum.iPhone15ProMax:
      return {
        topIosMargin: STATUSBAR_IP12_13_HEIGHT,
        bottomIosMargin: BOTTOMBAR_IP_X_AND_AFTER_HEIGHT,
      };
    case IPhoneModelEnum.iPhone12Mini:
    case IPhoneModelEnum.iPhone13Mini:
    case IPhoneModelEnum.iPhone14Mini:
    case IPhoneModelEnum.iPhone15Mini:
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
