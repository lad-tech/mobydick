"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotsWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const DotsWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    const [activeDot, setActiveDot] = (0, react_1.useState)(0);
    const length = 9;
    const onPressIncrease = () => {
        if (activeDot !== length - 1) {
            setActiveDot(curr => curr + 1);
        }
    };
    const onPressDecrease = () => {
        if (activeDot !== 0) {
            setActiveDot(curr => curr - 1);
        }
    };
    return (<ui_1.View>
      <Header_1.default title={'Dots'}/>
      <ui_1.View style={styles.container}>
        <ui_1.TouchableOpacity onPress={onPressDecrease}>
          <ui_1.Typography font={'Regular-Secondary-XS'}>
            Press me to decrease dot
          </ui_1.Typography>
        </ui_1.TouchableOpacity>
        <ui_1.Dots length={length} activeDot={activeDot}/>
        <ui_1.TouchableOpacity onPress={onPressIncrease}>
          <ui_1.Typography font={'Regular-Secondary-XS'}>
            Press me to increase dot
          </ui_1.Typography>
        </ui_1.TouchableOpacity>
      </ui_1.View>
    </ui_1.View>);
};
exports.DotsWidget = DotsWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
        alignItems: 'center',
    },
}));
