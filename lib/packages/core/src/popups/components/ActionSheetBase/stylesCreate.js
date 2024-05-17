"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const types_1 = require("./types");
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, itemType) => {
    const getItemStyle = () => {
        switch (itemType) {
            case types_1.IItemType.firstItem:
                return {
                    borderTopLeftRadius: spaces.Space12,
                    borderTopRightRadius: spaces.Space12,
                };
            case types_1.IItemType.innerItem:
                return {
                    borderTopWidth: spaces.Space1,
                    borderTopColor: colors.BgTertiary,
                };
            case types_1.IItemType.lastItem:
                return {
                    borderBottomLeftRadius: spaces.Space12,
                    borderBottomRightRadius: spaces.Space12,
                    marginBottom: spaces.Space8,
                    borderTopWidth: spaces.Space1,
                    borderTopColor: colors.BgTertiary,
                };
            case types_1.IItemType.cancelItem:
                return {
                    borderRadius: spaces.Space12,
                    marginBottom: (0, px_1.default)(30),
                    justifyContent: 'center',
                };
            default:
                return {
                    borderRadius: spaces.Space12,
                    marginBottom: spaces.Space8,
                    justifyContent: 'center',
                };
        }
    };
    return {
        overlayStyle: {
            justifyContent: 'flex-end',
        },
        containerStyle: {
            width: '100%',
        },
        item: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: spaces.Space20,
            marginHorizontal: spaces.Space8,
            minHeight: (0, px_1.default)(50),
            ...getItemStyle(),
        },
        leftIcon: {
            paddingRight: spaces.Space12,
        },
        leftIconView: {
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
        },
        textSelected: {
            paddingVertical: (0, px_1.default)(15),
        },
    };
});
exports.default = stylesCreate;
