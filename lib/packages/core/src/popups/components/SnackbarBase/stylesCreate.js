"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const styles_1 = require("../../../styles");
const stylesCreate = (0, styles_1.createStyles)(({ colors, spaces }, placement) => {
    const placementStyle = () => {
        switch (placement) {
            case types_1.IPosition.top:
                return {
                    top: 20,
                };
            case types_1.IPosition.bottom:
            default:
                return {
                    bottom: 10,
                };
        }
    };
    return {
        overlayStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            width: '100%',
            flex: 1,
            alignItems: 'center',
            ...placementStyle(),
        },
        container: {
            backgroundColor: colors.BgContrast,
            borderRadius: spaces.Space12,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: spaces.Space20,
            paddingVertical: spaces.Space16,
            margin: spaces.Space20,
        },
        title: {
            flex: 1,
            paddingRight: spaces.Space8,
        },
    };
});
exports.default = stylesCreate;
