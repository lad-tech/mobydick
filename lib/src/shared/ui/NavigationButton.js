"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const NavigationButton = ({ onPress, text }) => {
    const [styles] = (0, ui_1.useStyles)(createStylesFn);
    return (<ui_1.TouchableOpacity onPress={onPress} style={styles.container}>
      <ui_1.Typography font={'Regular-Primary-H5'}>{text}</ui_1.Typography>
    </ui_1.TouchableOpacity>);
};
const createStylesFn = (0, ui_1.createStyles)(({ spaces, colors }) => ({
    container: {
        borderColor: colors.BorderNormal,
        borderWidth: spaces.Space1,
        borderRadius: spaces.Space8,
        padding: spaces.Space8,
        backgroundColor: colors.BgPrimary,
    },
}));
exports.default = NavigationButton;
