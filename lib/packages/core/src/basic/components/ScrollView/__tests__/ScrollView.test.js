"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ScrollView_1 = __importDefault(require("../ScrollView"));
describe('@lad-tech/mobydick-core/ScrollView', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ScrollView_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
});
