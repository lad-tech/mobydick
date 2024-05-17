"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const InputsWidget_1 = __importDefault(require("@widgets/Core/Inputs/ui/InputsWidget"));
const InputsScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.ScrollView contentContainerStyle={[styles.container, { flex: undefined }]} showsVerticalScrollIndicator={false}>
      <InputsWidget_1.default />
    </ui_1.ScrollView>);
};
exports.default = InputsScreen;
