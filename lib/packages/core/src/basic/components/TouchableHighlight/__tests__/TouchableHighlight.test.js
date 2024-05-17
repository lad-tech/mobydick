"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const TouchableHighlight_1 = __importDefault(require("../TouchableHighlight"));
const View_1 = require("../../View");
describe('@lad-tech/mobydick-core/TouchableHighlight', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<TouchableHighlight_1.default underlayColor={'GRAY'} onPress={jest.fn}>
        <View_1.View />
      </TouchableHighlight_1.default>);
        expect(toJSON()).toMatchSnapshot();
    });
});
