"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles_1 = require("../../styles");
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: react_native_1.I18nManager.isRTL ? 'flex-end' : 'flex-start',
        alignItems: 'center',
        minHeight: spaces.Space32,
    },
    rail: {
        flex: 1,
        height: spaces.Space4,
        borderRadius: spaces.Space2,
        backgroundColor: colors.IconMuted,
    },
    selectedRailContainer: {
        position: 'absolute',
    },
    selectedRail: {
        height: spaces.Space4,
        backgroundColor: colors.IconBase,
        borderRadius: spaces.Space2,
    },
    highThumbContainer: {
        position: 'absolute',
    },
    railsContainer: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchableArea: {
        ...react_native_1.StyleSheet.absoluteFillObject,
    },
}));
exports.default = stylesCreate;
