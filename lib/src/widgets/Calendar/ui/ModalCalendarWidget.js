"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalCalendarWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const ModalCalendarWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    const { openPopup } = (0, ui_1.usePopups)();
    return (<ui_1.View style={styles.container}>
      <Header_1.default title={'ModalCalendar'}/>
      <ui_1.Button text={'ModalCalendar'} onPress={() => openPopup({
            Content: props => <ui_1.ModalCalendar {...props}/>,
        })}/>
    </ui_1.View>);
};
exports.ModalCalendarWidget = ModalCalendarWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
        alignItems: 'center',
    },
}));
