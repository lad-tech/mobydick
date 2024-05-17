"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const Typography_1 = require("../../../typography/components/Typography/Typography");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const TextContent = props => {
    const { title, titleStyles, titleFont, descriptionText, descriptionStyles, descriptionFont, } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<View_1.default style={styles.textContent}>
      {Boolean(title) && (<Typography_1.Typography style={[styles.title, titleStyles]} font={titleFont ? titleFont : 'SemiBold-Primary-L'}>
          {title}
        </Typography_1.Typography>)}
      {Boolean(descriptionText) && (<Typography_1.Typography style={[styles.description, descriptionStyles]} font={descriptionFont ? descriptionFont : 'Regular-Tertiary-XS'}>
          {descriptionText}
        </Typography_1.Typography>)}
    </View_1.default>);
};
exports.default = TextContent;
