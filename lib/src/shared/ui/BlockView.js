"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockView = void 0;
const ui_1 = require("@shared/ui");
const BlockView = ({ item, width, height, backgroundColor, }) => {
    const [styles, { colors }] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.View style={[
            styles.container,
            {
                width: width,
                height: height || width,
                backgroundColor: backgroundColor || colors.BgAccent,
            },
        ]}>
      <ui_1.Typography>{item}</ui_1.Typography>
    </ui_1.View>);
};
exports.BlockView = BlockView;
const stylesFn = (0, ui_1.createStyles)(() => ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
}));
