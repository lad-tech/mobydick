"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const TouchableOpacity_1 = __importDefault(require("../../../basic/components/TouchableOpacity/TouchableOpacity"));
const Typography_1 = require("../../../typography/components/Typography/Typography");
const other_1 = require("../../../other");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Tab = (props) => {
    const [styles, theme] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { active, item, fontTab, fontActiveTab, backgroundColorTab, backgroundColorActiveTab, styleTab, styleActiveTab, onPressCommon, } = props;
    const backgroundColorActive = backgroundColorActiveTab || theme.colors.ElementBase;
    const backgroundColor = backgroundColorTab || theme.colors.BgTertiary;
    const font = fontTab || 'Regular-Tertiary-XS';
    const fontActive = fontActiveTab || 'Regular-White-XS';
    const selectPressable = (0, react_1.useCallback)(() => {
        if (item.onPress) {
            item.onPress();
        }
        else if (onPressCommon) {
            onPressCommon(item);
        }
    }, [item.onPress, onPressCommon]);
    return (<TouchableOpacity_1.default onPress={selectPressable} accessibilityLabel={other_1.LABELS.tab} style={[
            styles.tab,
            active ? styleActiveTab : styleTab,
            {
                backgroundColor: active ? backgroundColorActive : backgroundColor,
            },
        ]}>
      {item.leftIcon ? item.leftIcon : null}
      <Typography_1.Typography font={active ? fontActive : font}>{item.label}</Typography_1.Typography>
      {item.rightIcon ? item.rightIcon : null}
    </TouchableOpacity_1.default>);
};
exports.default = Tab;
