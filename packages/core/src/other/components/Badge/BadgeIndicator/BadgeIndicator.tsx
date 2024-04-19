import {FC, useCallback} from 'react';

import View from '../../../../basic/components/View/View';
import useStyles from '../../../../styles/hooks/useStyles';
import useTheme from '../../../../styles/hooks/useTheme';
import rem from '../../../../styles/utils/rem';
import {createStyles} from '../../../../styles';

import {IBadgeIndicatorProps, IIndicatorTypes} from './types';

const BadgeIndicator: FC<IBadgeIndicatorProps> = ({type, style}) => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const getBackgroundColor = useCallback(() => {
    switch (type) {
      case IIndicatorTypes.secondary:
        return colors.ElementAdditional;
      case IIndicatorTypes.primary:
      default:
        return colors.ElementAttention;
    }
  }, [type]);

  return (
    <View
      style={[styles.indicator, {backgroundColor: getBackgroundColor()}, style]}
    />
  );
};
export default BadgeIndicator;

const stylesCreate = createStyles(({spaces, colors}) => ({
  indicator: {
    position: 'absolute',
    zIndex: 1,
    width: rem(9),
    height: rem(9),
    borderRadius: rem(9) / 2,
    borderColor: colors.BgPrimary,
    borderWidth: spaces.Space1,
  },
}));
