"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const types_1 = require("../../../../cta/components/Button/types");
const LeftButton_1 = __importDefault(require("../LeftButton"));
describe('@lad-tech/mobydick-core/TooltipBase/LeftButton', () => {
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<LeftButton_1.default size={types_1.IButtonSize.fixed} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
