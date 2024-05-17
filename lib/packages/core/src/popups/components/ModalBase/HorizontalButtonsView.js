"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const Button_1 = __importDefault(require("../../../cta/components/Button/Button"));
const types_1 = require("../../../cta/components/Button/types");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const HorizontalButtonsView = props => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { typeLeft, onPressLeft, textLeft, typeRight, textRight, onPressRight, disabledRight, disabledLeft, } = props;
    return (<View_1.default style={styles.horizontalButtonsView}>
      <Button_1.default size={types_1.IButtonSize.fixed} style={styles.horizontalLeftButton} type={typeLeft} onPress={onPressLeft} text={textLeft} disabled={disabledLeft}/>
      <Button_1.default size={types_1.IButtonSize.fixed} style={styles.horizontalRightButton} type={typeRight} onPress={onPressRight} text={textRight} disabled={disabledRight}/>
    </View_1.default>);
};
exports.default = HorizontalButtonsView;
