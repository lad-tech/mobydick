"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_2 = require("react-native");
const PopupBase_1 = __importDefault(require("../PopupBase"));
const constants_1 = __importDefault(require("../constants"));
describe('@lad-tech/mobydick-core/PopupBase', () => {
    afterEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    });
    it('BackHandler', () => {
        const onClose = jest.fn();
        (0, react_native_1.render)(<PopupBase_1.default onClose={onClose}/>);
        // Оно есть вот туть node_modules/react-native/Libraries/Utilities/__mocks__/BackHandler.js
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        react_native_2.BackHandler.mockPressBack();
        expect(onClose).toHaveBeenCalled();
    });
    it('should renders correctly', () => {
        const onClose = jest.fn();
        const { toJSON, getByTestId } = (0, react_native_1.render)(<PopupBase_1.default onClose={onClose}/>);
        const pressable = getByTestId(constants_1.default.testID);
        react_native_1.fireEvent.press(pressable, { target: null, currentTarget: null });
        expect(toJSON()).toMatchSnapshot();
    });
    it('should not fire onClose event', () => {
        const onClose = jest.fn();
        const { toJSON, getByTestId } = (0, react_native_1.render)(<PopupBase_1.default onClose={onClose}/>);
        const pressable = getByTestId(constants_1.default.testID);
        react_native_1.fireEvent.press(pressable, { target: {}, currentTarget: {} });
        expect(toJSON()).toMatchSnapshot();
        expect(onClose).toHaveBeenCalledTimes(0);
    });
});
