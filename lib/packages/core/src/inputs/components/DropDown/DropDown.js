"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const types_1 = require("../types");
const Base_1 = require("../Base");
const usePopups_1 = __importDefault(require("../../../popups/hooks/usePopups"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const Typography_1 = require("../../../typography/components/Typography/Typography");
const other_1 = require("../../../other");
const basic_1 = require("../../../basic");
const Selector_1 = __importDefault(require("./components/Selector"));
const DropDownIcon_1 = __importDefault(require("./components/DropDownIcon"));
const constants_1 = require("./constants");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const ChipList_1 = __importDefault(require("./components/ChipList"));
const getSelectedItems_1 = __importDefault(require("./utils/getSelectedItems"));
function DropDown(props) {
    const { title, titleStyle, titleFont, required, placeholder, list, selectedItem, onPress, rightIcon, navBarHeight = 50, isMultiselect, selectedItemColor, buttonStyle, flatListStyle, buttonTextStyle, buttonTextFont, flatListItemStyle, flatListTextStyle, flatListTextFont, flatListTextFontPressed, flatListTextStylePressed, buttonTextStyleChosen, buttonTextFontChosen, type = types_1.IInputsTypes.default, disabled, subtitle, subtitleIcon, subtitleProps, } = props;
    const isSelected = (0, react_1.useMemo)(() => {
        return isMultiselect ? !!selectedItem?.length : !!selectedItem;
    }, [isMultiselect, selectedItem]);
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const popupContext = (0, usePopups_1.default)();
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, disabled ? types_1.IInputsTypes.disabled : type, isOpen);
    const dropDownRef = (0, react_1.useRef)(null);
    const renderItemOnPress = (0, react_1.useCallback)((item) => {
        if (isMultiselect) {
            onPress((0, getSelectedItems_1.default)(selectedItem, item));
        }
        else {
            onPress(item.value);
        }
        setOpen(false);
        popupContext.closePopup(constants_1.DROP_DOWN_POPUP_ID);
    }, [onPress, popupContext, selectedItem, isMultiselect]);
    const openPopup = (pageY, dropDownHeight) => {
        popupContext.openPopup({
            id: constants_1.DROP_DOWN_POPUP_ID,
            Content: propsFromPopup => (<Selector_1.default {...propsFromPopup} list={list} pageY={pageY} navBarHeight={navBarHeight} selectedItem={selectedItem} selectedItemColor={selectedItemColor} renderItemOnPress={renderItemOnPress} dropDownHeight={dropDownHeight} buttonStyle={buttonStyle} flatListStyle={flatListStyle} flatListItemStyle={flatListItemStyle} flatListTextStyle={flatListTextStyle} flatListTextFont={flatListTextFont} flatListTextFontPressed={flatListTextFontPressed} flatListTextStylePressed={flatListTextStylePressed} onClose={() => {
                    setOpen(false);
                    propsFromPopup.onClose();
                }}/>),
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
        if (isSelected) {
            return buttonTextFontChosen || 'Regular-Primary-M';
        }
        return buttonTextFont || 'Regular-Muted-M';
    };
    return (<View_1.default style={[
            styles.container,
            {
                width: buttonStyle?.width
                    ? buttonStyle.width
                    : constants_1.DEFAULT_DROP_DOWN_WIDTH,
            },
        ]}>
      {title && (<Base_1.InputTitle title={title} titleFont={titleFont} titleStyle={titleStyle ? [styles.title, titleStyle] : styles.title} required={required}/>)}
      <View_1.default collapsable={false}>
        <basic_1.Pressable ref={dropDownRef} style={[
            styles.inputContainer,
            buttonStyle,
            isMultiselect && styles.pv8,
            {
                [isMultiselect ? 'minHeight' : 'height']: buttonStyle?.height
                    ? buttonStyle.height
                    : constants_1.DEFAULT_DROP_DOWN_HEIGHT,
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
        ]} disabled={disabled} onPress={checkPosition} accessibilityLabel={other_1.LABELS.selector}>
          {isMultiselect && selectedItem?.length ? (<ChipList_1.default selectedItem={selectedItem} onChange={renderItemOnPress}/>) : (<Typography_1.Typography style={[
                styles.placeholder,
                isSelected ? buttonTextStyleChosen : buttonTextStyle,
            ]} font={getFont()} numberOfLines={1}>
              {list.find(item => item.value === selectedItem)?.label ||
                placeholder}
            </Typography_1.Typography>)}
          <DropDownIcon_1.default isOpen={isOpen} rightIcon={rightIcon}/>
        </basic_1.Pressable>
        {subtitle ? (<Base_1.InputSubtitle type={type} subtitle={subtitle} subtitleIcon={subtitleIcon} subtitleProps={subtitleProps}/>) : null}
      </View_1.default>
    </View_1.default>);
}
exports.default = DropDown;
