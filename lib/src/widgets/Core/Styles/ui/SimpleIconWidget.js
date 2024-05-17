"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleIconWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const SimpleIconWidget = () => {
    const [simpleIconName, setSimpleIconName] = (0, react_1.useState)('');
    return (<ui_1.View>
      <Header_1.default title={'SimpleIcons'}/>
      <ui_1.SimpleIconAlbum onPress={setSimpleIconName}/>
      <ui_1.Typography>{simpleIconName}</ui_1.Typography>
    </ui_1.View>);
};
exports.SimpleIconWidget = SimpleIconWidget;
