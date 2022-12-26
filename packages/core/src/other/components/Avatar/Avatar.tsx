import {Image, ImageErrorEventData, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import {Typography} from '../../../typography';
import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/theme/hooks/useStyles';
import rem from '../../../styles/spaces/rem';
import {IThemeContext} from '../../../styles';

import {ISender} from './types';

interface IAvatarProps {
  sender: ISender | null;
}

export const Avatar = ({sender}: IAvatarProps) => {
  const [styles] = useStyles(stylesCreate);
  const [error, setError] = useState<ImageErrorEventData>();

  if (!sender) return null;

  return (
    <View style={styles.container}>
      {error ? (
        <Typography font={'Regular-Primary-H5'}>{sender?.name[0]}</Typography>
      ) : (
        <Image
          source={{uri: sender?.logo, width: rem(40), height: rem(40)}}
          style={{
            borderRadius: rem(64),
          }}
          onError={e => {
            setError(e.nativeEvent);
          }}
          accessibilityLabel={'imageAvatar'}
        />
      )}
    </View>
  );
};

const stylesCreate = ({spaces, colors}: IThemeContext) => {
  return StyleSheet.create({
    container: {
      width: spaces.Space40,
      height: spaces.Space40,
      backgroundColor: colors.ElementBase,
      margin: spaces.Space6,
      borderRadius: spaces.Space64,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
