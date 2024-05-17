"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const SimpleIcon_1 = __importDefault(require("../../../styles/icons/font/SimpleIcon"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const Spinner_1 = require("../Spinner");
const types_1 = require("../Spinner/types");
const Pressable_1 = __importDefault(require("../../../basic/components/Pressable/Pressable"));
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const PanelSpinner = props => {
    const { isLoading, duration = 2500, isError = false, onCancel } = props;
    const [styles, theme] = (0, useStyles_1.default)(stylesCreate_1.default);
    const SpinnerStatus = () => {
        return isError ? (<react_native_1.View style={[
                styles.insideView,
                { backgroundColor: theme.colors.BgSecondary },
            ]}>
        <SimpleIcon_1.default name="icon-cancel" size={(0, px_1.default)(32)} color={theme.colors.IconMuted}/>
      </react_native_1.View>) : (<react_native_1.View style={styles.insideView}>
        <SimpleIcon_1.default name="icon-check" size={(0, px_1.default)(48)} color={theme.colors.IconBase}/>
      </react_native_1.View>);
    };
    return (<react_native_1.View style={styles.container}>
      {isLoading ? (<>
          <Spinner_1.Spinner duration={duration} size={types_1.ISizeSpinner.L}/>
          {!!onCancel && (<Pressable_1.default style={[
                    styles.insideView,
                    {
                        position: 'absolute',
                    },
                ]} onPress={onCancel}>
              <SimpleIcon_1.default name="icon-cancel" color={theme.colors.IconMuted}/>
            </Pressable_1.default>)}
        </>) : (<SpinnerStatus />)}
    </react_native_1.View>);
};
exports.default = PanelSpinner;
