import React from 'react';
import {Image, StyleSheet} from 'react-native';

import View from '../../basic/components/View/View';
import {Typography} from '../../typography';
import {isNumber} from '../../other/components/Avatar/functions/isNumber';
import {IThemeContext} from '../../styles';
import useStyles from '../../styles/theme/hooks/useStyles';
import rem from '../../styles/spaces/rem';
import {isValidMessageTime} from '../functions/isValidMessageTime';

interface IChatMessage {
  isMe: boolean;
  time: string;
  message?: string;
  image?: string;
}

const ChatMessage = (props: IChatMessage) => {
  const {isMe, message, image, time} = props;
  const [styles] = useStyles(stylesCreate, isMe);

  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        {image && (
          <View style={styles.image}>
            <Image source={isNumber(image) ? image : {uri: image}} />
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

const stylesCreate = ({spaces, colors}: IThemeContext, isMe: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: isMe ? 'flex-end' : 'flex-start',
    },
    bubble: {
      backgroundColor: isMe ? colors.ElementBase : colors.BgPrimary,
      borderRadius: spaces.Space10,
      borderBottomLeftRadius: isMe ? spaces.Space10 : 0,
      borderBottomRightRadius: isMe ? 0 : spaces.Space10,
      marginVertical: spaces.Space4,
    },
    image: {
      margin: spaces.Space4,
      minWidth: rem(129),
      maxWidth: rem(148),
      minHeight: rem(129),
      maxHeight: rem(148),
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
  });

export default ChatMessage;
