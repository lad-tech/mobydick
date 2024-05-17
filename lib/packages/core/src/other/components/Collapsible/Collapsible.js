"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const typography_1 = require("../../../typography");
const TouchableOpacity_1 = __importDefault(require("../../../basic/components/TouchableOpacity/TouchableOpacity"));
const SimpleIcon_1 = __importDefault(require("../../../styles/icons/font/SimpleIcon"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const constants_1 = require("../../constants");
const styles_1 = require("../../../styles");
if (react_native_1.Platform.OS === 'android' &&
    react_native_1.UIManager.setLayoutAnimationEnabledExperimental) {
    react_native_1.UIManager.setLayoutAnimationEnabledExperimental(true);
}
const Collapsible = (props) => {
    const { title, children, duration = 250, containerStyle, fontTitle = 'SemiBold-Secondary-M', headerStyle, titleStyle, typeAnimation = 'easeInEaseOut', creationPropAnimation = 'scaleY', numberOfLines = 2, initialState = false, isAnimated = true, titleBottomView, } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    const { colors } = (0, useTheme_1.default)();
    const [collapsed, setCollapsed] = (0, react_1.useState)(initialState);
    const onPress = (0, react_1.useCallback)(() => {
        setCollapsed(!collapsed);
        isAnimated &&
            react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.create(duration, typeAnimation, creationPropAnimation));
    }, [collapsed, duration, isAnimated]);
    const name = (0, react_1.useMemo)(() => {
        return collapsed ? 'icon-arrow-down' : 'icon-arrow-right';
    }, [collapsed]);
    return (<View_1.default style={[styles.container, containerStyle]}>
      <TouchableOpacity_1.default onPress={onPress} style={[styles.header, headerStyle]} accessibilityLabel={constants_1.LABELS.collapsed}>
        <typography_1.Typography font={fontTitle} numberOfLines={numberOfLines} style={[styles.title, titleStyle]}>
          {title}
        </typography_1.Typography>
        <SimpleIcon_1.default name={name} color={colors.IconNeutral}/>
      </TouchableOpacity_1.default>
      {titleBottomView}
      {collapsed && children}
    </View_1.default>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces }) => ({
    container: {
        width: '100%',
        padding: spaces.Space20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
    },
}));
exports.default = Collapsible;
