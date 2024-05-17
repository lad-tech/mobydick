"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PopupBase_1 = require("../PopupBase");
const functions_1 = require("../../functions");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Item_1 = __importDefault(require("./Item"));
const ActionSheetBase = props => {
    const { children, overlayStyle, onClose, containerStyle } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<PopupBase_1.PopupBase onClose={onClose} overlayStyle={[styles.overlayStyle, overlayStyle]}>
      <View_1.default style={[styles.containerStyle, containerStyle]} onStartShouldSetResponder={functions_1.returnTrue}>
        {children}
      </View_1.default>
    </PopupBase_1.PopupBase>);
};
ActionSheetBase.Item = Item_1.default;
exports.default = ActionSheetBase;
