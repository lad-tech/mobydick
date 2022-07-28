import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  ITouchableOpacity,
  FlatList,
} from '@npm/mobydick-core';
import React, {FC, useRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';
import {PopupBase, usePopups} from '@npm/mobydick-popups';

import {DropDownProps} from './types';
import stylesCreate from './stylesCreate';
import {height, borderButtonWidth} from './constants';
import Icon from './components/DropDownIcon';

const DropDown: FC<DropDownProps> = props => {
  const {
    title,
    placeholder,
    list,
    selectedItem,
    onPress,
    rightIcon,
    addBtnWidth = 335,
    addBtnHeight = 60,
    navBarHeight = 60,
  } = props;
  const [styles, theme] = useStyles(stylesCreate);
  const [chosen, setChosen] = useState(selectedItem || '');
  const [pressedItem, setPressedItem] = useState('');
  const dropDownRef = useRef<ITouchableOpacity>(null);
  const [open, setOpen] = useState(false);
  const popupContext = usePopups();

  const dropDownItemHeight = addBtnHeight / 1.3;
  const dropDownMaxHeight = dropDownItemHeight * 6 + 16;
  const dropDownHeight =
    list.length > 6
      ? dropDownItemHeight * 6 + styles.flatList.paddingVertical * 2
      : list.length * dropDownItemHeight + styles.flatList.paddingVertical * 2;

  const checkPosition = () => {
    if (dropDownRef.current) {
      dropDownRef.current.measure((_x, _y, _width, _height, _pageX, pageY) => {
        openPopup(pageY);
        setOpen(true);
      });
    }
  };
  const openPopup = (pageY: number) => {
    const listUnderPosition = addBtnHeight + pageY + 8;
    const listAbovePosition =
      pageY - dropDownHeight - borderButtonWidth * 2 - 8;
    const expectedEndPositionOnScreen =
      addBtnHeight + dropDownHeight + pageY + navBarHeight;
    popupContext.openPopup({
      id: 'DropDownPopup',
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
                {width: addBtnWidth},
                expectedEndPositionOnScreen > height
                  ? {top: listAbovePosition}
                  : {top: listUnderPosition},
                {
                  maxHeight: dropDownMaxHeight,
                },
              ]}
              data={list}
              renderItem={renderItem}
              keyExtractor={(item: string, index: number) =>
                index.toString() + item.toString()
              }
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
    popupContext.closePopup('DropDownPopup');
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
      <View style={{position: 'relative'}}>
        <TouchableOpacity
          style={[
            styles.button,
            {width: addBtnWidth},
            {height: addBtnHeight},
            open
              ? {borderColor: theme.colors.BorderNormal}
              : {borderColor: theme.colors.BgSecondary},
          ]}
          ref={dropDownRef}
          onPress={checkPosition}>
          <Typography
            font={chosen ? 'Regular-Primary-M' : 'Regular-Muted-M'}
            numberOfLines={1}>
            {chosen ? chosen : placeholder}
          </Typography>
          <Icon open={open} rightIcon={rightIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropDown;
