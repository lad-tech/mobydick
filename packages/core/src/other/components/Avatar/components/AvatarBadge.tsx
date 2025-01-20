import {IBadge, IBadgeTypes} from '../types';
import {BadgeIndicator, ICounterSize} from '../../Badge';
import Counter from '../../Badge/Counter/Counter';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import useStyles from '../../../../styles/hooks/useStyles';
import useTheme from '../../../../styles/hooks/useTheme';
import {createStyles} from '../../../../styles';
import px from '../../../../styles/utils/px';

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
        size={px(12)}
        color={colors.IconWarning}
        style={styles.status}
      />
    );
  }

  return null;
};

const stylesCreate = createStyles(_ => ({
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
}));

export default AvatarBadge;
