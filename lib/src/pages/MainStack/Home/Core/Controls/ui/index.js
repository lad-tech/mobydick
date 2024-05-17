"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const SliderWidget_1 = require("@widgets/Core/Controls/ui/SliderWidget");
const ControlListWidget_1 = require("@widgets/Core/Controls/ui/ControlListWidget");
const SwipeWidget_1 = require("@widgets/Core/Controls/ui/SwipeWidget");
const ControlsScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.View style={styles.container}>
      <ControlListWidget_1.ControlListWidget />
      <SliderWidget_1.SliderWidget />
      <SwipeWidget_1.SwipeWidget />
    </ui_1.View>);
};
exports.default = ControlsScreen;
