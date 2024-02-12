import {useCallback, useMemo, useRef, useState} from 'react';

import {IInputsTypes} from '../types';
import {InputSubtitle, InputTitle} from '../Base';
import usePopups from '../../../popups/hooks/usePopups';
import useStyles from '../../../styles/hooks/useStyles';
import View from '../../../basic/components/View/View';
import {Typography} from '../../../typography/components/Typography/Typography';
import {LABELS} from '../../../other';
import {IView, Pressable} from '../../../basic';

import Selector from './components/Selector';
import DropDownIcon from './components/DropDownIcon';
import {
  DEFAULT_DROP_DOWN_HEIGHT,
  DEFAULT_DROP_DOWN_WIDTH,
  DROP_DOWN_POPUP_ID,
} from './constants';
import stylesCreate from './stylesCreate';
import {IDropDownMultiSelectProps, IDropDownProps, IListItem} from './types';
import ChipList from './components/ChipList';
import getSelectedItems from './utils/getSelectedItems';

function DropDown<T extends IListItem>(
  props: IDropDownProps<T> | IDropDownMultiSelectProps<T>,
) {
  const {
    title,
    titleStyle,
    titleFont,
    required,
    placeholder,
    list,
    selectedItem,
    onPress,
    rightIcon,
    navBarHeight = 50,
    isMultiselect,
    selectedItemColor,

    buttonStyle,
    flatListStyle,
    buttonTextStyle,
    buttonTextFont,
    flatListItemStyle,
    flatListTextStyle,
    flatListTextFont,
    flatListTextFontPressed,
    flatListTextStylePressed,
    buttonTextStyleChosen,
    buttonTextFontChosen,
    type = IInputsTypes.default,
    disabled,

    subtitle,
    subtitleIcon,
    subtitleProps,
  } = props;

  const hasSelected = useMemo(() => {
    return isMultiselect ? !!selectedItem?.length : !!selectedItem;
  }, [isMultiselect, selectedItem]);

  const [isOpen, setOpen] = useState(false);

  const popupContext = usePopups();

  const [styles] = useStyles(
    stylesCreate,
    disabled ? IInputsTypes.disabled : type,
    isOpen,
  );

  const dropDownRef = useRef<IView>(null);

  const renderItemOnPress = useCallback(
    (item: T) => {
      if (isMultiselect) {
        onPress(getSelectedItems(selectedItem, item));
      } else {
        onPress(item.value);
      }
      setOpen(false);
      popupContext.closePopup(DROP_DOWN_POPUP_ID);
    },
    [onPress, popupContext, selectedItem, isMultiselect],
  );

  const openPopup = (pageY: number, dropDownHeight: number) => {
    popupContext.openPopup({
      id: DROP_DOWN_POPUP_ID,
      Content: propsFromPopup => (
        <Selector
          {...propsFromPopup}
          list={list}
          pageY={pageY}
          navBarHeight={navBarHeight}
          selectedItem={selectedItem}
          selectedItemColor={selectedItemColor}
          renderItemOnPress={renderItemOnPress}
          dropDownHeight={dropDownHeight}
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

  const checkPosition = () => {
    if (dropDownRef.current) {
      dropDownRef.current.measure((_x, _y, _width, height, _pageX, pageY) => {
        openPopup(pageY, height);
        setOpen(true);
      });
    }
  };

  const getFont = () => {
    if (hasSelected) {
      return buttonTextFontChosen || 'Regular-Primary-M';
    }
    return buttonTextFont || 'Regular-Muted-M';
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: buttonStyle?.width
            ? buttonStyle.width
            : DEFAULT_DROP_DOWN_WIDTH,
        },
      ]}>
      {title && (
        <InputTitle
          title={title}
          titleFont={titleFont}
          titleStyle={titleStyle ? [styles.title, titleStyle] : styles.title}
          required={required}
        />
      )}
      <View collapsable={false}>
        <Pressable
          ref={dropDownRef}
          style={[
            styles.inputContainer,
            buttonStyle,
            isMultiselect && styles.pv8,
            {
              [isMultiselect ? 'minHeight' : 'height']: buttonStyle?.height
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
          accessibilityLabel={LABELS.selector}>
          {isMultiselect && selectedItem?.length ? (
            <ChipList
              selectedItem={selectedItem}
              onChange={renderItemOnPress}
            />
          ) : (
            <Typography
              style={[
                styles.placeholder,
                hasSelected ? buttonTextStyleChosen : buttonTextStyle,
              ]}
              font={getFont()}
              numberOfLines={1}>
              {list.find(item => item.value === selectedItem)?.label ||
                placeholder}
            </Typography>
          )}
          <DropDownIcon isOpen={isOpen} rightIcon={rightIcon} />
        </Pressable>
        {subtitle ? (
          <InputSubtitle
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
