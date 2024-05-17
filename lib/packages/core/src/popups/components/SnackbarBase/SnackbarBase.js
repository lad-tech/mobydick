"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("../../functions");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const Title_1 = __importDefault(require("./Title"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const DEFAULT_TIME_SHOW = 5000;
const SnackbarBase = props => {
    const { children, onClose, containerStyle, overlayStyle, position, timeShow } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, position);
    const timeout = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        timeout.current = setTimeout(() => {
            onClose();
        }, timeShow ? timeShow : DEFAULT_TIME_SHOW);
        return () => {
            timeout.current && clearTimeout(timeout.current);
        };
    }, []);
    return (<View_1.default style={[styles.overlayStyle, overlayStyle]}>
      <View_1.default style={[styles.container, containerStyle]} onStartShouldSetResponder={functions_1.returnTrue}>
        {children}
      </View_1.default>
    </View_1.default>);
};
SnackbarBase.Title = Title_1.default;
exports.default = SnackbarBase;
