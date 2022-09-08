import {Dimensions} from 'react-native';

import {DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON} from '../constants';

interface IGetDimensionsParams {
  pageY: number;
  navBarHeight: number;
  dropDownHeight: number;
  flatListPaddingVertical: number;
  dropDownBorderWidth: number;
  listHeight: number;
}

export const getDropDownDimensions = ({
  pageY,
  navBarHeight,
  dropDownHeight,
  flatListPaddingVertical,
  listHeight,
}: IGetDimensionsParams) => {
  const {height} = Dimensions.get('window');

  const underDropDownPos =
    pageY + dropDownHeight + DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON;

  const aboveDropDownPos =
    height -
    pageY -
    dropDownHeight -
    flatListPaddingVertical * 2 -
    DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON * 2;

  const bottomScreenPos = dropDownHeight + listHeight + pageY + navBarHeight;

  const isAboveDropDown = bottomScreenPos > height;

  return {
    underDropDownPos: underDropDownPos,
    aboveDropDownPos: aboveDropDownPos,
    isAboveDropDown: isAboveDropDown,
  };
};
