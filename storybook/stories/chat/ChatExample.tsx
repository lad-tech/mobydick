import React, {useCallback, useState} from 'react';
import {boolean} from '@storybook/addon-knobs';

import {ChatInput, ChatMessage, useTheme, View} from '@npm/mobydick-core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Content = require('./image/Content.png');

const ChatExample = () => {
  const {colors, spaces} = useTheme();
  const [valueInput, setValueInput] = useState('');

  const isShowOneIcon = boolean('isShowOneIcon', true);
  const isShowTwoIcon = boolean('isShowTwoIcon', true);

  const isShowPictureMe = boolean('isShowPictureMe', true);
  const isShowPictureNotMe = boolean('isShowPictureNotMe', false);

  const onPress = useCallback(() => console.log('valueInput'), []);

  return (
    <View>
      <View
        style={{
          backgroundColor: colors.BgSecondary,
          paddingHorizontal: spaces.Space20,
          paddingVertical: spaces.Space12,
        }}>
        <ChatMessage message={'Я хочу спать'} isMe={true} time={'12:40'} />
        <ChatMessage
          message={
            'Ура! Я могу еще чем-то помочь? Если нет, заверши, пожалуйста, консультацию. Всего хорошего!'
          }
          isMe={false}
          time={'12:92'}
        />
        {isShowPictureMe && (
          <ChatMessage image={Content} isMe={true} time={'12:43'} />
        )}
        {isShowPictureNotMe && (
          <ChatMessage image={Content} isMe={false} time={'12:43'} />
        )}
      </View>
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
