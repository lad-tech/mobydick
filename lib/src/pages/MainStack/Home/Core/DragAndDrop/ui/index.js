"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EL_HEIGHT = exports.EL_WIDTH = exports.COL = exports.MARGIN = void 0;
const react_native_1 = require("react-native");
const ui_1 = require("@shared/ui");
const BlockView_1 = require("@shared/ui/BlockView");
const { width: WIDTH } = react_native_1.Dimensions.get('window');
const arr = new Array(26).fill('').map((_, i) => i);
exports.MARGIN = px(8);
exports.COL = 2;
exports.EL_WIDTH = WIDTH / exports.COL - exports.MARGIN;
exports.EL_HEIGHT = exports.EL_WIDTH / 2;
const DragAndDropScreen = () => {
    const { colors } = (0, ui_1.useTheme)();
    const bgColors = [
        colors.ElementMuted,
        colors.ElementAdditional,
        colors.ElementAttention,
        colors.ElementBase,
        colors.ElementNeutral,
        colors.ElementSuccess,
        colors.ElementWhite,
    ];
    return (<ui_1.DragAndDropList list={arr} itemWidth={exports.EL_WIDTH} itemHeight={exports.EL_HEIGHT} columns={exports.COL} contentContainerStyle={{ marginHorizontal: exports.MARGIN }} renderItem={(item, index) => (<BlockView_1.BlockView item={item} width={exports.EL_WIDTH} key={index} height={exports.EL_HEIGHT} backgroundColor={bgColors[Math.floor(Math.random() * bgColors.length)]}/>)}/>);
};
exports.default = DragAndDropScreen;
