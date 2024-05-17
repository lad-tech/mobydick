"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const IndicatorWidget_1 = require("@widgets/Core/Progress/ui/IndicatorWidget");
const SpinnerWidget_1 = require("@widgets/Core/Progress/ui/SpinnerWidget");
const PanelSpinnerWidget_1 = require("@widgets/Core/Progress/ui/PanelSpinnerWidget");
const ProgressScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.ScrollView contentContainerStyle={[styles.container, { flex: undefined }]}>
      <IndicatorWidget_1.IndicatorWidget />
      <SpinnerWidget_1.SpinnerWidget />
      <PanelSpinnerWidget_1.PanelSpinnerWidget />
    </ui_1.ScrollView>);
};
exports.default = ProgressScreen;
