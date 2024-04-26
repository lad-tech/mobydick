import {useStyles, View} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';
import {ChatWidget} from '@widgets/Core/Chat/ui/ChatWidget';

const ChatScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <ChatWidget />
    </View>
  );
};

export default ChatScreen;
