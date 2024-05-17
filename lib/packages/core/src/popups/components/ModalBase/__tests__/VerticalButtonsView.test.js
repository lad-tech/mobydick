"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const VerticalButtonsView_1 = __importDefault(require("../VerticalButtonsView"));
const VerticalButton_1 = __importDefault(require("../VerticalButton"));
const types_1 = require("../../../../cta/components/Button/types");
describe('@lad-tech/mobydick-core/modalBase', () => {
    it('should renders correctly VerticalButtonsView one button', () => {
        const { toJSON } = (0, react_native_1.render)(<VerticalButtonsView_1.default>
        <VerticalButton_1.default type={types_1.IButtonTypes.destructive} onPress={() => console.log('onPress')} text={'text'}/>
      </VerticalButtonsView_1.default>);
        expect(toJSON()).toMatchSnapshot();
    });
});
