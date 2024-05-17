"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const constants_1 = require("../constants");
const Years = props => {
    const { onCloseYears, onPressYear, yearRange } = props;
    const [styles] = (0, mobydick_core_1.useStyles)(stylesCreate);
    const { colors } = (0, mobydick_core_1.useTheme)();
    const onPress = (0, react_1.useCallback)((item) => () => {
        onCloseYears();
        onPressYear(item);
    }, [onCloseYears, onPressYear]);
    const getStyle = (0, react_1.useCallback)(({ pressed }) => [
        styles.year,
        { backgroundColor: pressed ? colors.BgAccentSoft : colors.BgPrimary },
    ], []);
    const renderItem = (0, react_1.useCallback)(({ item }) => {
        return (<mobydick_core_1.Pressable style={getStyle} accessibilityLabel={constants_1.LABELS.pressYear} onPress={onPress(item)}>
        <mobydick_core_1.Typography>{item}</mobydick_core_1.Typography>
      </mobydick_core_1.Pressable>);
    }, []);
    return (<mobydick_core_1.FlatList data={yearRange} style={styles.container} renderItem={renderItem} numColumns={3} scrollEnabled={false} showsVerticalScrollIndicator={false}/>);
};
exports.default = Years;
const stylesCreate = (0, mobydick_core_1.createStyles)(({ spaces }) => ({
    year: {
        flex: 4,
        paddingVertical: spaces.Space20,
        alignItems: 'center',
        borderRadius: spaces.Space4,
    },
    container: {
        width: '100%',
        alignContent: 'center',
    },
}));
