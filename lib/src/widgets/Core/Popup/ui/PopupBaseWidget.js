"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupBaseWidget = void 0;
const ui_1 = require("@shared/ui");
const PopupBaseWidget = () => {
    const [styles] = (0, ui_1.useStyles)(styleFn);
    const { openPopup } = (0, ui_1.usePopups)();
    return (<ui_1.View style={styles.container}>
      <ui_1.Typography font={'Regular-Primary-H5'}>Popup</ui_1.Typography>
      <ui_1.Button text={'PopupBase'} onPress={() => openPopup({
            Content: props => <ui_1.PopupBase {...props}/>,
        })}/>
    </ui_1.View>);
};
exports.PopupBaseWidget = PopupBaseWidget;
const styleFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space8,
    },
}));
