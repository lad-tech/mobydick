import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

import View from '../../../basic/components/View/View';
import {Typography} from '../../../typography';
import rem from '../../../styles/spaces/rem';
import {IThemeContext} from '../../../styles';
import useStyles from '../../../styles/theme/hooks/useStyles';

import Avatar from './Avatar';
import {IAvatarTypes, IUser} from './types';

interface IProps {
  groups: IUser[];
  backgroundColor?: string;
  type?: IAvatarTypes;
}
const AvatarGroup: FC<IProps> = props => {
  const {groups, ...otherProps} = props;
  const [styles] = useStyles(stylesCreate);
  const count = groups.length - 3;

  return (
    <View style={[styles.container, styles.shadow]}>
      {groups[0] && (
        <Avatar
          user={groups[0]}
          style={[styles.avatarOne, styles.shadow]}
          {...otherProps}
        />
      )}
      {groups[1] && (
        <Avatar
          user={groups[1]}
          style={[styles.avatarTwo, styles.shadow]}
          {...otherProps}
        />
      )}
      {groups[2] && (
        <Avatar
          user={groups[2]}
          style={[styles.avatarThree, styles.shadow]}
          {...otherProps}
        />
      )}

      {count < 3 ? (
        groups[3] && (
          <Avatar
            user={groups[3]}
            style={[styles.avatarFour, styles.shadow]}
            {...otherProps}
          />
        )
      ) : (
        <View style={[styles.countView, styles.shadow]}>
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
    container: {
      flexDirection: 'row',
    },
    countView: {
      width: spaces.Space40,
      height: spaces.Space40,
      borderRadius: spaces.Space20,
      backgroundColor: colors.BgSecondary,
      justifyContent: 'center',
      zIndex: 4,

      borderWidth: spaces.Space1,
      borderColor: colors.BgPrimary,
    },
    countText: {
      alignSelf: 'center',
      textAlign: 'center',
    },
    avatarOne: {
      left: rem(36),
      zIndex: 1,
    },
    avatarTwo: {
      left: spaces.Space24,
      zIndex: 2,
    },
    avatarThree: {
      left: spaces.Space12,
      zIndex: 3,
    },
    avatarFour: {
      left: spaces.Space12,
      zIndex: 4,
    },
    shadow: {
      shadowColor: colors.IconNeutral,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
  });
};
