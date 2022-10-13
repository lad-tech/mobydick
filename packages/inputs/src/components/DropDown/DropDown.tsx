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

function wrapListItem<T extends IListItem<S>, S extends string | undefined>(
  item: T | string,
): T {
  return (isString(item) ? {label: item, value: item} : item) as Exclude<
    T,
    string
  >;
}

function DropDown<T extends IListItem<S>, S extends string | undefined>(
  props: IDropDownProps<T, S>,
) {
  const {
    label,
    placeholder,
    list,
    selectedItem,
    onPress,
    rightIcon,
    navBarHeight = 50,

    selectedItemColor,

    buttonStyle,
    flatListStyle,
    labelStyle,
    labelFont,
    buttonTextStyle,
    buttonTextFont,
    flatListItemStyle,
    flatListTextStyle,
    flatListTextFont,
    flatListTextFontPressed,
    flatListTextStylePressed,
    buttonTextStyleChosen,
    buttonTextFontChosen,
    type = ITypes.default,
    disabled,

    subtitle,
    subtitleIcon,
    subtitleProps,
  } = props;

  const selected = selectedItem ? selectedItem : undefined;

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

  const renderItemOnPress = (item: T) => {
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
          selectedItem={selected}
          selectedItemColor={selectedItemColor}
          renderItemOnPress={renderItemOnPress}
          buttonStyle={buttonStyle}
          flatListStyle={flatListStyle}
          flatListItemStyle={flatListItemStyle}
          flatListTextStyle={flatListTextStyle}
          flatListTextFont={flatListTextFont}
          flatListTextFontPressed={flatListTextFontPressed}
          flatListTextStylePressed={flatListTextStylePressed}
          onClose={() => {
            setOpen(false);
            propsFromPopup.onClose();
          }}
        />
      ),
    });
  };

  const getFont = () => {
    if (selected) {
      return buttonTextFontChosen || 'Regular-Primary-M';
    }
    return buttonTextFont || 'Regular-Muted-M';
  };

  return (
    <View style={styles.container}>
      {Boolean(label) && (
        <Typography
          font={labelFont ? labelFont : 'Medium-Tertiary-XS'}
          style={[styles.label, labelStyle]}>
          {label}
        </Typography>
      )}
      <View collapsable={false} ref={dropDownRef}>
        <TouchableOpacity
          style={[
            styles.inputContainer,
            buttonStyle,
            {
              width: buttonStyle?.width
                ? buttonStyle.width
                : DEFAULT_DROP_DOWN_WIDTH,
            },
            {
              height: buttonStyle?.height
                ? buttonStyle.height
                : DEFAULT_DROP_DOWN_HEIGHT,
            },
            isOpen
              ? {
                  borderColor: buttonStyle?.borderColor
                    ? buttonStyle.borderColor
                    : styles.inputContainer.borderColor,
                }
              : {
                  borderColor: buttonStyle?.backgroundColor
                    ? buttonStyle.backgroundColor
                    : 'transparent',
                },
          ]}
          disabled={disabled}
          onPress={checkPosition}
          accessibilityLabel={ACCESSIBILITY_LABEL.selector}>
          <Typography
            style={[
              styles.placeholder,
              selected ? buttonTextStyleChosen : buttonTextStyle,
            ]}
            font={getFont()}
            numberOfLines={1}>
            {listItems.find(value => value.value === selected)?.label ||
              placeholder}
          </Typography>
          <Icon isOpen={isOpen} rightIcon={rightIcon} />
        </TouchableOpacity>
        {subtitle ? (
          <Subtitle
            type={type}
            subtitle={subtitle}
            subtitleIcon={subtitleIcon}
            subtitleProps={subtitleProps}
          />
        ) : null}
      </View>
    </View>
  );
}

export default DropDown;
