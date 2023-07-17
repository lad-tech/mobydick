import {render} from '@testing-library/react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

import ChatInput from '../ChatInput';

describe('@lad-tech/mobydick-core/ChatInput', () => {
  it('renders correctly', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <ChatInput>
          <ChatInput.ChatInputField value={'value'} />
          <ChatInput.ChatPressableIcon
            name={'icon-location'}
            onPress={() => null}
          />
        </ChatInput>
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with containerStyle, style', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <ChatInput style={{flex: 1}} containerStyle={{flex: 1}}>
          <ChatInput.ChatInputField value={'value'} />
          <ChatInput.ChatPressableIcon
            name={'icon-location'}
            onPress={() => null}
          />
        </ChatInput>
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly android', () => {
    Platform.OS = 'android';
    const {toJSON} = render(
      <SafeAreaProvider>
        <ChatInput style={{flex: 1}} containerStyle={{flex: 1}}>
          <ChatInput.ChatInputField value={'value'} />
          <ChatInput.ChatPressableIcon
            name={'icon-location'}
            onPress={() => null}
          />
        </ChatInput>
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
