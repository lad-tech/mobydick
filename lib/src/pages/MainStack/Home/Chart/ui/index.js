"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const NavigationButton_1 = __importDefault(require("@shared/ui/NavigationButton"));
const screens_1 = require("@shared/lib/constants/screens");
const navigationRef_1 = require("@shared/lib/navigationRef");
const ChartScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.View style={styles.container}>
      <NavigationButton_1.default text={screens_1.SCREENS.LineChart} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.LineChart)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.BarChart} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.BarChart)}/>
    </ui_1.View>);
};
exports.default = ChartScreen;
