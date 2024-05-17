"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const StatusWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.View>
      <Header_1.default title={'Status'}/>
      <ui_1.View style={styles.container}>
        <ui_1.Typography>Dot</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.Status type={ui_1.IStatusType.dot} state={ui_1.IStatusState.green}/>
          <ui_1.Status type={ui_1.IStatusType.dot} state={ui_1.IStatusState.blue}/>
          <ui_1.Status type={ui_1.IStatusType.dot} state={ui_1.IStatusState.red}/>
          <ui_1.Status type={ui_1.IStatusType.dot} state={ui_1.IStatusState.gray}/>
          <ui_1.Status type={ui_1.IStatusType.dot} state={ui_1.IStatusState.orange}/>
        </ui_1.View>
        <ui_1.Typography>Tag</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.Status type={ui_1.IStatusType.tag} state={ui_1.IStatusState.green} text={'tag'}/>
          <ui_1.Status type={ui_1.IStatusType.tag} state={ui_1.IStatusState.blue} text={'tag'}/>
          <ui_1.Status type={ui_1.IStatusType.tag} state={ui_1.IStatusState.red} text={'tag'}/>
          <ui_1.Status type={ui_1.IStatusType.tag} state={ui_1.IStatusState.gray} text={'tag'}/>
          <ui_1.Status type={ui_1.IStatusType.tag} state={ui_1.IStatusState.orange} text={'tag'}/>
        </ui_1.View>
      </ui_1.View>
    </ui_1.View>);
};
exports.StatusWidget = StatusWidget;
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
