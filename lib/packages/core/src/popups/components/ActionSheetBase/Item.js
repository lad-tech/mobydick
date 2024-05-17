"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const Pressable_1 = __importDefault(require("../../../basic/components/Pressable/Pressable"));
const other_1 = require("../../../other");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Contents_1 = __importDefault(require("./content/Contents"));
const Item = props => {
    const { onPress, style, disabled, itemType } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, itemType);
    const { colors } = (0, useTheme_1.default)();
    const getStyle = (0, react_1.useCallback)(({ pressed }) => [
        styles.item,
        { backgroundColor: pressed ? colors.BgSecondary : colors.BgPrimary },
        style,
    ], []);
    return (<Pressable_1.default style={getStyle} disabled={disabled} onPress={onPress} accessibilityLabel={other_1.LABELS.actionSheetsItem}>
      <Contents_1.default {...props}/>
    </Pressable_1.default>);
};
exports.default = Item;
