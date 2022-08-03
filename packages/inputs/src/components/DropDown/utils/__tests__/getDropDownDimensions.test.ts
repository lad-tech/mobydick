import {Platform} from 'react-native';

import {
  getDropDownDimensions,
  getDropDownHeights,
} from '../getDropDownDimensions';

describe('@npm/mobydick-inputs/DropDownFunctions', () => {
  it('must actual dimensions list 6', () => {
    expect(
      getDropDownHeights({
        dropDownHeight: 50,
        flatListPaddingVertical: 8,
        listLength: 6,
        maxVisibleListLength: 6,
        addFlatListItemHeight: 32,
      }),
    ).toEqual({
      dropDownMaxHeight: 208,
      dropDownItemHeight: 32,
      dropDownViewHeight: 208,
    });
  });
  it('must actual dimensions list 5', () => {
    expect(
      getDropDownHeights({
        dropDownHeight: 40,
        flatListPaddingVertical: 6,
        listLength: 5,
        maxVisibleListLength: 6,
        addFlatListItemHeight: 32,
      }),
    ).toEqual({
      dropDownMaxHeight: 204,
      dropDownItemHeight: 32,
      dropDownViewHeight: 172,
    });
  });
  it('must actual dimensions list 8', () => {
    expect(
      getDropDownHeights({
        dropDownHeight: 40,
        flatListPaddingVertical: 4,
        listLength: 8,
        maxVisibleListLength: 6,
        addFlatListItemHeight: 32,
      }),
    ).toEqual({
      dropDownMaxHeight: 200,
      dropDownItemHeight: 32,
      dropDownViewHeight: 200,
    });
  });
  it('must return actual position list 8', () => {
    expect(
      getDropDownDimensions({
        pageY: 300,
        topIosMargin: 44,
        bottomIosMargin: 34,
        dropDownHeight: 200,
        flatListPaddingVertical: 8,
        listLength: 8,
        navBarHeight: 50,
        maxVisibleListLength: 6,
        addFlatListItemHeight: 32,
      }),
    ).toEqual({
      listUnderPosition: 472,
      listAbovePosition: 46,
      expectedEndPositionOnScreen: 792,
      dropDownMaxHeight: 208,
      dropDownItemHeight: 32,
    });
  });
  it('must return actual position list 5', () => {
    expect(
      getDropDownDimensions({
        pageY: 128,
        topIosMargin: 44,
        bottomIosMargin: 34,
        dropDownHeight: 40,
        flatListPaddingVertical: 8,
        listLength: 5,
        navBarHeight: 50,
        maxVisibleListLength: 6,
        addFlatListItemHeight: 32,
      }),
    ).toEqual({
      listUnderPosition: 140,
      listAbovePosition: -94,
      expectedEndPositionOnScreen: 428,
      dropDownMaxHeight: 208,
      dropDownItemHeight: 32,
    });
  });
  it('must return actual position list 5 Android', () => {
    Platform.OS = 'android';
    expect(
      getDropDownDimensions({
        pageY: 128,
        topIosMargin: 44,
        bottomIosMargin: 34,
        dropDownHeight: 40,
        flatListPaddingVertical: 8,
        listLength: 5,
        navBarHeight: 50,
        maxVisibleListLength: 6,
        addFlatListItemHeight: 32,
      }),
    ).toEqual({
      listUnderPosition: 184,
      listAbovePosition: -94,
      expectedEndPositionOnScreen: 428,
      dropDownMaxHeight: 208,
      dropDownItemHeight: 32,
    });
  });
});
