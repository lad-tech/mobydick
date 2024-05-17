"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const TabsWidget_1 = require("@widgets/Core/Navbars/ui/TabsWidget");
const PanelHeaderWidget_1 = require("@widgets/Core/Navbars/ui/PanelHeaderWidget");
const NavbarsScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.ScrollView contentContainerStyle={[
            styles.container,
            { flex: undefined, paddingHorizontal: 0 },
        ]}>
      <TabsWidget_1.TabsWidget />
      <PanelHeaderWidget_1.PanelHeaderWidget />
    </ui_1.ScrollView>);
};
exports.default = NavbarsScreen;
