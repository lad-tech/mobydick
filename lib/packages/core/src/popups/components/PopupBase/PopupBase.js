"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const Pressable_1 = __importDefault(require("../../../basic/components/Pressable/Pressable"));
const constants_1 = __importDefault(require("./constants"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const PopupBase = ({ onClose, children, overlayStyle, }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    (0, react_1.useEffect)(() => {
        const onBackPress = () => {
            onClose();
            return true;
        };
        react_native_1.BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => react_native_1.BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []);
    const onPressClickOut = (0, react_1.useCallback)((event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }, [onClose]);
    return (<Pressable_1.default style={[styles.overlay, overlayStyle]} testID={constants_1.default.testID} onPress={onPressClickOut}>
      {children}
    </Pressable_1.default>);
};
exports.default = PopupBase;
