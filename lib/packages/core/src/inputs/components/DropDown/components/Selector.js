"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const constants_1 = require("../constants");
const getDropDownDimensions_1 = require("../utils/getDropDownDimensions");
const TouchableHighlight_1 = __importDefault(require("../../../../basic/components/TouchableHighlight/TouchableHighlight"));
const Typography_1 = require("../../../../typography/components/Typography/Typography");
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const PopupBase_1 = __importDefault(require("../../../../popups/components/PopupBase/PopupBase"));
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const FlatList_1 = __importDefault(require("../../../../basic/components/FlatList/FlatList"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const ListEmptySelector_1 = __importDefault(require("./ListEmptySelector"));
const keyExtractor = (item, index) => index.toString() + item.toString();
function renderItem(props) {
    return ({ item }) => {
        const { renderItemOnPress, styles, theme, selectedItemColor, selectedItem, flatListItemStyle, flatListTextStylePressed, flatListTextStyle, flatListTextFontPressed, flatListTextFont, } = props;
        const isSelected = () => {
            if (Array.isArray(selectedItem)) {
                return selectedItem.length === 0
                    ? false
                    : selectedItem.some(it => it.value === item.value);
            }
            return item.value === selectedItem;
        };
        const getFont = () => {
            if (isSelected()) {
                return flatListTextFontPressed || 'Medium-Primary-M';
            }
            return flatListTextFont || 'Regular-Secondary-M';
        };
        const backgroundColorItem = selectedItemColor
            ? { backgroundColor: selectedItemColor }
            : { backgroundColor: theme.colors.BgAccentSoft };
        return (<TouchableHighlight_1.default accessibilityLabel={item.label} style={[
                styles.dropDownItem,
                flatListItemStyle,
                isSelected() ? backgroundColorItem : null,
            ]} onPress={() => renderItemOnPress(item)} underlayColor={selectedItemColor ? selectedItemColor : theme.colors.BgAccentSoft}>
        <Typography_1.Typography style={isSelected() ? flatListTextStylePressed : flatListTextStyle} font={getFont()}>
          {item.label}
        </Typography_1.Typography>
      </TouchableHighlight_1.default>);
    };
}
function Selector(props) {
    const { list, pageY, navBarHeight = 50, renderItemOnPress, selectedItem, selectedItemColor, buttonStyle, flatListStyle, flatListTextFont, flatListItemStyle, flatListTextStyle, flatListTextStylePressed, flatListTextFontPressed, listEmptyText, listEmptyFont, dropDownHeight, } = props;
    const [styles, theme] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { height } = (0, react_native_safe_area_context_1.useSafeAreaFrame)();
    const { aboveDropDownPos, underDropDownPos, isAboveDropDown } = (0, getDropDownDimensions_1.getDropDownDimensions)({
        pageY,
        navBarHeight,
        dropDownHeight,
        dropDownBorderWidth: buttonStyle?.borderWidth || constants_1.BORDER_BUTTON_WIDTH,
        listLength: list.length,
        height,
    });
    const styleWidth = flatListStyle?.width || buttonStyle?.width;
    return (<PopupBase_1.default onClose={props.onClose} overlayStyle={{ backgroundColor: 'transparent' }}>
      <View_1.default style={[
            styles.flatList,
            flatListStyle,
            {
                width: styleWidth || constants_1.DEFAULT_DROP_DOWN_WIDTH,
            },
            isAboveDropDown
                ? {
                    bottom: aboveDropDownPos,
                }
                : {
                    top: underDropDownPos,
                },
            {
                maxHeight: constants_1.LIST_MAX_HEIGHT,
            },
        ]}>
        <FlatList_1.default bounces={false} data={list} renderItem={renderItem({
            renderItemOnPress,
            selectedItemColor,
            selectedItem,
            styles,
            theme,
            flatListItemStyle: flatListItemStyle,
            flatListTextFont: flatListTextFont,
            flatListTextStyle: flatListTextStyle,
            flatListTextStylePressed: flatListTextStylePressed,
            flatListTextFontPressed: flatListTextFontPressed,
        })} keyExtractor={keyExtractor} ListEmptyComponent={<ListEmptySelector_1.default listEmptyText={listEmptyText} listEmptyFont={listEmptyFont}/>}/>
      </View_1.default>
    </PopupBase_1.default>);
}
exports.default = Selector;
