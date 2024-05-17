"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const IndicatorWidget = () => {
    const [percent, setPercent] = (0, react_1.useState)(10);
    const onPress = () => {
        const randomPercent = Math.random();
        setPercent(randomPercent * 100);
    };
    return (<ui_1.View>
      <ui_1.Typography font={'Regular-Primary-H5'}>Indicator</ui_1.Typography>
      <ui_1.Indicator percent={percent}/>
      <ui_1.TouchableOpacity onPress={onPress}>
        <ui_1.Typography font={'Regular-Secondary-XS'}>
          Press me to change percent
        </ui_1.Typography>
      </ui_1.TouchableOpacity>
    </ui_1.View>);
};
exports.IndicatorWidget = IndicatorWidget;
