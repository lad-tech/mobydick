"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Radio_1 = __importDefault(require("../Radio"));
describe('@lad-tech/mobydick-core/Radio', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<Radio_1.default value={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly selected', () => {
        const { toJSON } = (0, react_native_1.render)(<Radio_1.default value={'text'} selected/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly disabled', () => {
        const { toJSON } = (0, react_native_1.render)(<Radio_1.default value={'text'} disabled/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly selected and disabled', () => {
        const { toJSON } = (0, react_native_1.render)(<Radio_1.default value={'text'} selected disabled/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
