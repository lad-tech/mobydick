"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const AlertContent_1 = __importDefault(require("../AlertContent"));
describe('@lad-tech/mobydick-core/modalBase', () => {
    it('should renders correctly AlertContent type = check', () => {
        const { toJSON } = (0, react_native_1.render)(<AlertContent_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly AlertContent type = warning', () => {
        const { toJSON } = (0, react_native_1.render)(<AlertContent_1.default name={'icon-warning'} color={'#fff'} style={{ backgroundColor: '#fff' }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
