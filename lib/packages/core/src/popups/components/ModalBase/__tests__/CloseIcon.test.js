"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const CloseIcon_1 = __importDefault(require("../CloseIcon"));
describe('@lad-tech/mobydick-core/CloseIcon', () => {
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<CloseIcon_1.default onPress={() => null}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
