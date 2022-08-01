import {Platform} from 'react-native';

import getIosSafeAreaHeights from '../GetIosSafeAreaHeights';

describe('@npm/mobydick-inputs/DropDownFunctions', () => {
  it('must return 0 margins for Android', () => {
    Platform.OS = 'android';
    expect(getIosSafeAreaHeights('BIBA')).toEqual({
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
    expect(getIosSafeAreaHeights('IPad')).toEqual({
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
    expect(getIosSafeAreaHeights('TVOS')).toEqual({
      topIosMargin: 0,
      bottomIosMargin: 0,
    });
  });
  it('must return default values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 8')).toEqual({
      topIosMargin: 20,
      bottomIosMargin: 0,
    });
  });
  it('must return iPhone X values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone X')).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone XS values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone XS')).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 11 Pro values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 11 Pro')).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone XS Max values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone XS Max')).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone XR values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone XR')).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 11 values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 11')).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 11 Pro Max values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 11 Pro Max')).toEqual({
      topIosMargin: 44,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 12 mini values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 12 mini')).toEqual({
      topIosMargin: 50,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 13 mini values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 13 mini')).toEqual({
      topIosMargin: 50,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 14 mini values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 14 mini')).toEqual({
      topIosMargin: 50,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 15 mini values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 15 mini')).toEqual({
      topIosMargin: 50,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 12 Pro Max values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 12 Pro Max')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 12 Pro values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 12 Pro')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 12 values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 12')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 13 values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 13')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 13 Pro values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 13 Pro')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 13 Pro Max values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 13 Pro Max')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 14 values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 14')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 14 Pro values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 14 Pro')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 14 Pro Max values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 14 Pro Max')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 15 values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 15')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 15 Pro values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 15 Pro')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
  it('must return iPhone 15 Pro Max values', () => {
    jest.clearAllMocks();
    Platform.OS = 'ios';
    expect(getIosSafeAreaHeights('iPhone 15 Pro Max')).toEqual({
      topIosMargin: 47,
      bottomIosMargin: 34,
    });
  });
});
