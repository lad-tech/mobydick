import React, {useCallback, useState} from 'react';
import {boolean} from '@storybook/addon-knobs';

import {ChatInput, View} from '@npm/mobydick-core';

const ChatExample = () => {
  const [valueInput, setValueInput] = useState('');

  const isShowOneIcon = boolean('isShowOneIcon', true);
  const isShowTwoIcon = boolean('isShowTwoIcon', true);

  const onPress = useCallback(() => console.log('valueInput'), []);

  return (
    <View>
      <ChatInput>
        <ChatInput.ChatInputField
          placeholder={'Сообщение'}
          value={valueInput}
          onChangeText={setValueInput}
        />
        {isShowOneIcon && (
          <ChatInput.ChatPressableIcon name={'icon-camera'} onPress={onPress} />
        )}
        {isShowTwoIcon && (
          <ChatInput.ChatPressableIcon
            name={'icon-attachment'}
            onPress={onPress}
          />
        )}
      </ChatInput>
    </View>
  );
};

export default ChatExample;
