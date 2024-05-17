"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionButton = void 0;
const react_native_reanimated_1 = require("react-native-reanimated");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const SectionButton = ({ renderSectionItem, transition, state, period, index, }) => {
    const [styles] = (0, mobydick_core_1.useStyles)(createStyleFn);
    return (<mobydick_core_1.Pressable style={styles.flex} onPress={() => {
            state.value = { current: state.value.next, next: index };
            transition.value = 0;
            transition.value = (0, react_native_reanimated_1.withTiming)(1, {
                duration: 750,
            });
        }}>
      {renderSectionItem({ period, state, transition }, index)}
    </mobydick_core_1.Pressable>);
};
exports.SectionButton = SectionButton;
const createStyleFn = (0, mobydick_core_1.createStyles)(() => ({
    flex: {
        flexGrow: 1,
    },
}));
exports.default = exports.SectionButton;
