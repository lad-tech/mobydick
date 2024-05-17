"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const stylesCreate_1 = __importDefault(require("../stylesCreate"));
const useTheme_1 = __importDefault(require("../../../../styles/hooks/useTheme"));
const px_1 = __importDefault(require("../../../../styles/utils/px"));
describe('dots/stylesCreate', () => {
    it('must return', () => {
        const { result } = (0, react_hooks_1.renderHook)(() => (0, useTheme_1.default)());
        expect((0, stylesCreate_1.default)(result.current)).toEqual({
            dot: {
                width: (0, px_1.default)(8),
                height: (0, px_1.default)(8),
                marginHorizontal: (0, px_1.default)(5),
                borderRadius: (0, px_1.default)(8) / 2,
            },
            dots: {
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: (0, px_1.default)(5),
            },
        });
    });
});
