"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ChatMessageAvatar_1 = __importDefault(require("../ChatMessageAvatar"));
const userWithoutPhoto = {
    firstName: 'Иван',
    lastName: 'Пушкин',
};
describe('@lad-tech/mobydick-core/ChatMessageAvatar', () => {
    it('renders correctly isNotMe', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatMessageAvatar_1.default user={userWithoutPhoto} message={'message'} isMe={false} time={'12:12'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly onPress', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatMessageAvatar_1.default onPress={() => null} user={userWithoutPhoto} message={'message'} isMe={true} time={'12:12'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
