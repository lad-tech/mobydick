import {View, TouchableOpacity, ITouchableOpacity} from '@npm/mobydick-core';
import React, {FC, useRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';
import {usePopups} from '@npm/mobydick-popups';

import {IDropDownProps} from './types';
import stylesCreate from './stylesCreate';
import {
  ACCESSIBILITY_LABEL,
  DEFAULT_DROP_DOWN_HEIGHT,
  DEFAULT_DROP_DOWN_WIDTH,
  DROP_DOWN_POPUP_ID,
} from './constants';
import Icon from './components/DropDownIcon';
import Selector from './components/Selector';

const DropDown: FC<IDropDownProps> = props => {
  const {
    label,
    placeholder,
    list,
    selectedItem,
    onPress,
    rightIcon,
    navBarHeight = 50,
    maxVisibleListLength = 6,

    selectedItemColor,

    addButtonStyle,
    addFlatListStyle,
    addLabelStyle,
    addLabelFont,
    addButtonTextStyle,
    addButtonTextFont,
    addFlatListItemStyle,
    addFlatListTextStyle,
    addFlatListTextFont,
    addFlatListTextFontPressed,
    addFlatListTextStylePressed,
    addButtonTextStyleChosen,
    addButtonTextFontChosen,
  } = props;
  const [chosen, setChosen] = useState(selectedItem || '');
  const [isOpen, setOpen] = useState(false);

  const popupContext = usePopups();

  const [styles, theme] = useStyles(stylesCreate);

  const dropDownRef = useRef<ITouchableOpacity>(null);

  const checkPosition = () => {
    if (dropDownRef.current) {
      dropDownRef.current.measure((_x, _y, _width, _height, _pageX, pageY) => {
        openPopup(pageY);
        setOpen(true);
      });
    }
  };

  const renderItemOnPress = (item: string) => {
    onPress(item);
    setOpen(false);
    setChosen(item);
    popupContext.closePopup(DROP_DOWN_POPUP_ID);
  };

  const openPopup = (pageY: number) => {
    popupContext.openPopup({
      id: DROP_DOWN_POPUP_ID,
      Content: propsFromPopup => (
        <Selector
          {...propsFromPopup}
          list={list}
          pageY={pageY}
          navBarHeight={navBarHeight}
          maxVisibleListLength={maxVisibleListLength}
          selectedItem={selectedItem}
          selectedItemColor={selectedItemColor}
          renderItemOnPress={renderItemOnPress}
          addButtonStyle={addButtonStyle}
          addFlatListStyle={addFlatListStyle}
          addFlatListItemStyle={addFlatListItemStyle}
          addFlatListTextStyle={addFlatListTextStyle}
          addFlatListTextFont={addFlatListTextFont}
          addFlatListTextFontPressed={addFlatListTextFontPressed}
          addFlatListTextStylePressed={addFlatListTextStylePressed}
          onClose={() => {
            setOpen(false);
            propsFromPopup.onClose();
          }}
        />
      ),
    });
  };

  const getFont = () => {
    if (chosen) return addButtonTextFontChosen || 'Regular-Primary-M';
    return addButtonTextFont || 'Regular-Muted-M';
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
      <View collapsable={false} ref={dropDownRef}>
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
          accessibilityLabel={ACCESSIBILITY_LABEL.selector}>
          <Typography
            style={chosen ? addButtonTextStyleChosen : addButtonTextStyle}
            font={getFont()}
            numberOfLines={1}>
            {chosen || placeholder}
          </Typography>
          <Icon isOpen={isOpen} rightIcon={rightIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropDown;
