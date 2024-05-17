"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const TextContent_1 = __importDefault(require("../TextContent"));
describe('@lad-tech/mobydick-core/Title', () => {
    afterEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    });
    it('should renders correctly without titleFont', () => {
        const { toJSON } = (0, react_native_1.render)(<TextContent_1.default title={'title'} titleStyles={{ flex: 1 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with titleFont', () => {
        const { toJSON } = (0, react_native_1.render)(<TextContent_1.default title={'title two'} titleStyles={{ backgroundColor: '#000' }} titleFont={'Medium-Secondary-M'} descriptionText={'descriptionText'} descriptionStyles={{ flex: 1 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly without descriptionFont', () => {
        const { toJSON } = (0, react_native_1.render)(<TextContent_1.default descriptionText={'descriptionText'} descriptionStyles={{ flex: 1 }} title={'title'} titleStyles={{ flex: 1 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with descriptionFont', () => {
        const { toJSON } = (0, react_native_1.render)(<TextContent_1.default descriptionText={'description text two'} descriptionStyles={{ backgroundColor: '#000' }} descriptionFont={'Medium-Secondary-M'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
