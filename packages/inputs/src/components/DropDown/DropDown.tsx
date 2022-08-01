import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  ITouchableOpacity,
  FlatList,
} from '@npm/mobydick-core';
import React, {FC, useCallback, useRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';
import {PopupBase, usePopups} from '@npm/mobydick-popups';
import {useDimensions} from '@react-native-community/hooks';
import {getModel} from 'react-native-device-info';

import {IDropDownProps} from './types';
import stylesCreate from './stylesCreate';
import {
  DEFAULT_DROP_DOWN_HEIGHT,
  DEFAULT_DROP_DOWN_WIDTH,
  DROP_DOWN_POPUP_ID,
} from './constants/constants';
import Icon from './components/DropDownIcon';
import getIosSafeAreaHeights from './constants/getIosSafeAreaHeights';
import {
  getDropDownDimensions,
  getDropDownHeights,
} from './constants/getDropDownDimensions';

const DropDown: FC<IDropDownProps> = props => {
  const {
    label,
    placeholder,
    list,
    selectedItem,
    onPress,
    rightIcon,
    addButtonStyle,
    addFlatListStyle,
    addFlatListItemStyle,
    navBarHeight = 50,
    addLabelStyle,
    addLabelFont,
    addButtonTextStyle,
    addButtonTextFont,
    addFlatListTextStyle,
    addFlatListTextFont,
    addFlatListTextFontPressed,
    addFlatListTextStylePressed,
    selectedItemColor,
    addButtonTextStyleChosen,
    addButtonTextFontChosen,
    maxVisibleListLength = 6,
  } = props;
  const {height} = useDimensions().window;
  const [styles, theme] = useStyles(stylesCreate);
  const [chosen, setChosen] = useState(selectedItem || '');
  const [pressedItem, setPressedItem] = useState('');
  const dropDownRef = useRef<ITouchableOpacity>(null);
  const [isOpen, setOpen] = useState(false);
  const popupContext = usePopups();
  const model = getModel();
  const {topIosMargin, bottomIosMargin} = getIosSafeAreaHeights(model);
  const {dropDownMaxHeight, dropDownItemHeight} = getDropDownHeights({
    dropDownHeight: addButtonStyle?.height
      ? +addButtonStyle.height
      : DEFAULT_DROP_DOWN_HEIGHT,
    flatListPaddingVertical: addFlatListStyle?.paddingVertical
      ? +addFlatListStyle.paddingVertical
      : styles.flatList.paddingVertical,
    listLength: list.length,
    maxVisibleListLength,
  });

  const checkPosition = () => {
    if (dropDownRef.current) {
      dropDownRef.current.measure((_x, _y, _width, _height, _pageX, pageY) => {
        openPopup(pageY);
        setOpen(true);
      });
    }
  };

  const keyExtractor = useCallback(
    (item: string, index: number) => index.toString() + item.toString(),
    [],
  );

  const openPopup = (pageY: number) => {
    const {listAbovePosition, listUnderPosition, expectedEndPositionOnScreen} =
      getDropDownDimensions({
        pageY,
        topIosMargin,
        navBarHeight,
        bottomIosMargin,
        maxVisibleListLength,
        dropDownHeight: addButtonStyle?.height
          ? +addButtonStyle.height
          : DEFAULT_DROP_DOWN_HEIGHT,
        flatListPaddingVertical: addFlatListStyle?.paddingVertical
          ? +addFlatListStyle.paddingVertical
          : styles.flatList.paddingVertical,
        listLength: list.length,
      });
    popupContext.openPopup({
      id: DROP_DOWN_POPUP_ID,
      Content: props => {
        return (
          <PopupBase
            onClose={() => {
              setOpen(false);
              props.onClose();
            }}
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
              data={list}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </PopupBase>
        );
      },
    });
  };

  const renderItemOnPress = (item: string) => {
    onPress(item);
    setPressedItem(item);
    setOpen(false);
    setChosen(item);
    popupContext.closePopup(DROP_DOWN_POPUP_ID);
  };

  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableHighlight
        style={[
          styles.dropDownItem,
          addFlatListItemStyle,
          {
            height: addFlatListItemStyle?.height
              ? addFlatListItemStyle.height
              : dropDownItemHeight,
          },
          item === pressedItem
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
            item === pressedItem
              ? addFlatListTextStylePressed
              : addFlatListTextStyle
          }
          font={
            item === pressedItem
              ? addFlatListTextFontPressed
                ? addFlatListTextFontPressed
                : 'Medium-Primary-M'
              : addFlatListTextFont
              ? addFlatListTextFont
              : 'Regular-Secondary-M'
          }>
          {item}
        </Typography>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {Boolean(label) && (
        <Typography
          font={addLabelFont ? addLabelFont : 'Medium-Tertiary-XS'}
          style={addLabelStyle}>
          {label}
        </Typography>
      )}
      <View
        collapsable={false}
        ref={dropDownRef}
        style={{
          height: addButtonStyle?.height
            ? addButtonStyle.height
            : DEFAULT_DROP_DOWN_HEIGHT,
          width: addButtonStyle?.width
            ? addButtonStyle.width
            : DEFAULT_DROP_DOWN_WIDTH,
        }}>
        <TouchableOpacity
          style={[
            styles.button,
            addButtonStyle,
            {
              width: addButtonStyle?.width
                ? addButtonStyle.width
                : DEFAULT_DROP_DOWN_WIDTH,
            },
            {
              height: addButtonStyle?.height
                ? addButtonStyle.height
                : DEFAULT_DROP_DOWN_HEIGHT,
            },
            isOpen
              ? {
                  borderColor: addButtonStyle?.borderColor
                    ? addButtonStyle.borderColor
                    : theme.colors.BorderNormal,
                }
              : {
                  borderColor: addButtonStyle?.backgroundColor
                    ? addButtonStyle.backgroundColor
                    : theme.colors.BgSecondary,
                },
          ]}
          onPress={checkPosition}
          testID={'drop_down_button'}>
          <Typography
            style={chosen ? addButtonTextStyleChosen : addButtonTextStyle}
            font={
              chosen
                ? addButtonTextFontChosen
                  ? addButtonTextFontChosen
                  : 'Regular-Primary-M'
                : addButtonTextFont
                ? addButtonTextFont
                : 'Regular-Muted-M'
            }
            numberOfLines={1}>
            {chosen ? chosen : placeholder}
          </Typography>
          <Icon isOpen={isOpen} rightIcon={rightIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropDown;
