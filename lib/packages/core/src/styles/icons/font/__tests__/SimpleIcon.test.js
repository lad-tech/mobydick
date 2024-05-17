"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const SimpleIcon_1 = __importDefault(require("../SimpleIcon"));
describe('@lad-tech/mobydick-core/icons/SimpleIcon', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<SimpleIcon_1.default name={'icon-account'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
