import {FC, PropsWithChildren} from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAvoidingViewProps} from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

import View from '../../basic/components/View/View';
import {createStyles} from '../../styles';
import useStyles from '../../styles/hooks/useStyles';

import ChatInputField from './ChatInputField';
import ChatPressableIcon from './ChatPressableIcon';

const ChatInput: FC<
  PropsWithChildren<
    {
      containerStyle?: ViewStyle | ViewStyle[];
    } & KeyboardAvoidingViewProps
  >
> & {
  ChatInputField: typeof ChatInputField;
  ChatPressableIcon: typeof ChatPressableIcon;
} = props => {
  const {children, style, enabled = true, containerStyle} = props;
  const [styles] = useStyles(stylesCreate);
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={[
        {
          marginBottom: insets.bottom,
        },
        style,
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={enabled}
      keyboardVerticalOffset={0}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </KeyboardAvoidingView>
  );
};

const stylesCreate = createStyles(({spaces, colors}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.BgPrimary,
    width: '100%',
    paddingHorizontal: spaces.Space20,
    paddingVertical: spaces.Space16,
  },
}));

ChatInput.ChatInputField = ChatInputField;
ChatInput.ChatPressableIcon = ChatPressableIcon;
export default ChatInput;
