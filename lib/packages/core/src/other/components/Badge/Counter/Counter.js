"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const typography_1 = require("../../../../typography");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const types_1 = require("./types");
const Counter = ({ count, style, size = types_1.ICounterSize.medium, type = types_1.ICounterTypes.accent, maxLength = 2, }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, size, type);
    const font = size === types_1.ICounterSize.medium ? 'SemiBold-White-M' : 'SemiBold-White-XXS';
    if (!count) {
        return null;
    }
    const lastNumber = `${'9'.repeat(maxLength)}+`;
    const text = count.toString().length > maxLength ? lastNumber : count.toString();
    return (<View_1.default style={[styles.counter, style]}>
      <typography_1.Typography style={styles.text} font={font}>
        {text}
      </typography_1.Typography>
    </View_1.default>);
};
exports.default = Counter;
