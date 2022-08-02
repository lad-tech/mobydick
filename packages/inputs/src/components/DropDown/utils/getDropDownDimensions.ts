import {Platform} from 'react-native';

import {
  BORDER_BUTTON_WIDTH,
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
}

interface IGetDropDownHeightsParams {
  dropDownHeight: number;
  flatListPaddingVertical: number;
  listLength: number;
  maxVisibleListLength: number;
}

export const getDropDownHeights = ({
  dropDownHeight,
  flatListPaddingVertical,
  listLength,
  maxVisibleListLength,
}: IGetDropDownHeightsParams) => {
  const dropDownItemHeight = dropDownHeight * DROP_DOWN_LIST_ITEM_MULTIPLIER;
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
}: IGetDimensionsParams) => {
  const {dropDownViewHeight, dropDownMaxHeight, dropDownItemHeight} =
    getDropDownHeights({
      dropDownHeight,
      flatListPaddingVertical,
      listLength,
      maxVisibleListLength,
    });
  const listUnderPosition =
    Platform.OS === 'android'
      ? dropDownHeight + pageY + flatListPaddingVertical * 2
      : pageY - topIosMargin + dropDownHeight + flatListPaddingVertical * 2;
  const listAbovePosition =
    pageY - topIosMargin - dropDownViewHeight - BORDER_BUTTON_WIDTH * 2;
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
