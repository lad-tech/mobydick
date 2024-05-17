"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const usePopups_1 = __importDefault(require("../usePopups"));
describe('@lad-tech/mobydick-core/usePopups', () => {
    it('should not usePopups', () => {
        const error = new Error('[@lad-tech/mobydick-core] usePopups hook was called outside of context, wrap your app with PopupsProvider component');
        const { result } = (0, react_hooks_1.renderHook)(() => (0, usePopups_1.default)());
        expect(result.current.openPopup).toThrow(error);
        expect(result.current.closePopup).toThrow(error);
        expect(result.current.closeAllPopups).toThrow(error);
    });
});
