import {Platform} from 'react-native';

import getIosSafeAreaHeights from '../functions';

describe('@npm/mobydick-inputs/DropDownFunctions', () => {
  it('must return iPhone XSMAX margins', () => {
    expect(getIosSafeAreaHeights(414, 896)).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone X margins', () => {
    expect(getIosSafeAreaHeights(375, 812)).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 12 margins', () => {
    expect(getIosSafeAreaHeights(390, 844)).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 12 MAX margins', () => {
    expect(getIosSafeAreaHeights(428, 926)).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return 0 margins for Android', () => {
    Platform.OS = 'android';
    expect(getIosSafeAreaHeights(428, 926)).toEqual({
      topIosMargin: 0,
      bottomIosMargin: 0,
    });
  });
  it('must return 0 IPAD', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => {
      const real = jest.requireActual(
        'react-native/Libraries/Utilities/Platform',
      );
      return {
        ...real,
        isTesting: true,
        OS: 'ios',
        isPad: true,
      };
    });
    expect(getIosSafeAreaHeights(428, 926)).toEqual({
      topIosMargin: 0,
      bottomIosMargin: 0,
    });
  });
  it('must return 0 TVOS', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => {
      const real = jest.requireActual(
        'react-native/Libraries/Utilities/Platform',
      );
      return {
        ...real,
        isTesting: true,
        OS: 'ios',
        isTVOS: true,
      };
    });
    expect(getIosSafeAreaHeights(428, 926)).toEqual({
      topIosMargin: 0,
      bottomIosMargin: 0,
    });
  });
  it('must return default values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights(420, 700)).toEqual({
      topIosMargin: 20,
      bottomIosMargin: 0,
    });
  });
});
