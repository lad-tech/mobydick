"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const react_native_1 = require("@testing-library/react-native");
const Radio_1 = require("../../Radio");
const useCloneControls_1 = __importDefault(require("../useCloneControls"));
const index_1 = require("../index");
const Typography_1 = require("../../../typography/components/Typography/Typography");
const list = (single) => (<index_1.ControlsList single={single} onChange={jest.fn} values={[]}>
    <Radio_1.Radio value={'1'}>
      <Typography_1.Typography font={'Regular-Primary-M'}>1</Typography_1.Typography>
    </Radio_1.Radio>
    <Radio_1.Radio value={'2'}>
      <Typography_1.Typography font={'Regular-Primary-M'}>2</Typography_1.Typography>
    </Radio_1.Radio>
  </index_1.ControlsList>);
describe('useCloneControls', function () {
    it('should works right', async function () {
        const controls = list(false).props.children;
        const { result } = (0, react_hooks_1.renderHook)(() => (0, useCloneControls_1.default)(controls, [], jest.fn()));
        expect(result.current.radios).toHaveLength(2);
        expect(result.current.values).toHaveLength(0);
    });
    it('should return both values', function () {
        const controls = list(false).props.children;
        let values = [];
        const onChange = jest.fn(val => {
            values = val;
        });
        const { result, rerender } = (0, react_hooks_1.renderHook)(() => (0, useCloneControls_1.default)(controls, values, onChange));
        react_native_1.fireEvent.press(result.current.radios[0]);
        expect(onChange).toHaveBeenCalledWith(['1']);
        rerender();
        react_native_1.fireEvent.press(result.current.radios[1]);
        expect(onChange).toHaveBeenCalledWith(['1', '2']);
    });
    it('should return one value', function () {
        const controls = list(true).props.children;
        const onChange = jest.fn();
        const { result } = (0, react_hooks_1.renderHook)(() => (0, useCloneControls_1.default)(controls, [], onChange, true));
        react_native_1.fireEvent.press(result.current.radios[0]);
        expect(onChange).toHaveBeenCalledWith(['1']);
        react_native_1.fireEvent.press(result.current.radios[1]);
        expect(onChange).toHaveBeenCalledWith(['2']);
    });
    it('should return one value with selected prop', async function () {
        const controls = list(false).props.children;
        let values = ['1'];
        const onChange = jest.fn(val => {
            values = val;
        });
        const { result, rerender } = (0, react_hooks_1.renderHook)(() => (0, useCloneControls_1.default)(controls, values, onChange, false));
        react_native_1.fireEvent.press(result.current.radios[1]);
        rerender();
        react_native_1.fireEvent.press(result.current.radios[0]);
        rerender();
        expect(result.current.values).toHaveLength(1);
        expect(result.current.values[0]).toEqual('2');
    });
});
