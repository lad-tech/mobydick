"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const ShadowWidget_1 = require("@widgets/Core/Styles/ui/ShadowWidget");
const SimpleIconWidget_1 = require("@widgets/Core/Styles/ui/SimpleIconWidget");
const renderItem = () => <ui_1.View />;
const StylesScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.FlatList data={[]} contentContainerStyle={[styles.container, { flex: undefined }]} renderItem={renderItem} ListFooterComponent={<>
          <ShadowWidget_1.ShadowWidget />
          <SimpleIconWidget_1.SimpleIconWidget />
        </>}/>);
};
exports.default = StylesScreen;
