import {StyleSheet} from 'react-native';

import {IBadge, IBadgeTypes} from '../types';
import {BadgeIndicator, ICounterSize} from '../../Badge';
import Counter from '../../Badge/Counter/Counter';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import useStyles from '../../../../styles/theme/hooks/useStyles';
import useTheme from '../../../../styles/theme/hooks/useTheme';
import rem from '../../../../styles/spaces/rem';

interface IProps {
  badge?: IBadge;
}

const AvatarBadge = (props: IProps): JSX.Element | null => {
  const {badge} = props;
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  if (badge?.type === IBadgeTypes.indicator) {
    return <BadgeIndicator type={badge.value} style={styles.indicator} />;
  }

  if (badge?.type === IBadgeTypes.counter) {
    return (
      <Counter
        type={badge.value}
        style={styles.counter}
        size={ICounterSize.small}
        count={badge.count}
      />
    );
  }
  if (badge?.type === IBadgeTypes.status) {
    return (
      <SimpleIcon
        name={badge.value}
        size={rem(12)}
        color={colors.IconAdditional}
        style={styles.status}
      />
    );
  }

  return null;
};
const stylesCreate = () =>
  StyleSheet.create({
    indicator: {
      bottom: 2,
      right: 2,
    },
    counter: {
      position: 'absolute',
      bottom: -3,
      right: -3,
    },
    status: {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      right: 0,
    },
  });

export default AvatarBadge;
