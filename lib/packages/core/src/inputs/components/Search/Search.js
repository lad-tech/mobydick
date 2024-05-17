"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const SimpleIcon_1 = __importDefault(require("../../../styles/icons/font/SimpleIcon"));
const TextInput_1 = __importDefault(require("../../../basic/components/TextInput/TextInput"));
const Pressable_1 = __importDefault(require("../../../basic/components/Pressable/Pressable"));
const other_1 = require("../../../other");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const constants_1 = require("./constants");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Search = (0, react_1.forwardRef)((props, ref) => {
    const { placeholder = constants_1.strings.search, value, onChangeText = text => {
        console.log(`Search says: "Add onChangeText (╯°□°)╯︵ ┻━┻". Current value=${text}`);
    }, containerStyle, leftIcon, textInputContainerStyle, ...otherProps } = props;
    const [styles, theme] = (0, useStyles_1.default)(stylesCreate_1.default);
    const onCancel = (0, react_1.useCallback)(() => {
        onChangeText('');
    }, [onChangeText]);
    return (<View_1.default style={[styles.container, containerStyle]}>
      {leftIcon ? leftIcon : <SimpleIcon_1.default name={'icon-search'}/>}
      <TextInput_1.default ref={ref} accessibilityLabel={other_1.LABELS.search} style={[styles.textInput, textInputContainerStyle]} placeholder={placeholder} placeholderTextColor={theme.colors.TextTertiary} value={value} onChangeText={onChangeText} selectionColor={theme.colors.IconBase} {...otherProps}/>
      {value ? (<Pressable_1.default accessibilityLabel={other_1.LABELS.cancelSearch} onPress={onCancel} style={styles.cancelIcon}>
          <SimpleIcon_1.default name={'icon-cancel'} size={(0, px_1.default)(16)}/>
        </Pressable_1.default>) : null}
    </View_1.default>);
});
exports.default = Search;
