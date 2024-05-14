import {useState} from 'react';
import {FlatListProps, ListRenderItem} from 'react-native';

import {
  ChatInput,
  ChatMessage,
  ChatMessageAvatar,
  createStyles,
  FlatList,
  IChatMessage,
  useStyles,
  View,
} from '@shared/ui';

export const ChatWidget = () => {
  const [styles] = useStyles(styleFn);
  const [input, setInput] = useState('');
  const [myMessages, setMyMessages] = useState([
    {time: '12-12-1998', isMe: true, message: 'message'},
  ]);

  const onSend = () => {
    setMyMessages([
      ...myMessages,
      {
        time: new Date().toString(),
        isMe: true,
        message: input,
      },
    ]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myMessages}
        bounces={false}
        ListHeaderComponent={
          <View>
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
          </View>
        }
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />

      <ChatInput>
        <ChatInput.ChatInputField value={input} onChangeText={setInput} />
        <ChatInput.ChatPressableIcon name={'icon-send'} onPress={onSend} />
      </ChatInput>
    </View>
  );
};

const renderItem: ListRenderItem<IChatMessage> = ({item}) => {
  return <ChatMessage {...item} />;
};

const keyExtractor: FlatListProps<IChatMessage>['keyExtractor'] = (
  _item,
  index,
) => index.toString();

const styleFn = createStyles(({colors}) => ({
  container: {flex: 1, backgroundColor: colors.BgSecondary},
}));
