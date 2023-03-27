import React, {FC, useCallback} from 'react';
import {StyleSheet} from 'react-native';

import View from '../../../../basic/components/View/View';
import useStyles from '../../../../styles/theme/hooks/useStyles';
import {IThemeContext} from '../../../../styles';
import useTheme from '../../../../styles/theme/hooks/useTheme';
import rem from '../../../../styles/spaces/rem';

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

const stylesCreate = ({spaces, colors}: IThemeContext) =>
  StyleSheet.create({
    indicator: {
      position: 'absolute',
      zIndex: 1,
      width: rem(9),
      height: rem(9),
      borderRadius: rem(9) / 2,
      borderColor: colors.BgPrimary,
      borderWidth: spaces.Space1,
    },
  });
