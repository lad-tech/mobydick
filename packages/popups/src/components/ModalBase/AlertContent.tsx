import React, {FC} from 'react';
import {
  rem,
  SimpleIcon,
  SimpleIconName,
  useStyles,
  useTheme,
} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';
import {ViewStyle} from 'react-native';

import stylesCreate from './stylesCreate';

interface IProps {
  name?: SimpleIconName;
  color?: string;
  size?: number;
  style?: ViewStyle | ViewStyle[];
}

const AlertContent: FC<IProps> = props => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();
  const {name, color, size, style} = props;

  return (
    <View style={[styles.alertView, style]}>
      <SimpleIcon
        name={name || 'icon-check'}
        size={size || rem(36)}
        color={color || colors.IconBase}
      />
    </View>
  );
};

export default AlertContent;
