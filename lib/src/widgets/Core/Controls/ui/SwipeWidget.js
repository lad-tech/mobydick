"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const SwipeWidget = () => {
    const [active, setActive] = (0, react_1.useState)(false);
    return (<ui_1.View>
      <ui_1.Typography font={'Regular-Primary-H5'}>Swipe</ui_1.Typography>
      <ui_1.Swipe onPress={setActive} active={active} disabled={false}/>
    </ui_1.View>);
};
exports.SwipeWidget = SwipeWidget;
