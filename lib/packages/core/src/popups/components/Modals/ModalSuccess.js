"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ModalBase_1 = require("../ModalBase");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const ModalSuccess = props => {
    const { onClose, title, descriptionText, buttonText } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<ModalBase_1.ModalBase overlayStyle={styles.overlayStyle} containerStyle={styles.container} {...props}>
      <ModalBase_1.ModalBase.AlertContent />

      <ModalBase_1.ModalBase.TextContent title={title} descriptionText={descriptionText}/>

      <ModalBase_1.ModalBase.VerticalButtonsView>
        <ModalBase_1.ModalBase.VerticalButton onPress={onClose} text={buttonText || 'OK'}/>
      </ModalBase_1.ModalBase.VerticalButtonsView>
    </ModalBase_1.ModalBase>);
};
exports.default = ModalSuccess;
