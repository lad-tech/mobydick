"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const Typography_1 = require("../../../typography/components/Typography/Typography");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Title = props => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { title, titleStyles, titleFont } = props;
    return (<Typography_1.Typography font={titleFont ? titleFont : 'SemiBold-Contrast-XS'} style={[styles.title, titleStyles]}>
      {title}
    </Typography_1.Typography>);
};
exports.default = Title;
