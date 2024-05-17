"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const CollapsibleWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.View>
      <Header_1.default title={'Collapsible'}/>
      <ui_1.View style={styles.container}>
        <ui_1.Collapsible title={'Collapsible'}>
          <ui_1.Typography>
            Component to wrap content in Collapsible element with trigger to
            open and close
          </ui_1.Typography>
        </ui_1.Collapsible>
      </ui_1.View>
    </ui_1.View>);
};
exports.CollapsibleWidget = CollapsibleWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
    },
}));
