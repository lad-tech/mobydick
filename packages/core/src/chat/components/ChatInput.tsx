import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';

import View from '../../basic/components/View/View';
import useStyles from '../../styles/theme/hooks/useStyles';
import {IThemeContext} from '../../styles';

import ChatInputField from './ChatInputField';
import ChatPressableIcon from './ChatPressableIcon';

const ChatInput: FC<PropsWithChildren<{style?: ViewStyle | ViewStyle[]}>> & {
  ChatInputField: typeof ChatInputField;
  ChatPressableIcon: typeof ChatPressableIcon;
} = props => {
  const {children, style} = props;
  const [styles] = useStyles(stylesCreate);

  return <View style={[styles.container, style]}>{children}</View>;
};

const stylesCreate = ({colors, spaces}: IThemeContext) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: colors.BgPrimary,
      width: '100%',
      paddingHorizontal: spaces.Space20,
      paddingVertical: spaces.Space16,
    },
  });

ChatInput.ChatInputField = ChatInputField;
ChatInput.ChatPressableIcon = ChatPressableIcon;
export default ChatInput;
