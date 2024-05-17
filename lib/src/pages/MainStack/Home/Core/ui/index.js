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
const CoreScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.View style={styles.container}>
      <NavigationButton_1.default text={screens_1.SCREENS.Chat} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Chat)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Controls} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Controls)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.CTA} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.CTA)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Inputs} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Inputs)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Popups} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Popups)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Progress} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Progress)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Styles} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Styles)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Typography} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Typography)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Other} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Other)}/>
      <NavigationButton_1.default text={screens_1.SCREENS.Navbars} onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Navbars)}/>
    </ui_1.View>);
};
exports.default = CoreScreen;
