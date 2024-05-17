"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const constants_1 = require("../constants");
const Months = props => {
    const { onCloseMonths, onPressMonth, monthNamesShort } = props;
    const [styles] = (0, mobydick_core_1.useStyles)(stylesCreate);
    const { colors } = (0, mobydick_core_1.useTheme)();
    const onPress = (0, react_1.useCallback)((index) => () => {
        onCloseMonths();
        onPressMonth(index);
    }, [onCloseMonths, onPressMonth]);
    const getStyle = (0, react_1.useCallback)(({ pressed }) => [
        styles.month,
        { backgroundColor: pressed ? colors.BgAccentSoft : colors.BgPrimary },
    ], [colors.BgAccentSoft, colors.BgPrimary]);
    const renderItem = (0, react_1.useCallback)(({ item, index }) => {
        return (<mobydick_core_1.Pressable style={getStyle} accessibilityLabel={constants_1.LABELS.pressMonth} onPress={onPress(index)}>
          <mobydick_core_1.Typography>{item}</mobydick_core_1.Typography>
        </mobydick_core_1.Pressable>);
    }, []);
    return (<mobydick_core_1.FlatList data={monthNamesShort} style={styles.container} renderItem={renderItem} numColumns={3} scrollEnabled={false} showsVerticalScrollIndicator={false}/>);
};
exports.default = Months;
const stylesCreate = (0, mobydick_core_1.createStyles)(({ spaces }) => ({
    month: {
        flex: 3,
        paddingVertical: spaces.Space20,
        alignItems: 'center',
        borderRadius: spaces.Space4,
    },
    container: {
        width: '100%',
        alignContent: 'center',
    },
}));
