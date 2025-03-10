import {Platform} from 'react-native';

import {getDropDownDimensions} from '../getDropDownDimensions';
import px from '../../../../../styles/utils/px';

describe('@lad-tech/mobydick-core/DropDownFunctions', () => {
  it('must return actual position list 8', () => {
    expect(
      getDropDownDimensions({
        pageY: 300,
        dropDownHeight: 200,
        navBarHeight: 50,
        dropDownBorderWidth: 1,
        listLength: 1,
        height: 700,
      }),
    ).toEqual({
      underDropDownPos: 504,
      aboveDropDownPos: 700 - 300 + px(4),
      isAboveDropDown: false,
    });
  });
  it('must return actual position list 5', () => {
    expect(
      getDropDownDimensions({
        pageY: 128,
        dropDownHeight: 40,
        navBarHeight: 50,
        dropDownBorderWidth: 1,
        listLength: 1,
        height: 700,
      }),
    ).toEqual({
      underDropDownPos: 172,
      aboveDropDownPos: 700 - 128 + px(4),
      isAboveDropDown: false,
    });
  });
  it('must return actual position list 5 Android', () => {
    Platform.OS = 'android';
    expect(
      getDropDownDimensions({
        pageY: 128,
        dropDownHeight: 40,
        navBarHeight: 50,
        dropDownBorderWidth: 1,
        listLength: 1,
        height: 700,
      }),
    ).toEqual({
      underDropDownPos: 172,
      aboveDropDownPos: 700 - 128 + px(4),
      isAboveDropDown: false,
    });
  });
  it('must return actual position empty list', () => {
    expect(
      getDropDownDimensions({
        pageY: 128,
        dropDownHeight: 40,
        navBarHeight: 50,
        dropDownBorderWidth: 1,
        listLength: 0,
        height: 700,
      }),
    ).toEqual({
      underDropDownPos: 172,
      aboveDropDownPos: 700 - 128 + px(4),
      isAboveDropDown: false,
    });
  });
});
