"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const react_native_2 = require("react-native");
const ChatInput_1 = __importDefault(require("../ChatInput"));
describe('@lad-tech/mobydick-core/ChatInput', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <ChatInput_1.default>
          <ChatInput_1.default.ChatInputField value={'value'}/>
          <ChatInput_1.default.ChatPressableIcon name={'icon-location'} onPress={() => null}/>
        </ChatInput_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly with containerStyle, style', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <ChatInput_1.default style={{ flex: 1 }} containerStyle={{ flex: 1 }}>
          <ChatInput_1.default.ChatInputField value={'value'}/>
          <ChatInput_1.default.ChatPressableIcon name={'icon-location'} onPress={() => null}/>
        </ChatInput_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly android', () => {
        react_native_2.Platform.OS = 'android';
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <ChatInput_1.default style={{ flex: 1 }} containerStyle={{ flex: 1 }}>
          <ChatInput_1.default.ChatInputField value={'value'}/>
          <ChatInput_1.default.ChatPressableIcon name={'icon-location'} onPress={() => null}/>
        </ChatInput_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
});
