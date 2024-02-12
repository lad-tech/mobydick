import {useCallback, useRef, useState} from 'react';

import {IInputsTypes} from '../types';
import {InputSubtitle, InputTitle} from '../Base';
import usePopups from '../../../popups/hooks/usePopups';
import useStyles from '../../../styles/hooks/useStyles';
import View from '../../../basic/components/View/View';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {Typography} from '../../../typography/components/Typography/Typography';
import {LABELS} from '../../../other';
import {IView} from '../../../basic/components/View/types';

import Selector from './components/Selector';
import DropDownIcon from './components/DropDownIcon';
import {
  DEFAULT_DROP_DOWN_HEIGHT,
  DEFAULT_DROP_DOWN_WIDTH,
  DROP_DOWN_POPUP_ID,
} from './constants';
import stylesCreate from './stylesCreate';
import {IDropDownProps, IListItem} from './types';

function DropDown<T extends IListItem>(props: IDropDownProps<T>) {
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

  const selected = selectedItem ? selectedItem : undefined;

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
      onPress(item.value);
      setOpen(false);
      popupContext.closePopup(DROP_DOWN_POPUP_ID);
    },
    [onPress, popupContext],
  );

  const openPopup = (pageY: number) => {
    popupContext.openPopup({
      id: DROP_DOWN_POPUP_ID,
      Content: propsFromPopup => (
        <Selector
          {...propsFromPopup}
          list={list}
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
  const checkPosition = useCallback(() => {
    if (dropDownRef.current) {
      dropDownRef.current.measure((_x, _y, _width, _height, _pageX, pageY) => {
        openPopup(pageY);
        setOpen(true);
      });
    }
  }, [openPopup]);

  const getFont = () => {
    if (selected) {
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
      <View collapsable={false} ref={dropDownRef}>
        <TouchableOpacity
          style={[
            styles.inputContainer,
            buttonStyle,
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
          accessibilityLabel={LABELS.selector}>
          <Typography
            style={[
              styles.placeholder,
              selected ? buttonTextStyleChosen : buttonTextStyle,
            ]}
            font={getFont()}
            numberOfLines={1}>
            {list.find(item => item.value === selected)?.label || placeholder}
          </Typography>
          <DropDownIcon isOpen={isOpen} rightIcon={rightIcon} />
        </TouchableOpacity>
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
