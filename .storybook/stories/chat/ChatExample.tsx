import React, {useCallback, useState} from 'react';
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

const ChatExample = ({
  placeholder,
  messageOne,
  messageTwo,
  disabled,
  isShowOneIcon,
  isShowTwoIcon,
  isShowPictureMe,
  isShowPictureNotMe,
}: {
  placeholder: string;
  messageOne: string;
  messageTwo: string;
  disabled: boolean;
  isShowOneIcon: boolean;
  isShowTwoIcon: boolean;
  isShowPictureMe: boolean;
  isShowPictureNotMe: boolean;
}) => {
  const [valueInput, setValueInput] = useState('');
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();
  const onPress = useCallback(() => console.log('valueInput'), []);

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
