import {FC, useCallback} from 'react';

import View from '../../../../basic/components/View/View';
import useStyles from '../../../../styles/hooks/useStyles';
import useTheme from '../../../../styles/hooks/useTheme';
import {createStyles} from '../../../../styles';
import px from '../../../../styles/utils/px';

import {IBadgeIndicatorProps, IIndicatorTypes} from './types';

const BadgeIndicator: FC<IBadgeIndicatorProps> = ({type, style}) => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const getBackgroundColor = useCallback(() => {
    switch (type) {
      case IIndicatorTypes.secondary:
        return colors.ElementWarning;
      case IIndicatorTypes.primary:
      default:
        return colors.ElementError;
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
    width: px(9),
    height: px(9),
    borderRadius: px(9) / 2,
    borderColor: colors.BgPrimary,
    borderWidth: spaces.Space1,
  },
}));
