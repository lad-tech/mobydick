"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const stylesCreate_1 = __importDefault(require("../stylesCreate"));
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const typography_1 = require("../../../../typography");
const CheckBox_1 = __importDefault(require("../../../../controls/CheckBox/CheckBox"));
const Radio_1 = __importDefault(require("../../../../controls/Radio/Radio"));
const Contents = (props) => {
    const { title, leftIcon, textFont, radio, checkboxList, onPress, disabled, itemType, } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const check = checkboxList?.find(item => item === title) || radio === title;
    const selectFont = () => {
        if (itemType === types_1.IItemType.cancelItem) {
            return disabled ? 'Medium-Muted-M' : 'Medium-Accent-M';
        }
        else {
            return textFont || 'Regular-Primary-M';
        }
    };
    return (<>
      <View_1.default style={styles.leftIconView}>
        {leftIcon && <View_1.default style={styles.leftIcon}>{leftIcon}</View_1.default>}
        <typography_1.Typography style={styles.textSelected} font={selectFont()}>
          {title}
        </typography_1.Typography>
      </View_1.default>

      {checkboxList && (<CheckBox_1.default value={title} selected={Boolean(check)} onPress={onPress}/>)}
      {radio !== undefined && (<Radio_1.default value={title} selected={Boolean(check)} onPress={onPress}/>)}
    </>);
};
exports.default = Contents;
