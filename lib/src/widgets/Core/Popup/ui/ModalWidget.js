"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const ModalWidget = () => {
    const [styles] = (0, ui_1.useStyles)(styleFn);
    const { openPopup } = (0, ui_1.usePopups)();
    return (<ui_1.View style={styles.container}>
      <Header_1.default title={'ModalBase'}/>
      <ui_1.Button text={'ModalBase'} onPress={() => openPopup({
            Content: props => (<ui_1.ModalBase {...props}>
                <ui_1.ModalBase.CloseIcon onPress={props.onClose}/>
                <ui_1.ModalBase.AlertContent />
                <ui_1.ModalBase.TextContent title={'ModalBase'} descriptionText={'descriptionText'}/>
                <ui_1.ModalBase.VerticalButtonsView>
                  <ui_1.ModalBase.VerticalButton text={'VerticalButton'}/>
                </ui_1.ModalBase.VerticalButtonsView>
                <ui_1.ModalBase.HorizontalButtonsView textLeft={'Left btn'} textRight={'Right btn'} typeLeft={ui_1.IButtonTypes.primary} typeRight={ui_1.IButtonTypes.destructive} onPressRight={props.onClose} onPressLeft={props.onClose}/>
              </ui_1.ModalBase>),
        })}/>
    </ui_1.View>);
};
exports.ModalWidget = ModalWidget;
const styleFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space8,
    },
}));
