import {Dimensions} from 'react-native';

import {
  DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON,
  LIST_MAX_HEIGHT,
} from '../constants';

interface IGetDimensionsParams {
  pageY: number;
  navBarHeight: number;
  dropDownHeight: number;
  dropDownBorderWidth: number;
  listLength: number;
}

export const getDropDownDimensions = ({
  pageY,
  navBarHeight,
  dropDownHeight,
  listLength,
}: IGetDimensionsParams) => {
  const {height} = Dimensions.get('window');

  //TODO мне нужно удостовериться в реальном проекте, что с отступами всё ок

  const underDropDownPos =
    pageY + dropDownHeight + DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON;

  const aboveDropDownPos = height - pageY;

  const listHeight =
    listLength >= 6 ? LIST_MAX_HEIGHT : (LIST_MAX_HEIGHT / 6) * listLength;

  const bottomScreenPos = dropDownHeight + listHeight + pageY + navBarHeight;

  const isAboveDropDown = bottomScreenPos > height;

  return {
    underDropDownPos: underDropDownPos,
    aboveDropDownPos: aboveDropDownPos,
    isAboveDropDown: isAboveDropDown,
  };
};
