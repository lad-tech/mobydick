"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Title_1 = __importDefault(require("../Title"));
describe('@lad-tech/mobydick-core/SnackbarBase/Title', () => {
    it('should renders correctly without titleFont', () => {
        const { toJSON } = (0, react_native_1.render)(<Title_1.default title={'title'} titleStyles={{ flex: 1 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with titleFont', () => {
        const { toJSON } = (0, react_native_1.render)(<Title_1.default title={'title two'} titleStyles={{ backgroundColor: '#000' }} titleFont={'Medium-Secondary-M'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
