"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const TouchableOpacity_1 = __importDefault(require("../../../basic/components/TouchableOpacity/TouchableOpacity"));
const SimpleIcon_1 = __importDefault(require("../../../styles/icons/font/SimpleIcon"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const CloseIcon = props => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { onPress } = props;
    return (<TouchableOpacity_1.default style={styles.closeButton} onPress={onPress}>
      <SimpleIcon_1.default name={'icon-cancel'}/>
    </TouchableOpacity_1.default>);
};
exports.default = CloseIcon;
