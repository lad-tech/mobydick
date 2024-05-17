"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const styles_1 = require("../../../styles");
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, position) => {
    const positionStyle = () => {
        switch (position) {
            case types_1.IPosition.top:
                return {
                    top: -spaces.Space8,
                    borderBottomWidth: spaces.Space8,
                    borderRightWidth: spaces.Space8,
                    borderTopWidth: 0,
                    borderLeftWidth: spaces.Space8,
                    borderBottomColor: colors.BgContrast,
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                };
            case types_1.IPosition.bottom:
            default:
                return {
                    bottom: -spaces.Space8,
                    borderTopWidth: spaces.Space8,
                    borderRightWidth: spaces.Space8,
                    borderBottomWidth: 0,
                    borderLeftWidth: spaces.Space8,
                    borderTopColor: colors.BgContrast,
                    borderRightColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                };
        }
    };
    return {
        container: {
            backgroundColor: colors.BgContrast,
            paddingVertical: spaces.Space8,
            paddingHorizontal: spaces.Space16,
            borderRadius: spaces.Space8,
            justifyContent: 'center',
            alignItems: 'flex-start',
            zIndex: 1,
            marginVertical: spaces.Space8,
            position: 'absolute',
        },
        overlayStyle: {
            backgroundColor: 'transparent',
        },
        arrow: {
            position: 'absolute',
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
        },
        title: {
            zIndex: 1,
        },
        descriptionText: {
            zIndex: 1,
            paddingBottom: spaces.Space8,
        },
        positionStyle: {
            ...positionStyle(),
        },
    };
});
exports.default = stylesCreate;
