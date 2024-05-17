"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const types_1 = require("../types");
const Loader_1 = __importDefault(require("../Loader"));
describe('@lad-tech/mobydick-core/Loader', () => {
    it('renders correctly S', () => {
        const { toJSON } = (0, react_native_1.render)(<Loader_1.default size={types_1.ISizeSpinner.S}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly M', () => {
        const { toJSON } = (0, react_native_1.render)(<Loader_1.default size={types_1.ISizeSpinner.M}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly L', () => {
        const { toJSON } = (0, react_native_1.render)(<Loader_1.default size={types_1.ISizeSpinner.L}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly without size', () => {
        const { toJSON } = (0, react_native_1.render)(<Loader_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
});
