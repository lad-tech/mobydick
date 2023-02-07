import React, {FC, useCallback} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';

import View from '../../../../basic/components/View/View';
import useStyles from '../../../../styles/theme/hooks/useStyles';
import {IThemeContext} from '../../../../styles';
import useTheme from '../../../../styles/theme/hooks/useTheme';

import {IIndicatorTypes} from './types';

interface IProps {
  style?: ViewStyle | ViewStyle[];
  type?: IIndicatorTypes;
}

const BadgeIndicator: FC<IProps> = ({type, style}) => {
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
      minWidth: spaces.Space8,
      height: spaces.Space8,
      borderRadius: spaces.Space8 / 2,
      borderColor: colors.BgPrimary,
      borderWidth: spaces.Space1,
    },
  });
