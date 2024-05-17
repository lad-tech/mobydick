"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const SnackbarBase_1 = __importDefault(require("../SnackbarBase"));
const types_1 = require("../../../types");
describe('@lad-tech/mobydick-core/SnackbarBase', () => {
    jest.useFakeTimers();
    it('should renders correctly', () => {
        const onClose = jest.fn();
        const { toJSON } = (0, react_native_1.render)(<SnackbarBase_1.default id={'id'} onClose={onClose} position={types_1.IPosition.top}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with timeShow', () => {
        const onClose = jest.fn();
        const { toJSON } = (0, react_native_1.render)(<SnackbarBase_1.default id={'id'} onClose={onClose} position={types_1.IPosition.bottom} timeShow={1000}/>);
        jest.runAllTimers();
        expect(toJSON()).toMatchSnapshot();
    });
});
