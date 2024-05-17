"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const CalendarWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.View style={styles.container}>
      <Header_1.default title={'Calendar'}/>
      <ui_1.Calendar />
    </ui_1.View>);
};
exports.CalendarWidget = CalendarWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
        alignItems: 'center',
    },
}));
