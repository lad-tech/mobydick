"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const react_1 = __importDefault(require("react"));
const TooltipBase_1 = __importDefault(require("../TooltipBase"));
const types_1 = require("../types");
const types_2 = require("../../../types");
const Button_1 = __importDefault(require("../../../../cta/components/Button/Button"));
describe('@lad-tech/mobydick-core/TooltipBase/TooltipBase', () => {
    jest.useFakeTimers();
    let buttonRef;
    beforeEach(() => {
        buttonRef = react_1.default.createRef();
        (0, react_native_1.render)(<Button_1.default ref={buttonRef}/>);
    });
    it('should renders correctly bottom center', () => {
        jest
            .spyOn(buttonRef.current, 'measure')
            .mockImplementation((cb) => cb(0, 24, 1, 1, 287, 2410));
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <TooltipBase_1.default id={'id'} onClose={() => null} position={types_2.IPosition.bottom} placement={types_1.IPlacement.center} refCurrent={buttonRef}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly top start', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <TooltipBase_1.default id={'id'} onClose={() => null} position={types_2.IPosition.top} placement={types_1.IPlacement.start} refCurrent={buttonRef}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly top end', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <TooltipBase_1.default id={'id'} onClose={() => null} position={types_2.IPosition.top} placement={types_1.IPlacement.end} refCurrent={buttonRef}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly Timeshow', () => {
        const onClose = jest.fn();
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <TooltipBase_1.default id={'id'} onClose={onClose} timeShow={3000} position={types_2.IPosition.top} placement={types_1.IPlacement.end} refCurrent={buttonRef}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        jest.runAllTimers();
        expect(toJSON()).toMatchSnapshot();
    });
});
