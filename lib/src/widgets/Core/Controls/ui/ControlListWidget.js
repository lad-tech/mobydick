"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlListWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const ControlListWidget = () => {
    const [styles] = (0, ui_1.useStyles)(styleFn);
    const [checkbox, setCheckbox] = (0, react_1.useState)([]);
    const [radio, setRadio] = (0, react_1.useState)([]);
    return (<ui_1.View style={styles.container}>
      <ui_1.Typography font={'Regular-Primary-H5'}>ControlsList</ui_1.Typography>
      <ui_1.View>
        <ui_1.Typography font={'Regular-Primary-L'}>checkbox</ui_1.Typography>
        <ui_1.ControlsList onChange={setCheckbox} values={checkbox} listStyles={styles.container}>
          <ui_1.CheckBox value={'option one'}>
            <ui_1.Typography>option one</ui_1.Typography>
          </ui_1.CheckBox>
          <ui_1.CheckBox value={'option two'}>
            <ui_1.Typography>option two</ui_1.Typography>
          </ui_1.CheckBox>
        </ui_1.ControlsList>
      </ui_1.View>

      <ui_1.View>
        <ui_1.Typography font={'Regular-Primary-L'}>radio</ui_1.Typography>
        <ui_1.ControlsList onChange={setRadio} values={radio} single={true} listStyles={styles.container}>
          <ui_1.Radio value={'option one'}>
            <ui_1.Typography>option one</ui_1.Typography>
          </ui_1.Radio>
          <ui_1.Radio value={'option two'}>
            <ui_1.Typography>option two</ui_1.Typography>
          </ui_1.Radio>
        </ui_1.ControlsList>
      </ui_1.View>
    </ui_1.View>);
};
exports.ControlListWidget = ControlListWidget;
const styleFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: { gap: spaces.Space8 },
}));
