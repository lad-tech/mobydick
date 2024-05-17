"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inputs = void 0;
const ui_1 = require("@shared/ui");
const Inputs = () => {
    const [styles] = (0, ui_1.useStyles)(style);
    return (<ui_1.View style={styles.container}>
      {new Array(20).fill(0).map((_value, index) => (<ui_1.InputField key={index} title={`Input title ${index}`} subtitle={`Input subtitle ${index}`}/>))}
    </ui_1.View>);
};
exports.Inputs = Inputs;
const style = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space8,
    },
}));
