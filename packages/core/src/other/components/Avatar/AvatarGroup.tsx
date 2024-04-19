import {FC} from 'react';

import View from '../../../basic/components/View/View';
import {Typography} from '../../../typography';
import rem from '../../../styles/utils/rem';
import useStyles from '../../../styles/hooks/useStyles';
import {createStyles} from '../../../styles';

import Avatar from './Avatar';
import {IAvatarGroupProps} from './types';

const AvatarGroup: FC<IAvatarGroupProps> = props => {
  const {groups, groupCount = groups.length, ...otherProps} = props;
  const count = groupCount - 3;
  const [styles] = useStyles(stylesCreate, groupCount);
  const maxCount = 99;

  const text = count > maxCount ? maxCount : count;

  return (
    <View style={styles.container}>
      {groups[0] && (
        <Avatar
          user={groups[0]}
          style={styles.avatarOne}
          border
          {...otherProps}
        />
      )}
      {groups[1] && (
        <Avatar
          user={groups[1]}
          style={styles.avatarTwo}
          border
          {...otherProps}
        />
      )}
      {groups[2] && (
        <Avatar
          user={groups[2]}
          style={styles.avatarThree}
          border
          {...otherProps}
        />
      )}

      {groupCount < 5 ? (
        groups[3] && (
          <Avatar
            user={groups[3]}
            style={styles.avatarFour}
            border
            {...otherProps}
          />
        )
      ) : (
        <View style={styles.countView}>
          <Typography font={'Medium-Secondary-XXS'} style={styles.countText}>
            {'+' + text.toString()}
          </Typography>
        </View>
      )}
    </View>
  );
};

export default AvatarGroup;

const stylesCreate = createStyles(({spaces, colors}, length: number) => ({
  container: {
    flexDirection: 'row',
    maxWidth:
      length > 3
        ? spaces.Space40 * 4 - rem(36)
        : spaces.Space40 * length - spaces.Space12 * (length - 1),
  },
  countView: {
    width: spaces.Space40,
    height: spaces.Space40,
    borderRadius: spaces.Space20,
    backgroundColor: colors.BgSecondary,
    justifyContent: 'center',
    zIndex: 4,
    right: rem(36),

    borderWidth: spaces.Space2,
    borderColor: colors.BgPrimary,
  },
  countText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  avatarOne: {
    zIndex: 1,
  },
  avatarTwo: {
    right: spaces.Space12,

    zIndex: 2,
  },
  avatarThree: {
    right: spaces.Space24,
    zIndex: 3,
  },
  avatarFour: {
    right: rem(36),
    zIndex: 4,
  },
}));
