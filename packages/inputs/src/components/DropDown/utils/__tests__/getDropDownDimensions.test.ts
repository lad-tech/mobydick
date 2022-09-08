import {Platform} from 'react-native';

import {getDropDownDimensions} from '../getDropDownDimensions';

describe('@npm/mobydick-inputs/DropDownFunctions', () => {
  it('must return actual position list 8', () => {
    expect(
      getDropDownDimensions({
        pageY: 300,
        dropDownHeight: 200,
        flatListPaddingVertical: 8,
        navBarHeight: 50,
        dropDownBorderWidth: 1,
        listHeight: 50,
      }),
    ).toEqual({
      underDropDownPos: 506,
      aboveDropDownPos: 806,
      isAboveDropDown: false,
    });
  });
  it('must return actual position list 5', () => {
    expect(
      getDropDownDimensions({
        pageY: 128,
        dropDownHeight: 40,
        flatListPaddingVertical: 8,
        navBarHeight: 50,
        dropDownBorderWidth: 1,
        listHeight: 50,
      }),
    ).toEqual({
      underDropDownPos: 174,
      aboveDropDownPos: 1138,
      isAboveDropDown: false,
    });
  });
  it('must return actual position list 5 Android', () => {
    Platform.OS = 'android';
    expect(
      getDropDownDimensions({
        pageY: 128,
        dropDownHeight: 40,
        flatListPaddingVertical: 8,
        navBarHeight: 50,
        dropDownBorderWidth: 1,
        listHeight: 50,
      }),
    ).toEqual({
      underDropDownPos: 174,
      aboveDropDownPos: 1138,
      isAboveDropDown: false,
    });
  });
});
