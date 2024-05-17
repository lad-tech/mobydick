"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const getAllTypography = () => {
    const weights = Object.keys(ui_1.TFontWeight);
    const sizes = Object.keys(ui_1.TFontSize);
    const colors = Object.keys(ui_1.defaultTextLightColor).map(name => name.slice(4, name.length));
    const result = [];
    weights.forEach(weight => {
        colors.forEach(color => {
            sizes.forEach(size => {
                result.push(`${weight}-${color}-${size}`);
            });
        });
    });
    return result;
};
const renderItem = ({ item }) => (<ui_1.Typography font={item}>{item}</ui_1.Typography>);
const keyExtractor = item => item;
const TypographyScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    const data = getAllTypography();
    return (<ui_1.View style={styles.container}>
      <ui_1.FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} removeClippedSubviews={true}/>
    </ui_1.View>);
};
exports.default = TypographyScreen;
