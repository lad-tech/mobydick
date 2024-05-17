"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const typography_1 = require("../../../typography");
const styles_1 = require("../../../styles");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const px_1 = __importDefault(require("../../../styles/utils/px"));
const CrossedText = ({ children, style, lineColor, lineHeight = (0, px_1.default)(1), ...props }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    return (<View_1.default style={style}>
      <typography_1.Typography {...props}>{children}</typography_1.Typography>
      <View_1.default style={styles.crossed}>
        <View_1.default style={[
            styles.line,
            { backgroundColor: lineColor, height: lineHeight },
        ]}/>
      </View_1.default>
    </View_1.default>);
};
const stylesCreate = (0, styles_1.createStyles)(_ => ({
    crossed: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        width: '100%',
    },
}));
exports.default = CrossedText;
