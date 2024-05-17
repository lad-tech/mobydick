"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ChatMessage_1 = __importDefault(require("../ChatMessage"));
describe('@lad-tech/mobydick-core/ChatMessage', () => {
    it('renders correctly isNotMe', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatMessage_1.default message={'message'} isMe={false} time={'12:12'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isMe', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatMessage_1.default message={'message'} isMe={true} time={'12:12'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isMe image', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatMessage_1.default image={'https://vraki.net/sites/default/files/inline/images/30_55.jpg'} isMe={true} time={'12:12'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isMe image number two', () => {
        const fileHandle = 42;
        const { toJSON } = (0, react_native_1.render)(<ChatMessage_1.default image={fileHandle} isMe={true} time={'12:12'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly  isNotValid time', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatMessage_1.default message={'message'} time={'12:98'} isMe={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
