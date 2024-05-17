"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Arrow_1 = __importDefault(require("../Arrow"));
const types_1 = require("../types");
const types_2 = require("../../../types");
describe('@lad-tech/mobydick-core/TooltipBase/Arrow', () => {
    it('should renders correctly top start', () => {
        const { toJSON } = (0, react_native_1.render)(<Arrow_1.default placement={types_1.IPlacement.start} position={types_2.IPosition.top} arrowViewStyles={{ width: 20 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly bottom center', () => {
        const { toJSON } = (0, react_native_1.render)(<Arrow_1.default placement={types_1.IPlacement.center} position={types_2.IPosition.bottom} arrowViewStyles={{ width: 20 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly bottom end', () => {
        const { toJSON } = (0, react_native_1.render)(<Arrow_1.default placement={types_1.IPlacement.end} position={types_2.IPosition.bottom}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
