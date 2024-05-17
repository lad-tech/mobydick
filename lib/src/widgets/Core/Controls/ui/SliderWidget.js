"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const SliderWidget = () => {
    const [styles] = (0, ui_1.useStyles)(styleFn);
    const [range, setRange] = (0, react_1.useState)({ low: 0, high: 100 });
    const [low, setLow] = (0, react_1.useState)(0);
    return (<ui_1.View style={styles.container}>
      <ui_1.Typography font={'Regular-Primary-H5'}>Slider</ui_1.Typography>
      <ui_1.View>
        <ui_1.Typography font={'Regular-Primary-L'}>default</ui_1.Typography>
        <ui_1.Slider min={0} max={100} low={range.low} high={range.high} minRange={10} step={5} onValueChanged={(low, high) => {
            setRange({ low, high });
        }}/>
        <ui_1.Typography>{`Low: ${range.low} High: ${range.high} Step: ${5}`}</ui_1.Typography>
      </ui_1.View>
      <ui_1.View>
        <ui_1.Typography font={'Regular-Primary-L'}>disableRange</ui_1.Typography>
        <ui_1.Slider min={0} max={100} step={1} low={low} disableRange={true} onValueChanged={low => {
            setLow(low);
        }}/>
        <ui_1.Typography>{`Low: ${low} Step: ${1}`}</ui_1.Typography>
      </ui_1.View>
    </ui_1.View>);
};
exports.SliderWidget = SliderWidget;
const styleFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: { gap: spaces.Space8 },
}));
