import {View, TouchableOpacity, ITouchableOpacity} from '@npm/mobydick-core';
import React, {useRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';
import {usePopups} from '@npm/mobydick-popups';

import {ITypes} from '../types';
import Subtitle from '../Subtitle';

import {IDropDownProps, IListItem} from './types';
import stylesCreate from './stylesCreate';
import {
  ACCESSIBILITY_LABEL,
  DEFAULT_DROP_DOWN_HEIGHT,
  DEFAULT_DROP_DOWN_WIDTH,
  DROP_DOWN_POPUP_ID,
} from './constants';
import Icon from './components/DropDownIcon';
import Selector from './components/Selector';

const isString = (input: unknown): input is string => typeof input === 'string';

function wrapListItem<T extends IListItem>(item: T): Exclude<T, string> {
  return (isString(item) ? {label: item, value: item} : item) as Exclude<
    T,
    string
  >;
}

function DropDown<T extends IListItem>(props: IDropDownProps<T>) {
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
    type = ITypes.default,
    disabled,
    subtitle,
    subtitleProps,
  } = props;

  const selected = selectedItem ? wrapListItem(selectedItem) : undefined;

  const [isOpen, setOpen] = useState(false);

  const popupContext = usePopups();

  const [styles] = useStyles(
    stylesCreate,
    disabled ? ITypes.disabled : type,
    isOpen,
  );

  const dropDownRef = useRef<ITouchableOpacity>(null);

  const checkPosition = () => {
    if (dropDownRef.current) {
      dropDownRef.current.measure((_x, _y, _width, _height, _pageX, pageY) => {
        openPopup(pageY);
        setOpen(true);
      });
    }
  };

  const renderItemOnPress = (item: Exclude<T, string>) => {
    onPress(item);
    setOpen(false);
    popupContext.closePopup(DROP_DOWN_POPUP_ID);
  };

  const listItems = list.map(value => wrapListItem(value));

  const openPopup = (pageY: number) => {
    popupContext.openPopup({
      id: DROP_DOWN_POPUP_ID,
      Content: propsFromPopup => (
        <Selector
          {...propsFromPopup}
          list={listItems}
          pageY={pageY}
          navBarHeight={navBarHeight}
          maxVisibleListLength={maxVisibleListLength}
          selectedItem={selected}
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
    if (selected) return addButtonTextFontChosen || 'Regular-Primary-M';
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
            styles.inputContainer,
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
                    : styles.inputContainer.borderColor,
                }
              : {
                  borderColor: addButtonStyle?.backgroundColor
                    ? addButtonStyle.backgroundColor
                    : styles.inputContainer.borderColor,
                },
          ]}
          disabled={disabled}
          onPress={checkPosition}
          accessibilityLabel={ACCESSIBILITY_LABEL.selector}>
          <Typography
            style={[
              styles.placeholder,
              selected?.label ? addButtonTextStyleChosen : addButtonTextStyle,
            ]}
            font={getFont()}
            numberOfLines={1}>
            {selected?.label || placeholder}
          </Typography>
          <Icon isOpen={isOpen} rightIcon={rightIcon} />
        </TouchableOpacity>
        {subtitle ? (
          <Subtitle
            type={type}
            subtitle={subtitle}
            subtitleProps={subtitleProps}
          />
        ) : null}
      </View>
    </View>
  );
}

export default DropDown;
