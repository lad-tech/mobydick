import {Image} from 'react-native';

import View from '../../basic/components/View/View';
import {Typography} from '../../typography';
import {isNumber} from '../../other/functions/isNumber';
import useStyles from '../../styles/hooks/useStyles';
import {isValidMessageTime} from '../functions/isValidMessageTime';
import {IChatMessage} from '../types';
import {createStyles} from '../../styles';
import px from '../../styles/utils/px';

const ChatMessage = (props: IChatMessage) => {
  const {isMe, message, image, time} = props;
  const [styles] = useStyles(stylesCreate, isMe);

  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        {image && (
          <View style={[styles.image, styles.imageView]}>
            <Image
              source={isNumber(image) ? image : {uri: image}}
              style={styles.image}
            />
          </View>
        )}

        {message && (
          <View style={styles.textArea}>
            <Typography
              font={isMe ? 'Regular-White-XS' : 'Regular-Secondary-XS'}>
              {message}
            </Typography>
          </View>
        )}

        <View style={styles.timeArea}>
          {isValidMessageTime(time) && (
            <Typography
              font={isMe ? 'Regular-WhiteExtra-XXXS' : 'Regular-Muted-XXXS'}>
              {time}
            </Typography>
          )}
        </View>
      </View>
    </View>
  );
};

const stylesCreate = createStyles(({spaces, colors}, isMe: boolean) => ({
  container: {
    flexDirection: 'row',
    alignSelf: isMe ? 'flex-end' : 'flex-start',
    maxWidth: '90%',
  },
  bubble: {
    backgroundColor: isMe ? colors.ElementBase : colors.BgPrimary,
    borderRadius: spaces.Space10,
    borderBottomLeftRadius: isMe ? spaces.Space10 : 0,
    borderBottomRightRadius: isMe ? 0 : spaces.Space10,
    marginVertical: spaces.Space4,
  },
  imageView: {
    margin: spaces.Space4,
  },
  image: {
    minWidth: px(129),
    maxWidth: px(148),
    minHeight: px(129),
    maxHeight: px(148),
  },
  textArea: {
    paddingTop: spaces.Space8,
    paddingBottom: spaces.Space4,
    paddingHorizontal: spaces.Space10,
  },
  timeArea: {
    paddingHorizontal: spaces.Space6,
    paddingBottom: spaces.Space8,
    alignSelf: 'flex-end',
  },
}));

export default ChatMessage;
