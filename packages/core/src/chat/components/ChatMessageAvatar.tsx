import {StyleSheet} from 'react-native';

import Avatar from '../../other/components/Avatar/Avatar';
import TouchableOpacity from '../../basic/components/TouchableOpacity/TouchableOpacity';
import {IAvatarSize} from '../../other';
import {IChatMessageAvatar} from '../types';
import View from '../../basic/components/View/View';
import useStyles from '../../styles/hooks/useStyles';
import {IThemeContext} from '../../styles';

import ChatMessage from './ChatMessage';

const ChatMessageAvatar = (props: IChatMessageAvatar) => {
  const {onPress, isMe, message, image, time, ...otherProps} = props;
  const [styles] = useStyles(stylesCreate, isMe);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.avatar}
        disabled={onPress === undefined}>
        <Avatar size={IAvatarSize.S} {...otherProps} />
      </TouchableOpacity>
      <ChatMessage isMe={isMe} message={message} time={time} image={image} />
    </View>
  );
};

const stylesCreate = ({spaces}: IThemeContext, isMe: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: isMe ? 'flex-end' : 'flex-start',
    },
    avatar: {
      paddingRight: spaces.Space8,
      marginVertical: spaces.Space4,
      alignSelf: 'flex-end',
    },
  });

export default ChatMessageAvatar;
