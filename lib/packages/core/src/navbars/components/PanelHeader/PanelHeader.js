"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const styles_1 = require("../../../styles");
const ContentHeader_1 = __importDefault(require("./components/ContentHeader"));
const PanelHeader = props => {
    const { commonViewStyle, isSafeAreaView = true, edges = ['top'], ...otherProps } = props;
    const [styles] = (0, styles_1.useStyles)(stylesCreate);
    return (<View_1.default style={[styles.commonView, commonViewStyle]}>
      {isSafeAreaView ? (<react_native_safe_area_context_1.SafeAreaView edges={edges}>
          <ContentHeader_1.default {...otherProps}/>
        </react_native_safe_area_context_1.SafeAreaView>) : (<ContentHeader_1.default {...otherProps}/>)}
    </View_1.default>);
};
exports.default = PanelHeader;
const stylesCreate = (0, styles_1.createStyles)(_ => ({
    commonView: {
        width: '100%',
    },
}));
