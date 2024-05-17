"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardAwareScrollViewWithBottomScreen = void 0;
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const Inputs_1 = require("@widgets/KeyboardAware/Inputs");
const Bottom_1 = require("@widgets/KeyboardAware/Bottom");
const KeyboardAwareScrollViewWithBottomScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.KeyboardAwareScrollView contentContainerStyle={[styles.container, { flex: undefined }]} BottomComponent={<Bottom_1.BottomComponent />}>
      <Inputs_1.Inputs />
    </ui_1.KeyboardAwareScrollView>);
};
exports.KeyboardAwareScrollViewWithBottomScreen = KeyboardAwareScrollViewWithBottomScreen;
