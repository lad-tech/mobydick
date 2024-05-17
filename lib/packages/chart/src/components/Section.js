"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
const react_native_1 = require("react-native");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const SectionButton_1 = __importDefault(require("./SectionButton"));
const Selection = ({ state, transition, dataset, renderSectionItem, sectionContainerStyles, }) => {
    const [styles] = (0, mobydick_core_1.useStyles)(createStyleFn);
    const periods = Object.keys(dataset);
    return (<react_native_1.View style={[styles.container, sectionContainerStyles]}>
      {periods.map((period, index) => (<SectionButton_1.default renderSectionItem={renderSectionItem} key={index} index={index} period={period} state={state} transition={transition}/>))}
    </react_native_1.View>);
};
exports.Selection = Selection;
const createStyleFn = (0, mobydick_core_1.createStyles)(({ colors, spaces }) => ({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'stretch',
        alignItems: 'stretch',
        backgroundColor: colors.BgSecondary,
        borderRadius: spaces.Space16,
    },
}));
exports.default = exports.Selection;
