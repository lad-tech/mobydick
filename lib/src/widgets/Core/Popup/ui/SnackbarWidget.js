"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackbarWidget = void 0;
const ui_1 = require("@shared/ui");
const SnackbarWidget = () => {
    const [styles] = (0, ui_1.useStyles)(styleFn);
    const { openPopup } = (0, ui_1.usePopups)();
    return (<ui_1.View style={styles.container}>
      <ui_1.Typography font={'Regular-Primary-H5'}>Snackbar</ui_1.Typography>
      <ui_1.Button text={'Snackbar top'} onPress={() => openPopup({
            Content: props => (<ui_1.SnackbarBase {...props} position={ui_1.IPosition.top}>
                <ui_1.SnackbarBase.Title title={'Snackbar top title'}/>
              </ui_1.SnackbarBase>),
        })}/>
      <ui_1.Button text={'Snackbar bottom'} onPress={() => openPopup({
            Content: props => (<ui_1.SnackbarBase {...props} position={ui_1.IPosition.bottom}>
                <ui_1.SnackbarBase.Title title={'Snackbar bottom title'}/>
              </ui_1.SnackbarBase>),
        })}/>
    </ui_1.View>);
};
exports.SnackbarWidget = SnackbarWidget;
const styleFn = (0, ui_1.createStyles)(({ spaces }) => ({ container: { gap: spaces.Space8 } }));
