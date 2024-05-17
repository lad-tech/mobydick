"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelSpinnerWidget = void 0;
const ui_1 = require("@shared/ui");
const PanelSpinnerWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.View>
      <ui_1.Typography font={'Regular-Primary-H5'}>PanelSpinner</ui_1.Typography>
      <ui_1.View style={styles.container}>
        <ui_1.View style={styles.panelContainer}>
          <ui_1.PanelSpinner isLoading={true}/>
          <ui_1.Typography font={'Regular-Primary-XS'}>isLoading=true</ui_1.Typography>
        </ui_1.View>
        <ui_1.View style={styles.panelContainer}>
          <ui_1.PanelSpinner isLoading={false}/>
          <ui_1.Typography font={'Regular-Primary-XS'}>isLoading=false</ui_1.Typography>
        </ui_1.View>
        <ui_1.View style={styles.panelContainer}>
          <ui_1.PanelSpinner isLoading={true} onCancel={() => { }}/>
          <ui_1.Typography font={'Regular-Primary-XS'}>with onCancel</ui_1.Typography>
        </ui_1.View>
      </ui_1.View>
    </ui_1.View>);
};
exports.PanelSpinnerWidget = PanelSpinnerWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        flexDirection: 'row',
        gap: spaces.Space8,
    },
    panelContainer: {
        flex: 1,
        alignItems: 'center',
    },
}));
