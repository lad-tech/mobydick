"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossedTextWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const CrossedTextWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<>
      <Header_1.default title={'CrossedText'}/>
      <ui_1.View style={styles.container}>
        <ui_1.View>
          <ui_1.CrossedText lineColor={'red'}>CrossedText</ui_1.CrossedText>
        </ui_1.View>
      </ui_1.View>
    </>);
};
exports.CrossedTextWidget = CrossedTextWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
        alignItems: 'center',
    },
}));
