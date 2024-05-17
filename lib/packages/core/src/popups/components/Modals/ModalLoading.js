"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ModalBase_1 = require("../ModalBase");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const types_1 = require("../../../progress/components/Spinner/types");
const Spinner_1 = __importDefault(require("../../../progress/components/Spinner/Spinner"));
const types_2 = require("../../../cta/components/Button/types");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const ModalLoading = props => {
    const { onClose, title, descriptionText, buttonText } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<ModalBase_1.ModalBase overlayStyle={styles.overlayStyle} containerStyle={styles.container} {...props}>
      <Spinner_1.default size={types_1.ISizeSpinner.L} style={{ margin: (0, px_1.default)(6) }}/>
      <ModalBase_1.ModalBase.TextContent title={title} descriptionText={descriptionText}/>

      <ModalBase_1.ModalBase.VerticalButtonsView>
        <ModalBase_1.ModalBase.VerticalButton type={types_2.IButtonTypes.secondary} onPress={onClose} text={buttonText || 'Отмена'}/>
      </ModalBase_1.ModalBase.VerticalButtonsView>
    </ModalBase_1.ModalBase>);
};
exports.default = ModalLoading;
