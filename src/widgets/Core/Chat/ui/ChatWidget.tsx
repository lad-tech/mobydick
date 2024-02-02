import {useState} from 'react';

import {
  ChatInput,
  ChatMessage,
  ChatMessageAvatar,
  createStyles,
  ScrollView,
  useStyles,
  View,
} from 'shared/ui';

export const ChatWidget = () => {
  const [styles] = useStyles(styleFn);
  const [input, setInput] = useState('');
  const [myMessages, setMyMessages] = useState([
    {time: '12-12-1998', isMe: true, message: 'message'},
  ]);

  const onSend = () => {
    setMyMessages(messages => {
      messages.push({
        time: new Date().toString(),
        isMe: true,
        message: input,
      });

      setInput('');

      return messages;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerChat} bounces={false}>
        <ChatMessage isMe={true} time={'12-12-1998'} message={'message'} />
        <ChatMessageAvatar
          user={{
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
          }}
          isMe={false}
          time={'12-12-1998'}
          message={'message'}
        />
        {myMessages.map(message => (
          <ChatMessage key={message.time} {...message} />
        ))}
      </ScrollView>
      <ChatInput>
        <ChatInput.ChatInputField value={input} onChangeText={setInput} />
        <ChatInput.ChatPressableIcon name={'icon-send'} onPress={onSend} />
      </ChatInput>
    </View>
  );
};

const styleFn = createStyles(({colors, spaces}) => ({
  container: {
    flex: 1,
  },
  containerChat: {
    backgroundColor: colors.BgSecondary,
    padding: spaces.Space8,
  },
}));
