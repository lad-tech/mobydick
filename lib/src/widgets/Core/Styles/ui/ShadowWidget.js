"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const ShadowWidget = () => {
    const [styles] = (0, ui_1.useStyles)(style);
    return (<ui_1.View style={styles.container}>
      <Header_1.default title={'Shadow'}/>
      <ui_1.View style={styles.content}>
        <ui_1.View style={styles.item}>
          <ui_1.View style={[styles.box, styles.shadowSmall]}/>
          <ui_1.Typography>shadowSmall</ui_1.Typography>
        </ui_1.View>
        <ui_1.View style={styles.item}>
          <ui_1.View style={[styles.box, styles.shadowMedium]}/>
          <ui_1.Typography>shadowMedium</ui_1.Typography>
        </ui_1.View>
        <ui_1.View style={styles.item}>
          <ui_1.View style={[styles.box, styles.shadowLarge]}/>
          <ui_1.Typography>shadowLarge</ui_1.Typography>
        </ui_1.View>
      </ui_1.View>
    </ui_1.View>);
};
exports.ShadowWidget = ShadowWidget;
const style = (0, ui_1.createStyles)(({ shadows, spaces, colors }) => ({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spaces.Space12,
    },
    item: {
        alignItems: 'center',
    },
    box: {
        backgroundColor: colors.BgSecondary,
        margin: spaces.Space8,
        height: spaces.Space64,
        width: spaces.Space64,
    },
    shadowSmall: {
        ...shadows.small,
    },
    shadowMedium: {
        ...shadows.medium,
    },
    shadowLarge: {
        ...shadows.large,
    },
}));
