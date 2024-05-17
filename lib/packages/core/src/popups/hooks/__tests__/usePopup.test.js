"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const react_native_1 = require("@testing-library/react-native");
const usePopup_1 = __importDefault(require("../usePopup"));
const context_1 = require("../../context");
const MobyDickPopup_1 = require("../../MobyDickPopup");
describe('@lad-tech/mobydick-core/usePopup', () => {
    const fakeComponent = () => null;
    beforeEach(jest.clearAllMocks);
    it('use case', () => {
        const openPopup = jest.spyOn(MobyDickPopup_1.MobyDickPopup, 'openPopup');
        const closePopup = jest.spyOn(MobyDickPopup_1.MobyDickPopup, 'closePopup');
        const closeAllPopups = jest.spyOn(MobyDickPopup_1.MobyDickPopup, 'closeAllPopups');
        const props = { title: 'test' };
        const { result } = (0, react_hooks_1.renderHook)(() => (0, usePopup_1.default)(fakeComponent), {
            wrapper: context_1.PopupsProvider,
        });
        (0, react_native_1.act)(() => {
            result.current.open({ title: 'test' });
        });
        expect(openPopup).toHaveBeenCalledWith({ Content: fakeComponent, props });
        (0, react_native_1.act)(() => {
            result.current.close();
        });
        expect(closePopup).toHaveBeenCalledWith('1');
        (0, react_native_1.act)(() => {
            result.current.closeAll();
        });
        expect(closeAllPopups).toHaveBeenCalled();
    });
    it('close before open', () => {
        const closePopup = jest.spyOn(MobyDickPopup_1.MobyDickPopup, 'closePopup');
        const { result } = (0, react_hooks_1.renderHook)(() => (0, usePopup_1.default)(fakeComponent), {
            wrapper: context_1.PopupsProvider,
        });
        (0, react_native_1.act)(() => {
            result.current.close();
        });
        expect(closePopup).not.toHaveBeenCalled();
    });
    it('open without props', () => {
        const component = () => null;
        const openPopup = jest.spyOn(MobyDickPopup_1.MobyDickPopup, 'openPopup');
        const { result } = (0, react_hooks_1.renderHook)(() => (0, usePopup_1.default)(component), {
            wrapper: context_1.PopupsProvider,
        });
        (0, react_native_1.act)(() => {
            result.current.open();
        });
        expect(openPopup).toHaveBeenCalledWith({ Content: component, props: {} });
    });
});
