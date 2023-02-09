import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

import View from '../../../basic/components/View/View';
import {Typography} from '../../../typography';
import rem from '../../../styles/spaces/rem';
import {IThemeContext} from '../../../styles';
import useStyles from '../../../styles/theme/hooks/useStyles';

import Avatar from './Avatar';
import {ITypeAvatar, IUser} from './types';

interface IProps {
  groups: IUser[];
  backgroundColor?: string;
  type?: ITypeAvatar;
}
const AvatarGroup: FC<IProps> = props => {
  const {groups, ...otherProps} = props;
  const [styles] = useStyles(stylesCreate);
  const count = groups.length - 3;

  return (
    <View style={{flexDirection: 'row'}}>
      {groups[0] && (
        <Avatar user={groups[0]} style={styles.avatarOne} {...otherProps} />
      )}
      {groups[1] && (
        <Avatar user={groups[1]} style={styles.avatarTwo} {...otherProps} />
      )}
      {groups[2] && (
        <Avatar user={groups[2]} style={styles.avatarThree} {...otherProps} />
      )}

      {count < 3 ? (
        groups[3] && <Avatar user={groups[3]} {...otherProps} />
      ) : (
        <View style={styles.countView}>
          <Typography font={'Medium-Secondary-XXS'} style={styles.countText}>
            {'+' + count.toString()}
          </Typography>
        </View>
      )}
    </View>
  );
};

export default AvatarGroup;

const stylesCreate = ({colors, spaces}: IThemeContext) => {
  return StyleSheet.create({
    countView: {
      width: spaces.Space40,
      height: spaces.Space40,
      borderRadius: spaces.Space20,
      backgroundColor: colors.BgSecondary,
      justifyContent: 'center',
    },
    countText: {
      alignSelf: 'center',
      textAlign: 'center',
    },
    avatarOne: {
      left: rem(36),
      zIndex: 4,
    },
    avatarTwo: {
      left: spaces.Space24,
      zIndex: 3,
    },
    avatarThree: {
      left: spaces.Space12,
      zIndex: 2,
    },
  });
};
