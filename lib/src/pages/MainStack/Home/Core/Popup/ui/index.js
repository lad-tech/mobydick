"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const ActionSheetWidget_1 = require("@widgets/Core/Popup/ui/ActionSheetWidget");
const ModalsWidget_1 = require("@widgets/Core/Popup/ui/ModalsWidget");
const SnackbarWidget_1 = require("@widgets/Core/Popup/ui/SnackbarWidget");
const TooltipWidget_1 = require("@widgets/Core/Popup/ui/TooltipWidget");
const ModalWidget_1 = require("@widgets/Core/Popup/ui/ModalWidget");
const PopupBaseWidget_1 = require("@widgets/Core/Popup/ui/PopupBaseWidget");
const PopupScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.ScrollView contentContainerStyle={[styles.container, { flex: undefined }]}>
      <ActionSheetWidget_1.ActionSheetWidget />
      <ModalsWidget_1.ModalsWidget />
      <SnackbarWidget_1.SnackbarWidget />
      <TooltipWidget_1.TooltipWidget />
      <ModalWidget_1.ModalWidget />
      <PopupBaseWidget_1.PopupBaseWidget />
    </ui_1.ScrollView>);
};
exports.default = PopupScreen;
