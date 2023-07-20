import React, {useCallback, useState} from 'react';
import {boolean, text} from '@storybook/addon-knobs';
import {StyleSheet} from 'react-native';

import {
  ChatInput,
  ChatMessage,
  ChatMessageAvatar,
  IThemeContext,
  ScrollView,
  useTheme,
  View,
} from '@lad-tech/mobydick-core';
import useStyles from '@lad-tech/mobydick-core/src/styles/theme/hooks/useStyles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ImageAvatar = require('../other/Example/image/ImageAvatar.png');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Content = require('./image/Content.png');

const userWithPhotoLocal = {
  logo: ImageAvatar,
  firstName: 'Иван',
  lastName: 'Пушкин',
};

const ChatExample = () => {
  const [valueInput, setValueInput] = useState('');
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();
  const messageOne = text('messageOne', 'Я хочу спать');
  const messageTwo = text(
    'messageTwo',
    'Ура! Я могу еще чем-то помочь? Если нет, заверши, пожалуйста, консультацию. Всего хорошего!Ура!',
  );
  const placeholder = text('placeholder', 'Сообщение');
  const onPress = useCallback(() => console.log('valueInput'), []);
  const disabled = boolean('disabled', false);
  const isShowOneIcon = boolean('isShowOneIcon', true);
  const isShowTwoIcon = boolean('isShowTwoIcon', true);

  const isShowPictureMe = boolean('isShowPictureMe', true);
  const isShowPictureNotMe = boolean('isShowPictureNotMe', false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ChatMessageAvatar
          user={userWithPhotoLocal}
          message={messageOne}
          isMe={false}
          time={'12:40'}
        />
        <ChatMessage message={messageTwo} isMe={true} time={'12:42'} />
        {isShowPictureMe && (
          <ChatMessage image={Content} isMe={true} time={'12:43'} />
        )}
        {isShowPictureNotMe && (
          <ChatMessage image={Content} isMe={false} time={'12:43'} />
        )}
      </ScrollView>
      <ChatInput enabled={false}>
        <ChatInput.ChatInputField
          placeholder={placeholder}
          value={valueInput}
          onChangeText={setValueInput}
        />
        {isShowOneIcon && (
          <ChatInput.ChatPressableIcon
            name={'icon-send'}
            onPress={onPress}
            disabled={disabled}
            color={colors.IconWhite}
            backgroundColor={colors.ElementBase}
          />
        )}
        {isShowTwoIcon && (
          <ChatInput.ChatPressableIcon
            name={'icon-attachment'}
            onPress={onPress}
            disabled={disabled}
          />
        )}
      </ChatInput>
    </View>
  );
};
const stylesCreate = ({colors, spaces}: IThemeContext) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    scrollView: {
      backgroundColor: colors.BgSecondary,
      paddingHorizontal: spaces.Space20,
      paddingVertical: spaces.Space12,
    },
  });

export default ChatExample;
