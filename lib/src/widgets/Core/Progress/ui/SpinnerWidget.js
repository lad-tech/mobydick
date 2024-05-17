"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const SpinnerWidget = () => {
    const { colors } = (0, ui_1.useTheme)();
    const [styles] = (0, ui_1.useStyles)(stylesCreate);
    return (<>
      <Header_1.default title={'Spinner'}/>
      <ui_1.View style={styles.container}>
        <ui_1.Spinner size={ui_1.ISizeSpinner.XS}/>
        <ui_1.Spinner size={ui_1.ISizeSpinner.XXS}/>
        <ui_1.Spinner size={ui_1.ISizeSpinner.S}/>
        <ui_1.Spinner size={ui_1.ISizeSpinner.L} duration={1000}/>
        <ui_1.Spinner size={ui_1.ISizeSpinner.M}/>
        <ui_1.Spinner fill={colors.BgContrast}/>
      </ui_1.View>
    </>);
};
exports.SpinnerWidget = SpinnerWidget;
const stylesCreate = (0, ui_1.createStyles)(_ => ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
}));
