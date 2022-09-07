import {useDimensions} from '@react-native-community/hooks';

import {
  DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON,
  DROP_DOWN_LIST_ITEM_MULTIPLIER,
} from '../constants';

interface IGetDimensionsParams {
  pageY: number;
  navBarHeight: number;
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
  navBarHeight,
  dropDownHeight,
  flatListPaddingVertical,
  listLength,
  maxVisibleListLength,
  addFlatListItemHeight,
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
    pageY + dropDownHeight + DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON * 2;
  const {height} = useDimensions().window;

  const listAbovePosition =
    height -
    pageY -
    dropDownHeight -
    flatListPaddingVertical * 2 -
    DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON * 2;

  const expectedEndPositionOnScreen =
    dropDownHeight + dropDownViewHeight + pageY + navBarHeight;

  return {
    listUnderPosition,
    listAbovePosition,
    expectedEndPositionOnScreen,
    dropDownMaxHeight,
    dropDownItemHeight,
  };
};
