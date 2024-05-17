"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ModalSuccess_1 = __importDefault(require("../ModalSuccess"));
describe('@lad-tech/mobydick-core/modalSuccess', () => {
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ModalSuccess_1.default title={'title'} descriptionText={'descriptionText'} id={'id'} onClose={() => null}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with optional', () => {
        const { toJSON } = (0, react_native_1.render)(<ModalSuccess_1.default title={'title'} descriptionText={'descriptionText'} buttonText={'buttonText'} id={'id'} onClose={() => null}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
