"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const TouchableOpacity_1 = __importDefault(require("../TouchableOpacity"));
describe('@lad-tech/mobydick-core/TouchableOpacity', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<TouchableOpacity_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
});
