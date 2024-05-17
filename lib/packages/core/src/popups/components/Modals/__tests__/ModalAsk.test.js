"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const types_1 = require("../../../../cta/components/Button/types");
const ModalAsk_1 = __importDefault(require("../ModalAsk"));
describe('@lad-tech/mobydick-core/modalAsk', () => {
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ModalAsk_1.default title={'title'} descriptionText={'descriptionText'} onPressRight={() => null} id={'id'} onClose={() => null}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with optional', () => {
        const { toJSON } = (0, react_native_1.render)(<ModalAsk_1.default title={'title'} descriptionText={'descriptionText'} onPressRight={() => null} typeRight={types_1.IButtonTypes.primary} textRight={'textRight'} typeLeft={types_1.IButtonTypes.primary} textLeft={'textLeft'} id={'id'} onClose={() => null}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
