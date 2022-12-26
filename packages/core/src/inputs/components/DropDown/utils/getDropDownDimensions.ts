import {
  DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON,
  EMPTY_LIST_HEIGHT,
  LIST_MAX_HEIGHT,
} from '../constants';

interface IGetDimensionsParams {
  pageY: number;
  navBarHeight: number;
  dropDownHeight: number;
  dropDownBorderWidth: number;
  listLength: number;
  height: number;
}

export const getDropDownDimensions = ({
  pageY,
  navBarHeight,
  dropDownHeight,
  listLength,
  height,
}: IGetDimensionsParams) => {
  const listHeight =
    listLength >= 6 ? LIST_MAX_HEIGHT : (LIST_MAX_HEIGHT / 6) * listLength;

  const contentHeight = listLength ? listHeight : EMPTY_LIST_HEIGHT;

  const underDropDownPos =
    pageY + dropDownHeight + DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON;

  const aboveDropDownPos = height - pageY + DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON;

  const bottomScreenPos = dropDownHeight + contentHeight + pageY + navBarHeight;

  const isAboveDropDown = bottomScreenPos > height;

  return {
    underDropDownPos: underDropDownPos,
    aboveDropDownPos: aboveDropDownPos,
    isAboveDropDown: isAboveDropDown,
  };
};
