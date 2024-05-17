"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomComponent = void 0;
const ui_1 = require("@shared/ui");
const BottomComponent = () => {
    const [styles] = (0, ui_1.useStyles)(style);
    return (<ui_1.View style={styles.container}>
      <ui_1.Typography>BottomComponents</ui_1.Typography>
      <ui_1.Button text={'Submit'}/>
    </ui_1.View>);
};
exports.BottomComponent = BottomComponent;
const style = (0, ui_1.createStyles)(({ shadows, colors, spaces }) => ({
    container: {
        backgroundColor: colors.BgPrimary,
        ...shadows.large,
        alignItems: 'center',
        padding: spaces.Space12,
    },
}));
