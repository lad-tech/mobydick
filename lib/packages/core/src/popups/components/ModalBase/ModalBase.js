"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PopupBase_1 = require("../PopupBase");
const functions_1 = require("../../functions");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const CloseIcon_1 = __importDefault(require("./CloseIcon"));
const VerticalButtonsView_1 = __importDefault(require("./VerticalButtonsView"));
const HorizontalButtonsView_1 = __importDefault(require("./HorizontalButtonsView"));
const AlertContent_1 = __importDefault(require("./AlertContent"));
const VerticalButton_1 = __importDefault(require("./VerticalButton"));
const ImageView_1 = __importDefault(require("./ImageView"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const TextContent_1 = __importDefault(require("./TextContent"));
const ModalBase = props => {
    const { children, overlayStyle, onClose, containerStyle } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<PopupBase_1.PopupBase onClose={onClose} overlayStyle={[styles.overlayStyle, overlayStyle]}>
      <View_1.default style={[styles.container, containerStyle]} onStartShouldSetResponder={functions_1.returnTrue}>
        {children}
      </View_1.default>
    </PopupBase_1.PopupBase>);
};
ModalBase.CloseIcon = CloseIcon_1.default;
ModalBase.VerticalButtonsView = VerticalButtonsView_1.default;
ModalBase.HorizontalButtonsView = HorizontalButtonsView_1.default;
ModalBase.AlertContent = AlertContent_1.default;
ModalBase.VerticalButton = VerticalButton_1.default;
ModalBase.ImageView = ImageView_1.default;
ModalBase.TextContent = TextContent_1.default;
exports.default = ModalBase;
