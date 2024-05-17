"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const ChatWidget = () => {
    const [styles] = (0, ui_1.useStyles)(styleFn);
    const [input, setInput] = (0, react_1.useState)('');
    const [myMessages, setMyMessages] = (0, react_1.useState)([
        { time: '12-12-1998', isMe: true, message: 'message' },
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
    return (<ui_1.View style={styles.container}>
      <ui_1.FlatList data={myMessages} bounces={false} ListHeaderComponent={<ui_1.View>
            <ui_1.ChatMessage isMe={true} time={'12-12-1998'} message={'message'}/>
            <ui_1.ChatMessageAvatar user={{
                firstName: 'firstName',
                lastName: 'lastName',
                middleName: 'middleName',
            }} isMe={false} time={'12-12-1998'} message={'message'}/>
          </ui_1.View>} renderItem={renderItem} keyExtractor={keyExtractor}/>

      <ui_1.ChatInput>
        <ui_1.ChatInput.ChatInputField value={input} onChangeText={setInput}/>
        <ui_1.ChatInput.ChatPressableIcon name={'icon-send'} onPress={onSend}/>
      </ui_1.ChatInput>
    </ui_1.View>);
};
exports.ChatWidget = ChatWidget;
const renderItem = ({ item }) => {
    return <ui_1.ChatMessage {...item}/>;
};
const keyExtractor = (_item, index) => index.toString();
const styleFn = (0, ui_1.createStyles)(({ colors }) => ({
    container: { flex: 1, backgroundColor: colors.BgSecondary },
}));
