"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ModalBase_1 = __importDefault(require("../ModalBase"));
describe('@lad-tech/mobydick-core/ModalBase', () => {
    afterEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    });
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ModalBase_1.default id={'id'} onClose={() => null}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
