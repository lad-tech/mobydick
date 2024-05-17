"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const types_1 = require("../types");
const Button_1 = __importDefault(require("../Button"));
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
describe('@lad-tech/mobydick-core/Button', () => {
    it('renders correctly', () => {
        const { toJSON, rerender } = (0, react_native_1.render)(<Button_1.default text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
        rerender(<Button_1.default text={'text'} font={'Bold-Error-L'} size={types_1.IButtonSize.small}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly secondary', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={types_1.IButtonTypes.secondary}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly tertiary', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={types_1.IButtonTypes.tertiary}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly disabled', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={types_1.IButtonTypes.disabled} disabled={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly destructive', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={types_1.IButtonTypes.destructive} size={types_1.IButtonSize.fixed} count={2}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly loading', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={types_1.IButtonTypes.loading} loading={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly fixed', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default size={types_1.IButtonSize.fixed}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly small', () => {
        const { toJSON, rerender } = (0, react_native_1.render)(<Button_1.default size={types_1.IButtonSize.small}/>);
        expect(toJSON()).toMatchSnapshot();
        rerender(<Button_1.default size={types_1.IButtonSize.small} loading={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly large', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default size={types_1.IButtonSize.large}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly left icon size large', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default size={types_1.IButtonSize.large} leftIcon={<View_1.default />} rightIcon={<View_1.default />} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly left icon small', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default size={types_1.IButtonSize.small} leftIcon={<View_1.default />} rightIcon={<View_1.default />}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly without size', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default size={'ISize'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly text', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default size={types_1.IButtonSize.small} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly left icon size small', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default size={types_1.IButtonSize.small} leftIcon={<View_1.default />} rightIcon={<View_1.default />} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly loading without type', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={''}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it.each([types_1.IButtonTypes.tertiary, types_1.IButtonTypes.secondary])('renders correctly loading types', type => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={type} loading={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly loading disabled', () => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={types_1.IButtonTypes.secondary} disabled={true} loading={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it.each(Object.values(types_1.IButtonTypes))('renders correctly loading types', type => {
        const { toJSON } = (0, react_native_1.render)(<Button_1.default type={type} count={23}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
