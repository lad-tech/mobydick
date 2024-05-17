"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const typography_1 = require("../../../typography");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const DescriptionText = props => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { descriptionText, descriptionStyles, descriptionFont } = props;
    return (<typography_1.Typography font={descriptionFont ? descriptionFont : 'Regular-Contrast-XS'} style={[styles.descriptionText, descriptionStyles]}>
      {descriptionText}
    </typography_1.Typography>);
};
exports.default = DescriptionText;
