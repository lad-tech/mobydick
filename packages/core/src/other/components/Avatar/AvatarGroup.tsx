import {FC} from 'react';

import View from '../../../basic/components/View/View';
import {TypographyLegacy} from '../../../typography';
import useStyles from '../../../styles/hooks/useStyles';
import {createStyles} from '../../../styles';
import px from '../../../styles/utils/px';

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
          <TypographyLegacy
            font={'Medium-Secondary-XXS'}
            style={styles.countText}>
            {'+' + text.toString()}
          </TypographyLegacy>
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
        ? spaces.Space40 * 4 - px(36)
        : spaces.Space40 * length - spaces.Space12 * (length - 1),
  },
  countView: {
    width: spaces.Space40,
    height: spaces.Space40,
    borderRadius: spaces.Space20,
    backgroundColor: colors.BgSecondary,
    justifyContent: 'center',
    zIndex: 4,
    right: px(36),

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
    right: px(36),
    zIndex: 4,
  },
}));
