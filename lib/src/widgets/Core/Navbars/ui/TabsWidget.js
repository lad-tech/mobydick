"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const TABS_TEST = [
    { value: 'tab1', label: 'tab1' },
    { value: 'tab2', label: 'tab2' },
    { value: 'tab3', label: 'tab3' },
    { value: 'tab4', label: 'tab4' },
    { value: 'tab5', label: 'tab5' },
    { value: 'tab6', label: 'tab6' },
    { value: 'tab7', label: 'tab7' },
    { value: 'tab8', label: 'tab8' },
    { value: 'tab9', label: 'tab9' },
];
const TabsWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    const [activeValue, setActiveValue] = (0, react_1.useState)('tab1');
    return (<ui_1.View style={styles.container}>
      <Header_1.default title={'Tabs'}/>
      <ui_1.Tabs list={TABS_TEST} onPressCommon={item => setActiveValue(item.value)} activeValue={activeValue}/>
    </ui_1.View>);
};
exports.TabsWidget = TabsWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
        alignItems: 'center',
    },
}));
