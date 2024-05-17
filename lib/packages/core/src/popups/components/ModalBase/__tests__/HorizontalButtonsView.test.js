"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const types_1 = require("../../../../cta/components/Button/types");
const HorizontalButtonsView_1 = __importDefault(require("../HorizontalButtonsView"));
describe('@lad-tech/mobydick-core/modalBase', () => {
    it('should renders correctly HorizontalButtonsView destructive', () => {
        const { toJSON } = (0, react_native_1.render)(<HorizontalButtonsView_1.default typeLeft={types_1.IButtonTypes.destructive} onPressLeft={() => console.log('onPressLeft')} textLeft={'textLeft'} typeRight={types_1.IButtonTypes.destructive} onPressRight={() => console.log('onPressRight')} textRight={'textRight'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly HorizontalButtonsView secondary', () => {
        const { toJSON } = (0, react_native_1.render)(<HorizontalButtonsView_1.default typeLeft={types_1.IButtonTypes.secondary} onPressLeft={() => console.log('onPressLeft')} textLeft={'textLeft'} typeRight={types_1.IButtonTypes.secondary} onPressRight={() => console.log('onPressRight')} textRight={'textRight'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly HorizontalButtonsView tertiary', () => {
        const { toJSON } = (0, react_native_1.render)(<HorizontalButtonsView_1.default typeLeft={types_1.IButtonTypes.tertiary} onPressLeft={() => console.log('onPressLeft')} textLeft={'textLeft'} typeRight={types_1.IButtonTypes.tertiary} onPressRight={() => console.log('onPressRight')} textRight={'textRight'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly HorizontalButtonsView primary', () => {
        const { toJSON } = (0, react_native_1.render)(<HorizontalButtonsView_1.default typeLeft={types_1.IButtonTypes.primary} onPressLeft={() => console.log('onPressLeft')} textLeft={'textLeft'} typeRight={types_1.IButtonTypes.primary} onPressRight={() => console.log('onPressRight')} textRight={'textRight'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
