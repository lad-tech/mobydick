"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalsWidget = void 0;
const ui_1 = require("@shared/ui");
const ModalsWidget = () => {
    const [styles] = (0, ui_1.useStyles)(styleFn);
    const { openPopup } = (0, ui_1.usePopups)();
    return (<ui_1.View style={styles.container}>
      <ui_1.Typography font={'Regular-Primary-H5'}>Modal</ui_1.Typography>
      <ui_1.Button text={'ModalAsk'} onPress={() => openPopup({
            Content: props => (<ui_1.ModalAsk title={'ModalAsk'} descriptionText={'descriptionText'} onPressRight={props.onClose} {...props}></ui_1.ModalAsk>),
        })}/>
      <ui_1.Button text={'ModalLoading'} onPress={() => openPopup({
            Content: props => (<ui_1.ModalLoading title={'ModalLoading'} descriptionText={'descriptionText'} {...props}></ui_1.ModalLoading>),
        })}/>
      <ui_1.Button text={'ModalError'} onPress={() => openPopup({
            Content: props => (<ui_1.ModalError title={'ModalError'} descriptionText={'descriptionText'} {...props}></ui_1.ModalError>),
        })}/>
      <ui_1.Button text={'ModalSuccess'} onPress={() => openPopup({
            Content: props => (<ui_1.ModalSuccess title={'ModalSuccess'} descriptionText={'descriptionText'} {...props}></ui_1.ModalSuccess>),
        })}/>
    </ui_1.View>);
};
exports.ModalsWidget = ModalsWidget;
const styleFn = (0, ui_1.createStyles)(({ spaces }) => ({ container: { gap: spaces.Space8 } }));
