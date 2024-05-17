"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const DropDownIcon_1 = __importDefault(require("../DropDownIcon"));
const SimpleIcon_1 = __importDefault(require("../../../../../styles/icons/font/SimpleIcon"));
describe('@lad-tech/mobydick-core/DropDownIcon', () => {
    it('renders correctly standart open', () => {
        const { toJSON } = (0, react_native_1.render)(<DropDownIcon_1.default isOpen={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly standart close', () => {
        const { toJSON } = (0, react_native_1.render)(<DropDownIcon_1.default isOpen={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly custom open', () => {
        const { toJSON } = (0, react_native_1.render)(<DropDownIcon_1.default isOpen={true} rightIcon={<SimpleIcon_1.default name={'icon-calendar'}/>}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly custom close', () => {
        const { toJSON } = (0, react_native_1.render)(<DropDownIcon_1.default isOpen={false} rightIcon={<SimpleIcon_1.default name={'icon-calendar'}/>}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
