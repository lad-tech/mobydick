import React from 'react';
import {IPopupProps, PopupBase} from '@npm/mobydick-popups';
import {FlatList, TouchableHighlight} from '@npm/mobydick-core';
import {useDimensions} from '@react-native-community/hooks';
import {Typography} from '@npm/mobydick-typography';
import {useStyles} from '@npm/mobydick-styles';
import {StyleSheet, ViewStyle} from 'react-native';

import {
  BORDER_BUTTON_WIDTH,
  DEFAULT_DROP_DOWN_HEIGHT,
  DEFAULT_DROP_DOWN_WIDTH,
} from '../constants';
import {getDropDownDimensions} from '../utils/getDropDownDimensions';
import {IDropDownProps} from '../types';

import stylesCreate from './stylesCreate';

const keyExtractor = (item: string, index: number) =>
  index.toString() + item.toString();

type IFieldsToSelect =
  | 'navBarHeight'
  | 'maxVisibleListLength'
  | 'selectedItem'
  | 'selectedItemColor'
  | 'buttonStyle'
  | 'flatListStyle'
  | 'flatListItemStyle'
  | 'flatListTextStyle'
  | 'flatListTextFont'
  | 'flatListTextFontPressed'
  | 'flatListTextStylePressed';

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
    | 'flatListItemStyle'
    | 'flatListTextStylePressed'
    | 'flatListTextFontPressed'
    | 'flatListTextStyle'
    | 'flatListTextFont'
  > {
  styles: StyleSheet.NamedStyles<{dropDownItem: ViewStyle}>;
  theme: ReturnType<typeof useStyles>[1];
}

function renderItem<T extends ISelector>(props: IRenderItemProps<T>) {
  return ({item}: {item: T}) => {
    const {
      renderItemOnPress,

      styles,
      theme,
      selectedItemColor,
      selectedItem,

      flatListItemStyle,
      flatListTextStylePressed,
      flatListTextStyle,
      flatListTextFontPressed,
      flatListTextFont,
    } = props;

    const getFont = () => {
      if (item === selectedItem) {
        return flatListTextFontPressed || 'Medium-Primary-M';
      }
      return flatListTextFont || 'Regular-Secondary-M';
    };

    return (
      <TouchableHighlight
        accessibilityLabel={item.label}
        style={[
          styles.dropDownItem,
          flatListItemStyle,
          // {
          //   height: addFlatListItemStyle?.height
          //     ? addFlatListItemStyle.height
          //     : dropDownItemHeight,
          // },
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
            item === selectedItem ? flatListTextStylePressed : flatListTextStyle
          }
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

    buttonStyle,
    flatListStyle,
    flatListTextFont,
    flatListItemStyle,
    flatListTextStyle,
    flatListTextStylePressed,
  } = props;
  const [styles, theme] = useStyles(stylesCreate);

  const {height} = useDimensions().window;

  const flatListPaddingVertical = flatListStyle?.paddingVertical
    ? +flatListStyle.paddingVertical
    : styles.contentContainer.paddingVertical;

  const {
    listAbovePosition,
    listUnderPosition,
    expectedEndPositionOnScreen,
    dropDownMaxHeight,
  } = getDropDownDimensions({
    pageY,
    navBarHeight,
    maxVisibleListLength,
    dropDownHeight: buttonStyle?.height
      ? +buttonStyle.height
      : DEFAULT_DROP_DOWN_HEIGHT,
    flatListPaddingVertical: flatListPaddingVertical,
    listLength: list.length,
    addFlatListItemHeight: flatListItemStyle?.height
      ? +flatListItemStyle.height
      : undefined,
    dropDownBorderWidth: buttonStyle?.borderWidth
      ? buttonStyle.borderWidth
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
          flatListStyle,
          {
            width: flatListStyle?.width
              ? flatListStyle.width
              : buttonStyle?.width
              ? buttonStyle.width
              : DEFAULT_DROP_DOWN_WIDTH,
          },
          expectedEndPositionOnScreen > height
            ? {
                bottom: listAbovePosition,
              }
            : {
                top: listUnderPosition,
              },
          {
            maxHeight: dropDownMaxHeight,
          },
        ]}
        contentContainerStyle={styles.contentContainer}
        data={list}
        renderItem={renderItem({
          renderItemOnPress,
          selectedItemColor,

          selectedItem,
          styles,
          theme,
          flatListItemStyle: flatListItemStyle,
          flatListTextFont: flatListTextFont,
          flatListTextStyle: flatListTextStyle,
          flatListTextStylePressed: flatListTextStylePressed,
        })}
        keyExtractor={keyExtractor}
      />
    </PopupBase>
  );
}

export default Selector;
