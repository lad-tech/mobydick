"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ChatPressableIcon_1 = __importDefault(require("../ChatPressableIcon"));
describe('@lad-tech/mobydick-core/ChatPressableIcon', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatPressableIcon_1.default name={'icon-location'} onPress={() => null}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly with props', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatPressableIcon_1.default name={'icon-location'} onPress={() => null} color={'red'} backgroundColor={'black'} disabled={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly disabled', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatPressableIcon_1.default name={'icon-location'} onPress={() => null} color={'red'} backgroundColor={'black'} disabled={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
