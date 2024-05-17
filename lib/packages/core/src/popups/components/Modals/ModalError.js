"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ModalBase_1 = require("../ModalBase");
const types_1 = require("../../../cta/components/Button/types");
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const ModalError = props => {
    const { title, descriptionText, buttonText, onClose } = props;
    const { colors } = (0, useTheme_1.default)();
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<ModalBase_1.ModalBase overlayStyle={styles.overlayStyle} containerStyle={styles.container} {...props}>
      <ModalBase_1.ModalBase.AlertContent name={'icon-warning'} color={colors.IconAttention} style={{ backgroundColor: colors.BgError }}/>

      <ModalBase_1.ModalBase.TextContent title={title} descriptionText={descriptionText}/>
      <ModalBase_1.ModalBase.VerticalButtonsView>
        <ModalBase_1.ModalBase.VerticalButton type={types_1.IButtonTypes.destructive} onPress={onClose} text={buttonText || 'Ok'}/>
      </ModalBase_1.ModalBase.VerticalButtonsView>
    </ModalBase_1.ModalBase>);
};
exports.default = ModalError;
