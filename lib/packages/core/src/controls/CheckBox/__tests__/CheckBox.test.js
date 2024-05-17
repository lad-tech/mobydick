"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Text_1 = __importDefault(require("../../../basic/components/Text/Text"));
const CheckBox_1 = __importDefault(require("../CheckBox"));
describe('CheckBox', () => {
    it('should renders correctly', function () {
        const { toJSON } = (0, react_native_1.render)(<CheckBox_1.default value={'Pepega'}>
        <Text_1.default>Pepega</Text_1.default>
      </CheckBox_1.default>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly checked', function () {
        const { toJSON } = (0, react_native_1.render)(<CheckBox_1.default value={'Pepega'} selected>
        <Text_1.default>Pepega</Text_1.default>
      </CheckBox_1.default>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly disabled', function () {
        const { toJSON } = (0, react_native_1.render)(<CheckBox_1.default value={'Pepega'} disabled>
        <Text_1.default>Pepega</Text_1.default>
      </CheckBox_1.default>);
        expect(toJSON()).toMatchSnapshot();
    });
});
