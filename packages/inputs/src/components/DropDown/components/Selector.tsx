import React from 'react';
import {IPopupProps, PopupBase} from '@npm/mobydick-popups';
import {FlatList, TouchableHighlight} from '@npm/mobydick-core';
import {useDimensions} from '@react-native-community/hooks';
import {getModel} from 'react-native-device-info';
import {Typography} from '@npm/mobydick-typography';
import {useStyles} from '@npm/mobydick-styles';
import {StyleSheet, ViewStyle} from 'react-native';

import {
  BORDER_BUTTON_WIDTH,
  DEFAULT_DROP_DOWN_HEIGHT,
  DEFAULT_DROP_DOWN_WIDTH,
} from '../constants';
import {getDropDownDimensions} from '../utils/getDropDownDimensions';
import getIosSafeAreaHeights from '../utils/getIosSafeAreaHeights';
import stylesCreate from '../stylesCreate';
import {IDropDownProps} from '../types';

const keyExtractor = (item: string, index: number) =>
  index.toString() + item.toString();

type IFieldsToSelect =
  | 'navBarHeight'
  | 'maxVisibleListLength'
  | 'selectedItem'
  | 'selectedItemColor'
  | 'addButtonStyle'
  | 'addFlatListStyle'
  | 'addFlatListItemStyle'
  | 'addFlatListTextStyle'
  | 'addFlatListTextFont'
  | 'addFlatListTextFontPressed'
  | 'addFlatListTextStylePressed';

type ISelector = {label: string; value: unknown};

interface IItemsProps<T extends ISelector>
  extends IPopupProps,
    Pick<IDropDownProps<T>, IFieldsToSelect> {
  list: T[];
  pageY: number;
  renderItemOnPress: (item: T) => void;
}

interface IRenderItemProps<T extends ISelector>
  extends Pick<
    IItemsProps<T>,
    | 'renderItemOnPress'
    | 'selectedItem'
    | 'selectedItemColor'
    | 'addFlatListItemStyle'
    | 'addFlatListTextStylePressed'
    | 'addFlatListTextFontPressed'
    | 'addFlatListTextStyle'
    | 'addFlatListTextFont'
  > {
  dropDownItemHeight: number;
  styles: StyleSheet.NamedStyles<{dropDownItem: ViewStyle}>;
  theme: ReturnType<typeof useStyles>[1];
}

function renderItem<T extends ISelector>(props: IRenderItemProps<T>) {
  return ({item}: {item: T}) => {
    const {
      renderItemOnPress,

      styles,
      theme,

      dropDownItemHeight,
      selectedItemColor,
      selectedItem,

      addFlatListItemStyle,
      addFlatListTextStylePressed,
      addFlatListTextStyle,
      addFlatListTextFontPressed,
      addFlatListTextFont,
    } = props;

    const getFont = () => {
      if (item === selectedItem) {
        return addFlatListTextFontPressed || 'Medium-Primary-M';
      }
      return addFlatListTextFont || 'Regular-Secondary-M';
    };

    return (
      <TouchableHighlight
        accessibilityLabel={item.label}
        style={[
          styles.dropDownItem,
          addFlatListItemStyle,
          {
            height: addFlatListItemStyle?.height
              ? addFlatListItemStyle.height
              : dropDownItemHeight,
          },
          item.label === selectedItem?.label
            ? selectedItemColor
              ? {backgroundColor: selectedItemColor}
              : {backgroundColor: theme.colors.BgAccentSoft}
            : null,
        ]}
        onPress={() => renderItemOnPress(item)}
        underlayColor={
          selectedItemColor ? selectedItemColor : theme.colors.BgAccentSoft
        }>
        <Typography
          style={
            item === selectedItem
              ? addFlatListTextStylePressed
              : addFlatListTextStyle
          }
          numberOfLines={1}
          font={getFont()}>
          {item.label}
        </Typography>
      </TouchableHighlight>
    );
  };
}

function Selector<T extends ISelector>(props: IItemsProps<T>) {
  const {
    list,
    pageY,
    navBarHeight = 50,
    maxVisibleListLength = 6,

    renderItemOnPress,

    selectedItem,
    selectedItemColor,

    addButtonStyle,
    addFlatListStyle,
    addFlatListTextFont,
    addFlatListItemStyle,
    addFlatListTextStyle,
    addFlatListTextStylePressed,
  } = props;
  const [styles, theme] = useStyles(stylesCreate);

  const {height} = useDimensions().window;

  const {topIosMargin, bottomIosMargin} = getIosSafeAreaHeights(getModel());

  const isNeedFooterPadding = list.length > maxVisibleListLength;

  const flatListPaddingVertical = addFlatListStyle?.paddingVertical
    ? +addFlatListStyle.paddingVertical
    : styles.flatList.paddingVertical;

  const {
    listAbovePosition,
    listUnderPosition,
    expectedEndPositionOnScreen,
    dropDownMaxHeight,
    dropDownItemHeight,
  } = getDropDownDimensions({
    pageY,
    topIosMargin,
    navBarHeight,
    bottomIosMargin,
    maxVisibleListLength,
    dropDownHeight: addButtonStyle?.height
      ? +addButtonStyle.height
      : DEFAULT_DROP_DOWN_HEIGHT,
    flatListPaddingVertical: flatListPaddingVertical,
    listLength: list.length,
    addFlatListItemHeight: addFlatListItemStyle?.height
      ? +addFlatListItemStyle.height
      : undefined,
    dropDownBorderWidth: addButtonStyle?.borderWidth
      ? addButtonStyle.borderWidth
      : BORDER_BUTTON_WIDTH,
  });
  return (
    <PopupBase
      onClose={props.onClose}
      overlayStyle={{backgroundColor: 'transparent'}}>
      <FlatList
        bounces={false}
        style={[
          styles.flatList,
          addFlatListStyle,
          {
            width: addFlatListStyle?.width
              ? addFlatListStyle.width
              : addButtonStyle?.width
              ? addButtonStyle.width
              : DEFAULT_DROP_DOWN_WIDTH,
          },
          expectedEndPositionOnScreen > height
            ? {top: listAbovePosition}
            : {top: listUnderPosition},
          {
            maxHeight: dropDownMaxHeight,
          },
        ]}
        contentContainerStyle={
          isNeedFooterPadding
            ? {paddingBottom: flatListPaddingVertical * 2}
            : null
        }
        data={list}
        renderItem={renderItem({
          renderItemOnPress,
          dropDownItemHeight,
          selectedItemColor,

          selectedItem,
          styles,
          theme,
          addFlatListItemStyle,
          addFlatListTextFont,
          addFlatListTextStyle,
          addFlatListTextStylePressed,
        })}
        keyExtractor={keyExtractor}
      />
    </PopupBase>
  );
}

export default Selector;
