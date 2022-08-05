import {Platform} from 'react-native';

import {
  DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON,
  DROP_DOWN_LIST_ITEM_MULTIPLIER,
} from '../constants';

interface IGetDimensionsParams {
  pageY: number;
  topIosMargin: number;
  navBarHeight: number;
  bottomIosMargin: number;
  dropDownHeight: number;
  flatListPaddingVertical: number;
  listLength: number;
  maxVisibleListLength: number;
  addFlatListItemHeight: number | undefined;
  dropDownBorderWidth: number;
}

interface IGetDropDownHeightsParams {
  dropDownHeight: number;
  flatListPaddingVertical: number;
  listLength: number;
  maxVisibleListLength: number;
  addFlatListItemHeight: number | undefined;
}

export const getDropDownHeights = ({
  dropDownHeight,
  flatListPaddingVertical,
  listLength,
  maxVisibleListLength,
  addFlatListItemHeight,
}: IGetDropDownHeightsParams) => {
  const dropDownItemHeight = addFlatListItemHeight
    ? addFlatListItemHeight
    : dropDownHeight * DROP_DOWN_LIST_ITEM_MULTIPLIER;
  const dropDownMaxHeight =
    dropDownItemHeight * maxVisibleListLength + flatListPaddingVertical * 2;
  const dropDownViewHeight =
    listLength > maxVisibleListLength
      ? dropDownItemHeight * maxVisibleListLength + flatListPaddingVertical * 2
      : listLength * dropDownItemHeight + flatListPaddingVertical * 2;
  return {
    dropDownMaxHeight,
    dropDownItemHeight,
    dropDownViewHeight,
  };
};

export const getDropDownDimensions = ({
  pageY,
  topIosMargin,
  navBarHeight,
  bottomIosMargin,
  dropDownHeight,
  flatListPaddingVertical,
  listLength,
  maxVisibleListLength,
  addFlatListItemHeight,
  dropDownBorderWidth,
}: IGetDimensionsParams) => {
  const {dropDownViewHeight, dropDownMaxHeight, dropDownItemHeight} =
    getDropDownHeights({
      dropDownHeight,
      flatListPaddingVertical,
      listLength,
      maxVisibleListLength,
      addFlatListItemHeight,
    });
  const listUnderPosition =
    Platform.OS === 'android'
      ? dropDownHeight + pageY + DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON * 2
      : pageY -
        topIosMargin +
        dropDownHeight +
        DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON * 2;
  const listAbovePosition =
    Platform.OS === 'android'
      ? pageY - topIosMargin - dropDownViewHeight
      : pageY - topIosMargin - dropDownViewHeight - dropDownBorderWidth * 2;
  const expectedEndPositionOnScreen =
    dropDownHeight +
    dropDownViewHeight +
    pageY +
    navBarHeight +
    bottomIosMargin;

  return {
    listUnderPosition,
    listAbovePosition,
    expectedEndPositionOnScreen,
    dropDownMaxHeight,
    dropDownItemHeight,
  };
};
