"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelHeaderWidget = void 0;
const ui_1 = require("@shared/ui");
const PanelHeaderWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.PanelHeader title={'PanelHeader'} leftView={<ui_1.SimpleIcon name={'icon-arrow-left'}/>} rightView={<ui_1.SimpleIcon name={'icon-camera'}/>} containerStyle={styles.container}/>);
};
exports.PanelHeaderWidget = PanelHeaderWidget;
const stylesFn = (0, ui_1.createStyles)(({ colors }) => ({
    container: {
        backgroundColor: colors.BgAccent,
    },
}));
