"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ButtonWrapper_1 = __importDefault(require("../ButtonWrapper"));
describe('@lad-tech/mobydick-core/Button', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ButtonWrapper_1.default title={'button'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
