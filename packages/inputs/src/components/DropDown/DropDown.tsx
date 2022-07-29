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

import {IDropDownProps} from './types';
import stylesCreate from './stylesCreate';
import {
  height,
  borderButtonWidth,
  maxVisibleFlatListItems,
  dropDownMarginFromButton,
  dropDownListItemMultiplier,
  dropDownPopupId,
} from './constants';
import Icon from './components/DropDownIcon';

const DropDown: FC<IDropDownProps> = props => {
  const {
    title,
    placeholder,
    list,
    selectedItem,
    onPress,
    rightIcon,
    dropDownWidth = 335,
    dropDownHeight = 60,
    navBarHeight = 60,
  } = props;
  const [styles, theme] = useStyles(stylesCreate);
  const [chosen, setChosen] = useState(selectedItem || '');
  const [pressedItem, setPressedItem] = useState('');
  const dropDownRef = useRef<ITouchableOpacity>(null);
  const [isOpen, setOpen] = useState(false);
  const popupContext = usePopups();

  const dropDownItemHeight = dropDownHeight * dropDownListItemMultiplier;
  const dropDownMaxHeight =
    dropDownItemHeight * maxVisibleFlatListItems +
    styles.flatList.paddingVertical * 2;
  const dropDownViewHeight =
    list.length > maxVisibleFlatListItems
      ? dropDownItemHeight * maxVisibleFlatListItems +
        styles.flatList.paddingVertical * 2
      : list.length * dropDownItemHeight + styles.flatList.paddingVertical * 2;

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
    const listUnderPosition = dropDownHeight + pageY + dropDownMarginFromButton;
    const listAbovePosition =
      pageY -
      dropDownViewHeight -
      borderButtonWidth * 2 -
      dropDownMarginFromButton;
    const expectedEndPositionOnScreen =
      dropDownHeight + dropDownViewHeight + pageY + navBarHeight;
    popupContext.openPopup({
      id: dropDownPopupId,
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
                {width: dropDownWidth},
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
    popupContext.closePopup(dropDownPopupId);
  };

  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableHighlight
        style={[styles.dropDownItem, {height: dropDownItemHeight}]}
        onPress={() => renderItemOnPress(item)}
        underlayColor={theme.colors.BgAccentSoft}>
        <Typography
          font={
            item === pressedItem ? 'Medium-Primary-M' : 'Regular-Secondary-M'
          }>
          {item}
        </Typography>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {Boolean(title) && (
        <Typography font={'Medium-Tertiary-XS'}>{title}</Typography>
      )}
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            {width: dropDownWidth},
            {height: dropDownHeight},
            isOpen
              ? {borderColor: theme.colors.BorderNormal}
              : {borderColor: theme.colors.BgSecondary},
          ]}
          ref={process.env.JEST_WORKER_ID === undefined ? dropDownRef : null}
          onPress={checkPosition}>
          <Typography
            font={chosen ? 'Regular-Primary-M' : 'Regular-Muted-M'}
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
