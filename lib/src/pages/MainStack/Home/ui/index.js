"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const navigationRef_1 = require("@shared/lib/navigationRef");
const screens_1 = require("@shared/lib/constants/screens");
const NavigationButton_1 = __importDefault(require("@shared/ui/NavigationButton"));
const HomeScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.View style={styles.container}>
      <NavigationButton_1.default onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Core)} text={screens_1.SCREENS.Core}/>
      <NavigationButton_1.default onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Chart)} text={screens_1.SCREENS.Chart}/>
      <NavigationButton_1.default onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Calendar)} text={screens_1.SCREENS.Calendar}/>
      <NavigationButton_1.default onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Utils)} text={screens_1.SCREENS.Utils}/>
      <NavigationButton_1.default onPress={(0, navigationRef_1.move)(screens_1.SCREENS.KeyboardAware)} text={screens_1.SCREENS.KeyboardAware}/>
      <NavigationButton_1.default text={screens_1.SCREENS.DragAndDrop} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.DragAndDrop)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Markdown} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Markdown)}/>
    </ui_1.View>);
};
exports.default = HomeScreen;
