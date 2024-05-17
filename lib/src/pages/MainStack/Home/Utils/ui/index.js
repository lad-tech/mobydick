"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const UtilsScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return <ui_1.View style={styles.container}></ui_1.View>;
};
exports.default = UtilsScreen;
