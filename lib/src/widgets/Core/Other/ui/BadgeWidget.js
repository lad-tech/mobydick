"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const BadgeWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.View>
      <Header_1.default title={'Badge'}/>
      <ui_1.View style={styles.container}>
        <ui_1.Typography>{'BadgeIndicator'}</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.BadgeIndicator type={ui_1.IIndicatorTypes.primary}/>
          <ui_1.BadgeIndicator type={ui_1.IIndicatorTypes.secondary} style={{ right: 0 }}/>
        </ui_1.View>
        <ui_1.Typography>{'Counter'}</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.Counter size={ui_1.ICounterSize.small} type={ui_1.ICounterTypes.accent} count={1}/>
          <ui_1.Counter type={ui_1.ICounterTypes.attention} count={99}/>
          <ui_1.Counter type={ui_1.ICounterTypes.muted} count={999}/>
          <ui_1.Counter type={ui_1.ICounterTypes.accent} count={999} maxLength={3}/>
        </ui_1.View>
      </ui_1.View>
    </ui_1.View>);
};
exports.BadgeWidget = BadgeWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: spaces.Space16,
    },
}));
